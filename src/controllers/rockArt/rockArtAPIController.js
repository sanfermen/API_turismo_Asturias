
import rockArtController from "./rockArtController.js";

async function create(req, res) {
	try {
		const result = await rockArtController.create(req.body);
		res.json(result);
	} catch (error) {
		console.error(error);
		if (error.statusCode) {
			res.status(error.statusCode).json({ error: error.message });
		} else {
			res.status(500).json({ error: "Error del servidor" });
		}
	}
}

async function getAll(req, res) {
	try {
		const result = await rockArtController.getAll();
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByID(req, res) {
	try {
		const id = req.params.id;
		const result = await rockArtController.getById(id);
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByCouncil(req, res) {
	try {
		const council_id = req.params.council_id;
		const result = await rockArtController.getByCouncil(council_id);
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Error del servidor"});
	}
}

async function edit(req, res) {
	try {
		const id = req.params.id;
		const result = await rockArtController.edit(id, req.body);
		res.json(result);
	} catch (error) {
		console.error(error);
		if (error.statusCode) {
			res.status(error.statusCode).json({ error: error.message });
		} else {
			res.status(500).json({ error: "Error del servidor" });
		}
	}
}

async function remove(req, res) {
	try {
		const id = req.params.id;
		const result = await rockArtController.remove(id);
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

export default {
	create,
	getAll,
	getByID,
	getByCouncil,
	edit,
	remove
}