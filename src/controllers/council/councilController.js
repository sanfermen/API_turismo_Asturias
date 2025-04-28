import Council from "../../models/council.js";
import { CouncilNotFound } from "../../utils/errors/councilErrors.js";

async function getAll() {
	const councils = await Council.findAll();
	return councils;
}

async function getById(id) {
	const council = await Council.findByPk(id);
	if (!council) {
		throw new CouncilNotFound();
	}
	return council;
}

export default {
	getAll,
	getById
}