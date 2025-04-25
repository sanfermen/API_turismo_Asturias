import Beach from "../../models/beach.js";
import Council from "../../models/council.js";

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
	return beach;
}

async function getByCouncil(council_id) {
	return await Beach.findAll({
		where: {
			council_id: council_id
		},
		include: {
			model: Council,
			attributes: ["name", "zone"]
		}
	});
}

export default {
	getAll,
	getById,
	getByCouncil
}