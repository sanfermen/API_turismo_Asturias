import Favourite from "../../models/favourite.js";
import {
	FavouritePointInvalid,
	FavouriteTypeInvalid,
	FavouriteUserInvalid,
	FavouriteAlreadyExists,
	FavouriteUserNotProvided,
	FavouriteNotFound
} from "../../utils/errors/favouriteErrors.js";

async function create(data) {
	if (!data.type || !["area", "route", "beach", "museum", "preroman", "rockArt"].includes(data.type)) {
		throw new FavouriteTypeInvalid();
	}
	if (!data.point_id || typeof data.point_id !== "number") {
		throw new FavouritePointInvalid();
	}
	if (!data.user_id) {
		throw new FavouriteUserInvalid();
	}

	const exists = await Favourite.findOne({
		where: {
			user_id: data.user_id,
			type: data.type,
			point_id: data.point_id
		}
	});
	if (exists) {
		throw new FavouriteAlreadyExists();
	}

	const result = await Favourite.create(data);
	return result;
}

async function getByUserId(user_id) {
	if (!user_id) {
		throw new FavouriteUserNotProvided();
	}
	const result = await Favourite.findAll({
		where: {
			user_id: user_id
		}
	});
	return result;
}


async function remove(id) {
	const favourite = await Favourite.findByPk(id);
	if (!favourite) {
		throw new FavouriteNotFound();
	}
	const result = await Favourite.destroy({
		where: {
			favourite_id: id
		}
	});
	return result;
}

export default {
	create,
	getByUserId,
	remove
}