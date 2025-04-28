import Museum from "../../models/museum.js";
import Council from "../../models/council.js";
import {
	MuseumNameNotProvided,
	MuseumImageNotProvided,
	MuseumImageInvalid,
	MuseumWebInvalid,
	MuseumInfoNotProvided,
	MuseumInfoInvalidLength,
	MuseumCoordinatesNotProvided,
	MuseumCoordinatesInvalid,
	MuseumPriceNotProvided,
	MuseumPriceInvalid,
	MuseumAddressNotProvided,
	MuseumAddressInvalidLength,
	MuseumCouncilNotFound,
	MuseumCouncilNotProvided,
	MuseumNotFound,
	MuseumNotFoundInCouncil
} from "../../utils/errors/museumErrors.js"

async function create(data) {
	if (!data.name) {
		throw new MuseumNameNotProvided();
	}
	if (!data.image) {
		throw new MuseumImageNotProvided();
	}
	try {
		new URL(data.image);
	} catch (error) {
		throw new MuseumImageInvalid();
	}
	if (data.web) {
		try {
			new URL(data.web);
		} catch {
			throw new MuseumWebInvalid();
		}
	}
	if (!data.information) {
		throw new MuseumInfoNotProvided();
	}
	if (data.information.length < 5 || data.information.length > 300) {
		throw new MuseumInfoInvalidLength();
	}
	if (data.latitude === undefined || data.latitude === null) {
		throw new MuseumCoordinatesNotProvided();
	}
	if (data.longitude === undefined || data.longitude === null) {
		throw new MuseumCoordinatesNotProvided();
	}
	if (typeof data.latitude !== "number" || typeof data.longitude !== "number") {
		throw new MuseumCoordinatesInvalid();
	}
	if (data.free === undefined || data.free === null) {
		throw new MuseumPriceNotProvided();
	}
	if (typeof data.free !== "boolean") {
		throw new MuseumPriceInvalid();
	}
	if (!data.address) {
		throw new MuseumAddressNotProvided();
	}
	if (data.address.length < 5 || data.address.length > 128) {
		throw new MuseumAddressInvalidLength();
	}
	if (!data.council_id){
		throw new MuseumCouncilNotProvided();
	} 
	const council = await Council.findByPk(data.council_id);
	if (!council) {
		throw new MuseumCouncilNotFound();
	}
	const response = await Museum.create(data);
	return response;
}

async function getAll() {
	const museums = await Museum.findAll({
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	return museums;
}

async function getById(id) {
	const museum = await Museum.findByPk(id, {
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (!museum) {
		throw new MuseumNotFound();
	}
	return museum;
}

async function getByCouncil(council_id) {
	const council = await Council.findByPk(council_id);
	if (!council) {
		throw new MuseumCouncilNotFound();
	}
	const museums = await Museum.findAll({
		where: {
			council_id : council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (museums.length === 0) {
		throw new MuseumNotFoundInCouncil();
	}
	return museums;
}

async function edit(id, data) {
	const museum = await Museum.findByPk(id);
    if (!museum) {
        throw new MuseumNotFound();
    }
	const result = await Museum.update(
		data,
		{
			where: {
				museum_id: id
			}
		}
	)
	return result;
}

async function remove(id) {
	const museum = await Museum.findByPk(id);
    if (!museum) {
        throw new MuseumNotFound();
    }
	const response = await Museum.destroy({
		where: {
			museum_id: id
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