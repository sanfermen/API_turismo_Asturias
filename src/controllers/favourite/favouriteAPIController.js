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
		const id = req.user.user_id;
		const result = await favouriteController.getByUserId(id);
		res.json(result);
	} catch (error) {
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

async function getWithData(req, res) {
	try {
		const user_id = req.user.user_id;
		const result = await favouriteController.getWithData(user_id);
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(error.statusCode || 500).json({error: error.message});
	}
}

export default {
	create,
	getByUserId,
	remove,
	getWithData
}