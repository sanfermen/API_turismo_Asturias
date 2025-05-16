import visitedController from "./visitedController.js";

async function create(req, res) {
	try {
		const result = await visitedController.create(req.body);
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

async function getByUserId(req, res) {
	try {
		const id = req.user.user_id;
		const result = await visitedController.getByUserId(id);
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

async function edit(req, res) {
	try {
		const id = req.params.id;
		const result = await visitedController.edit(id, req.body);
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
		const result = await visitedController.remove(id);
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
		const result = await visitedController.getWithData(user_id);
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(error.statusCode || 500).json({error: error.message});
	}
}

export default {
	create,
	getByUserId,
	edit,
	remove,
	getWithData
}