import Preroman_art from "../../models/preroman_art.js";
import Council from "../../models/council.js";
import {
	PreromanNameNotProvided,
	PreromanImageNotProvided,
	PreromanImageInvalid,
	PreromanWebInvalid,
	PreromanInfoInvalidLength,
	PreromanUnescoNotProvided,
	PreromanUnescoInvalid,
	PreromanCoordinatesNotProvided,
	PreromanCoordinatesInvalid,
	PreromanAddressInvalidLength,
	PreromanCouncilNotFound,
	PreromanCouncilNotProvided,
	PreromanNotFound,
	PreromanNotFoundInCouncil
} from "../../utils/errors/preromanErrors.js"

async function create(data) {
	if (!data.name) {
		throw new PreromanNameNotProvided();
	}
	if (!data.image) {
		throw new PreromanImageNotProvided();
	}
	try {
		new URL(data.image);
	} catch (error) {
		throw new PreromanImageInvalid();
	}
	try {
		new URL(data.web);
	} catch {
		throw new PreromanWebInvalid();
	}
	if (data.information.length < 5 || data.information.length > 300) {
		throw new PreromanInfoInvalidLength();
	}
	if (!data.unesco_heritage) {
		throw new PreromanUnescoNotProvided();
	}
	if (data.unesco_heritage !== "boolean"){
		throw new PreromanUnescoInvalid();
	}
	if (data.latitude === undefined || data.latitude === null) {
		throw new PreromanCoordinatesNotProvided();
	}
	if (data.longitude === undefined || data.longitude === null) {
		throw new PreromanCoordinatesNotProvided();
	}
	if (typeof data.latitude !== "number" || typeof data.longitude !== "number") {
		throw new PreromanCoordinatesInvalid();
	}
	if (data.address.length < 5 || data.address.length > 128) {
		throw new PreromanAddressInvalidLength();
	}
	if (!data.council_id){
		throw new PreromanCouncilNotProvided();
	} 
	const council = await Council.findByPk(data.council_id);
	if (!council) {
		throw new PreromanCouncilNotFound();
	}
	const response = await Preroman_art.create(data);
	return response;
}

async function getAll() {
	const preromans = await Preroman_art.findAll({
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	return preromans;
}

async function getById(id) {
	const preroman = await Preroman_art.findByPk(id, {
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (!preroman) {
		throw new PreromanNotFound();
	}
	return preroman;
}

async function getByCouncil(council_id) {
	const council = await Council.findByPk(council_id);
	if (!council) {
		throw new PreromanCouncilNotFound();
	}
	const preroman = await Preroman_art.findAll({
		where: {
			council_id : council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (preroman.length === 0) {
			throw new PreromanNotFoundInCouncil();
		}
		return preroman;
}

async function edit(id, data) {
	const preroman = await Preroman_art.findByPk(id);
    if (!preroman) {
        throw new PreromanNotFound();
    }
	const result = await Preroman_art.update(
		data,
		{
			where: {
				preroman_art_id: id
			}
		}
	)
	return result;
}

async function remove(id) {
	const preroman = await Preroman_art.findByPk(id);
    if (!preroman) {
        throw new PreromanNotFound();
    }
	const response = await Preroman_art.destroy({
		where: {
			preroman_art_id: id
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