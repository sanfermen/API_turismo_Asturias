import beachController from "./beachController.js";

async function getAll(req, res) {
	try {
		const beaches = await beachController.getAll();
		res.json(beaches);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByID(req, res) {
	try {
		const id = req.params.id;
		const beach = await beachController.getById(id);
		res.json(beach);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByCouncil(req, res) {
	try {
		const council_id = req.params.council_id;
		const beaches = await beachController.getByCouncil(council_id);
		res.json(beaches);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Error del servidor"});
	}
}

export default {
	getAll,
	getByID,
	getByCouncil
}