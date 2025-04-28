
import museumController from "./museumController.js";

async function create(req, res) {
	try {
		const result = await museumController.create(req.body);
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
		const museums = await museumController.getAll();
		res.json(museums);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByID(req, res) {
	try {
		const id = req.params.id;
		const museum = await museumController.getById(id);
		res.json(museum);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByCouncil(req, res) {
	try {
		const council_id = parseInt(req.params.council_id, 10);
		if (isNaN(council_id)) {
			return res.status(400).json({ error: "El ID del concejo debe ser un número válido" });
		}
		const museums = await museumController.getByCouncil(council_id);
		res.json(museums);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Error del servidor"});
	}
}

async function edit(req, res) {
	try {
		const id = req.params.id;
		const result = await museumController.edit(id, req.body);
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
		const result = await museumController.remove(id);
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