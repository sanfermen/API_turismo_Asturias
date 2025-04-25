import Council from "../../models/council.js";

async function getAll() {
	const councils = await Council.findAll();
	return councils;
}

async function getById(id) {
	const council = await Council.findByPk(id);
	return council;
}

export default {
	getAll,
	getById
}