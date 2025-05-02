import Visited from "../../models/visited.js";
import {
	VisitedTypeInvalid,
	VisitedPointInvalid,
	VisitedUserInvalid,
	VisitedAlreadyExists,
	VisitedCommentsInvalidLength,
	VisitedDateNotProvided,
	VisitedDateInvalid,
	VisitedUserNotProvided,
	VisitedNotFound
} from "../../utils/errors/visitedErrors.js";

async function create(data) {
	if (!data.type || !["area", "route", "beach", "museum", "preroman", "rockArt"].includes(data.type)) {
			throw new VisitedTypeInvalid();
	}
	if (!data.point_id || typeof data.point_id !== "number") {
			throw new VisitedPointInvalid();
	}
	if (!data.user_id) {
			throw new VisitedUserInvalid();
	}
	if (data.comments) {
		if (data.comments.length < 5 || data.comments.length > 400) {
			throw new VisitedCommentsInvalidLength();
		}
	}
	if (!data.visit_date) {
		throw new VisitedDateNotProvided();
	}
	const parsedDate = new Date(data.visit_date);
	if (isNaN(parsedDate)) {
		throw new VisitedDateInvalid();
	}

	const exists = await Visited.findOne({
		where: {
			user_id: data.user_id,
			type: data.type,
			point_id: data.point_id
		}
	});
	if (exists) {
		throw new VisitedAlreadyExists();
	}

	const result = await Visited.create(data);
	return result;
}

async function getByUserId(user_id) {
	if (!user_id) {
		throw new VisitedUserNotProvided();
	}
	const result = await Visited.findAll({
		where: {
			user_id: user_id
		}
	});
	return result;
}

async function edit(id, data) {
	const visited = await Visited.findByPk(id);
	if (!visited) {
		throw new VisitedNotFound();
	}
	const result = await Visited.update(
		data,
		{
			where: {
				visited_id: id
			}
		}
	)
	return result;
}

async function remove(id) {
	const visited = await Visited.findByPk(id);
	if (!visited) {
		throw new VisitedNotFound();
	}
	const result = await Visited.destroy({
		where: {
			visited_id: id
		}
	});
	return result;
}

export default {
	create,
	getByUserId,
	edit,
	remove
}