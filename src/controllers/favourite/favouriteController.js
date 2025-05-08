import Favourite from "../../models/favourite.js";
import {
	FavouritePointInvalid,
	FavouriteTypeInvalid,
	FavouriteUserInvalid,
	FavouriteAlreadyExists,
	FavouriteUserNotProvided,
	FavouriteNotFound
} from "../../utils/errors/favouriteErrors.js";
import Area from "../../models/area.js";
import Museum from "../../models/museum.js";
import Route from "../../models/route.js";
import Beach from "../../models/beach.js";
import Preroman from "../../models/preroman_art.js";
import RockArt from "../../models/rock_art.js"

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

async function getWithData(user_id) {
	if (!user_id) throw new FavouriteUserNotProvided();

	const favourites = await Favourite.findAll({ where: { user_id } });
	const grouped = {
		area: [],
		route: [],
		beach: [],
		museum: [],
		preroman: [],
		rockArt: []
	};

	for (const fav of favourites) {
		grouped[fav.type].push(fav.point_id);
	}
	const result = {};

	if (grouped.area.length > 0) {
		result.area = await Area.findAll({where: {area_id: grouped.area}});
	}
	if (grouped.route.length > 0) {
		result.route = await Route.findAll({where: {route_id: grouped.route}});
	}
	if (grouped.beach.length > 0) {
		result.beach = await Beach.findAll({where: {beach_id: grouped.beach}});
	}
	if (grouped.museum.length > 0) {
		result.museum = await Museum.findAll({where: {museum_id: grouped.museum}});
	}
	if (grouped.preroman.length > 0) {
		result.preroman = await Preroman.findAll({where: {preroman_id: grouped.preroman}});
	}
	if (grouped.rockArt.length > 0) {
		result.rockArt = await RockArt.findAll({where: {rockArt_id: grouped.rockArt}});
	}
	return result;
}

export default {
	create,
	getByUserId,
	remove,
	getWithData
}