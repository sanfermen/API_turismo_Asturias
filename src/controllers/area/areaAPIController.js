
import areaController from "./areaController.js";

async function create(req, res) {
    try {
        const result = await areaController.create(req.body);
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
        const areas = await areaController.getAll();
        res.json(areas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const area = await areaController.getById(id);
        res.json(area);
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
		const areas = await areaController.getByCouncil(council_id);
		res.json(areas);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "Error del servidor"});
	}
}

async function edit(req, res) {
    try {
        const id = req.params.id;
        const result = await areaController.edit(id, req.body);
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
        const result = await areaController.remove(id);
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