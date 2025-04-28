import Beach from "../../models/beach.js";
import Council from "../../models/council.js";
import Beach from "../../models/beach.js";
import { 
	BeachNotFound,
	BeachNotFoundInCouncil,
	BeachCouncilNotFound
 } from "../../utils/errors/beachErrors.js";

async function getAll() {
	const beaches = await Beach.findAll({
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	return beaches;
}

async function getById(id) {
	const beach = await Beach.findByPk(id, {
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (!beach) {
		throw new BeachNotFound();
	}
	return beach;
}

async function getByCouncil(council_id) {
	const council = await Council.findByPk(council_id);
	if (!council) {
		throw new BeachCouncilNotFound();
	}
	const beach = await Beach.findAll({
		where: {
			council_id: council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
	if (beach.length === 0) {
		throw new BeachNotFoundInCouncil();
	}
	return beach;
}

export default {
	getAll,
	getById,
	getByCouncil
}