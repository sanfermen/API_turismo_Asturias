import councilController from "./councilController.js";

async function getAll(req, res) {
	try {
		const councils = await councilController.getAll();
		res.json(councils);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

async function getByID(req, res) {
	try {
		const id = req.params.id;
		const council = await councilController.getById(id);
		res.json(council);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error del servidor" });
	}
}

export default {
	getAll,
	getByID
}