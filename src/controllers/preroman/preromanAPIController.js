
import preromanController from "./preromanController.js";

async function create(req, res) {
	try {
		const result = await preromanController.create(req.body);
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
		const result = await preromanController.getAll();
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByID(req, res) {
	try {
		const id = req.params.id;
		const result = await preromanController.getById(id);
		res.json(result);
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
		const result = await preromanController.getByCouncil(council_id);
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Error del servidor"});
	}
}

async function edit(req, res) {
	try {
		const id = req.params.id;
		const result = await preromanController.edit(id, req.body);
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
		const result = await preromanController.remove(id);
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