import Area from "../../models/area.js";
import Council from "../../models/council.js"
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
	AreaCouncilNotProvided,
	AreaNotFound,
	AreaNotFoundInCouncil
} from "../../utils/errors/areaErrors.js";

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
	if (data.latitude === undefined || data.latitude === null) {
		throw new AreaCoordinatesNotProvided();
	}
	if (data.longitude === undefined || data.longitude === null) {
		throw new AreaCoordinatesNotProvided();
	}
	if (typeof data.latitude !== "number" || typeof data.longitude !== "number") {
		throw new AreaCoordinatesInvalid();
	}
	if (data.drinking_water === undefined || data.drinking_water === null) {
		throw new AreaDrinkingWaterNotProvided();
	}
	if (typeof data.drinking_water !== "boolean") {
		throw new AreaDrinkingWaterInvalid();
	}
	if (data.waste_water === undefined || data.waste_water === null) {
		throw new AreaWasteWaterNotProvided();
	}
	if (typeof data.waste_water !== "boolean") {
		throw new AreaWasteWaterInvalid();
	}
	if (data.black_water === undefined || data.black_water === null) {
		throw new AreaBlackWaterNotProvided();
	}
	if (typeof data.black_water !== "boolean") {
		throw new AreaBlackWaterInvalid();
	}
	if (!data.type) {
		throw new AreaTypeNotProvided();
	}
	if (data.type !== "public" && data.type !== "private") {
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
} 

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
	if (!area) {
		throw new AreaNotFound();
	}
	return area;
}

async function getByCouncil(council_id) {
	const council = await Council.findByPk(council_id);
	if (!council) {
		throw new AreaCouncilNotFound();
	}
	
	const areas = await Area.findAll({
		where: {
			council_id : council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});

	if (areas.length === 0) {
		throw new AreaNotFoundInCouncil();
	}
	return areas;
}

async function edit(id, data) {
	const area = await Area.findByPk(id);
    if (!area) {
        throw new AreaNotFound();
    }
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
	const area = await Area.findByPk(id);
    if (!area) {
        throw new AreaNotFound();
    }
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