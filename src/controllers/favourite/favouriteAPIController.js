import favouriteController from "./favouriteController.js";

async function create(req, res) {
	try {
		const result = await favouriteController.create(req.body);
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

async function getByUserId(req,res){
	try {
		const id = req.params.id;
		const result = await favouriteController.getByUserId(id);
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

async function remove(req,res) {
	try {
		const id = req.params.id;
		const result = await favouriteController.remove(id);
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

export default {
	create,
	getByUserId,
	remove
}