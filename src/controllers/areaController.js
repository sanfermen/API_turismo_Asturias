import Area from "../models/area.js";
import Council from "../models/council.js"
import { 
	AreaNameNotProvided, 
	AreaImageNotProvided,
	AreaImageInvalid,
	AreaCoordinatesNotProvided,
	AreaCoordinatesInvalid,
	AreaDrinkingWaterNotProvided,
	AreaDrinkingWaterInvalid,
	AreaWasteWaterNotProvided,
	AreaWasteWaterInvalid,
	AreaBlackWaterInvalid,
	AreaBlackWaterNotProvided,
	AreaTypeInvalid,
	AreaTypeNotProvided,
	AreaAddressNotProvided,
	AreaAddressInvalidLength,
	AreaCouncilNotFound,
	AreaCouncilNotProvided
} from "../utils/errors/areaErrors.js";

async function create(data) {
	if (!data.name) {
		throw new AreaNameNotProvided();
	}
	if (!data.image) {
		throw new AreaImageNotProvided();
	}
	try {
		new URL(data.image);
	} catch (error) {
		throw new AreaImageInvalid();
	}
	if (!data.coordinates) {
		throw new AreaCoordinatesNotProvided();
	}
	if (
		!data.coordinates.type ||
		data.coordinates.type !== "Point" ||
		!Array.isArray(data.coordinates.coordinates) ||
		data.coordinates.coordinates.length !== 2 ||
		typeof data.coordinates.coordinates[0] !== "number" ||
		typeof data.coordinates.coordinates[1] !== "number"
	){	throw new AreaCoordinatesInvalid();
	}
	if (!data.drinking_water) {
		throw new AreaDrinkingWaterNotProvided();
	}
	if (typeof data.drinking_water !== "boolean") {
		throw new AreaDrinkingWaterInvalid();
	}
	if (!data.waste_water) {
		throw new AreaWasteWaterNotProvided();
	}
	if (typeof data.waste_water !== "boolean") {
		throw new AreaWasteWaterInvalid();
	}
	if (!data.black_water) {
		throw new AreaBlackWaterNotProvided();
	}
	if (typeof data.black_water !== "boolean") {
		throw new AreaBlackWaterInvalid();
	}
	if (!data.type) {
		throw new AreaTypeNotProvided();
	}
	if (data.type !== "public" || data.type !== "private") {
		throw new AreaTypeInvalid();
	}
	if (!data.address) {
		throw new AreaAddressNotProvided();
	}
	if (data.address.length < 5 || data.address.length > 128) {
		throw new AreaAddressInvalidLength();
	}
	if (!data.council_id){
		throw new AreaCouncilNotProvided();
	} 
	const council = await Council.findByPk(data.council_id);
	if (!council) {
		throw new AreaCouncilNotFound();
	}
	const response = await Area.create(data);
	return response;
} // TODO necesario poner todos los errores?

async function getAll() {
	const areas = await Area.findAll({
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	return areas;
}

async function getById(id) {
	const area = await Area.findByPk(id, {
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	return area;
}
//TODO errores de id?

async function getByCouncil(council_id) {
	return await Area.findAll({
		where: {
			council_id : council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
}

async function edit(id, data) {
	const result = await Area.update(
		data,
		{
			where: {
				area_id: id
			}
		}
	)
	return result;
}

async function remove(id) {
	const response = await Area.destroy({
		where: {
			area_id: id
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