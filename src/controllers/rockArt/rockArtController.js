import Rock_art from "../../models/rock_art.js";
import Council from "../../models/council.js";
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
	RockArtCouncilNotProvided,
	RockArtNotFound,
	RockArtNotFoundInCouncil
} from "../../utils/errors/rockArtErrors.js"

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
	if (data.latitude === undefined || data.latitude === null) {
		throw new RockArtCoordinatesNotProvided();
	}
	if (data.longitude === undefined || data.longitude === null) {
		throw new RockArtCoordinatesNotProvided();
	}
	if (typeof data.latitude !== "number" || typeof data.longitude !== "number") {
		throw new RockArtCoordinatesInvalid();
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
	if (!rockArt) {
		throw new RockArtNotFound();
	}
	return rockArt;
}

async function getByCouncil(council_id) {
	const council = await Council.findByPk(council_id);
	if (!council) {
		throw new RockArtCouncilNotFound();
	}
	const rockArt = await Rock_art.findAll({
		where: {
			council_id : council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (rockArt.length === 0) {
		throw new RockArtNotFoundInCouncil();
	}
	return rockArt;
}

async function edit(id, data) {
	const rock_art = await Rock_art.findByPk(id);
    if (!rock_art) {
        throw new RockArtNotFound();
    }
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
	const rock_art = await Rock_art.findByPk(id);
    if (!rock_art) {
        throw new RockArtNotFound();
    }
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