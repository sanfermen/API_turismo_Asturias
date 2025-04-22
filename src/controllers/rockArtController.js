import Rock_art from "../models/rock_art.js";
import Council from "../models/council.js";
import {
	RockArtNameNotProvided,
	RockArtImageNotProvided,
	RockArtImageInvalid,
	RockArtPeriodNotProvided,
	RockArtWebInvalid,
	RockArtInfoNotProvided,
	RockArtInfoInvalidLength,
	RockArtCoordinatesNotProvided,
	RockArtCoordinatesInvalid,
	RockArtCouncilNotFound,
	RockArtCouncilNotProvided
} from "../utils/errors/rockArtErrors.js"

async function create(data) {
	if (!data.name) {
		throw new RockArtNameNotProvided();
	}
	if (!data.image) {
		throw new RockArtImageNotProvided();
	}
	try {
		new URL(data.image);
	} catch (error) {
		throw new RockArtImageInvalid();
	}
	if (!data.period) {
		throw new RockArtPeriodNotProvided();
	}
	try {
		new URL(data.web);
	} catch {
		throw new RockArtWebInvalid();
	}
	if (!data.information) {
		throw new RockArtInfoNotProvided();
	}
	if (data.information.length < 5 || data.information.length > 300) {
		throw new RockArtInfoInvalidLength();
	}
	if (!data.coordinates) {
		throw new RockArtCoordinatesNotProvided();
	}
	if (
		!data.coordinates.type ||
		data.coordinates.type !== "Point" ||
		!Array.isArray(data.coordinates.coordinates) ||
		data.coordinates.coordinates.length !== 2 ||
		typeof data.coordinates.coordinates[0] !== "number" ||
		typeof data.coordinates.coordinates[1] !== "number"
	){	throw new RockArtCoordinatesInvalid();
	}
	if (!data.council_id){
		throw new RockArtCouncilNotProvided();
	} 
	const council = await Council.findByPk(data.council_id);
	if (!council) {
		throw new RockArtCouncilNotFound();
	}
	const response = await Rock_art.create(data);
	return response;
}

async function getAll() {
	const rockArts = await Rock_art.findAll({
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	return rockArts;
}

async function getById(id) {
	const rockArt = await Rock_art.findByPk(id, {
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	return rockArt;
}

async function getByCouncil(council_id) {
	return await Rock_art.findAll({
		where: {
			rock_art_id : council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
}

async function edit(id, data) {
	const result = await Rock_art.update(
		data,
		{
			where: {
				rock_art_id: id
			}
		}
	)
	return result;
}

async function remove(id) {
	const response = await Rock_art.destroy({
		where: {
			rock_art_id: id
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