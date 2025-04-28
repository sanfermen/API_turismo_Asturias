import Route from "../../models/route.js"
import Council from "../../models/council.js"
import {
	RouteNameNotProvided,
	RouteImageNotProvided,
	RouteImageInvalid,
	RouteInfoNotProvided,
	RouteInfoInvalidLength,
	RouteCommentsInvalidLength,
	RouteTrackInvalidLength,
	RouteDistanceNotProvided,
	RouteCoordinatesNotProvided,
	RouteCoordinatesInvalid,
	RouteCouncilNotFound,
	RouteCouncilNotProvided,
	RouteNotFound,
	RouteNotFoundInCouncil
} from "../../utils/errors/routeErrors.js"

async function create(data) {
	if (!data.name) {
		throw new RouteNameNotProvided();
	}
	if (!data.image) {
		throw new RouteImageNotProvided();
	}
	try {
		new URL(data.image);
	} catch (error) {
		throw new RouteImageInvalid();
	}
	if (!data.information) {
		throw new RouteInfoNotProvided();
	}
	if (data.information.length < 5 || data.information.length > 300) {
		throw new RouteInfoInvalidLength();
	}
	if (data.comments.length < 5 || data.comments.length > 300) {
		throw new RouteCommentsInvalidLength();
	}
	if (data.comments.length < 5 || data.comments.length > 128) {
		throw new RouteTrackInvalidLength();
	}
	if (!data.distance) {
		throw new RouteDistanceNotProvided();
	}
	if (data.latitude === undefined || data.latitude === null) {
		throw new RouteCoordinatesNotProvided();
	}
	if (data.longitude === undefined || data.longitude === null) {
		throw new RouteCoordinatesNotProvided();
	}
	if (typeof data.latitude !== "number" || typeof data.longitude !== "number") {
		throw new RouteCoordinatesInvalid();
	}
	if (!data.council_id){
		throw new RouteCouncilNotProvided();
	} 
	const council = await Council.findByPk(data.council_id);
	if (!council) {
		throw new RouteCouncilNotFound();
	}
	const response = await Route.create(data);
	return response;
}

async function getAll() {
	const routes = await Route.findAll({
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	})
	return routes;
}

async function getById(id) {
	const route = await Route.findByPk(id, {
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (!route) {
		throw new RouteNotFound();
	}
	return route;
}

async function getByCouncil(council_id) {
	const council = await Council.findByPk(council_id);
	if (!council) {
		throw new RouteCouncilNotFound();
	}
	const routes = await Route.findAll({
		where: {
			council_id: council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (!routes.length === 0) {
		throw new RouteNotFoundInCouncil();
	}
	return routes;
}

async function edit(id, data) {
	const route = await Route.findByPk(id);
    if (!route) {
        throw new RouteNotFound();
    }
	const result = await Route.update(
		data,
		{
			where: {
				route_id: id
			}
		}
	)
	return result;
}

async function remove(id) {
	const route = await Route.findByPk(id);
    if (!route) {
        throw new RouteNotFound();
    }
	const response = await Route.destroy({
		where: {
			route_id: id
		}
	});
	return response;
}

export default {
	create,
	getAll,
	getById,
	getByCouncil,
	edit,
	remove
}