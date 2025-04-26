import userController from "./userController.js";

async function getAllUsers(req, res) {
	try {
		const users = await userController.getAllUsers();
		res.json(users);
	} catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor" });
        }
    }
}

async function getUserById(req, res) {
	try {
		const { id } = req.params;
		const actualUser = req.user;
	
		const result = await userController.getUserById(actualUser, id);
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

async function updateUser(req, res) {
	try {
	  const { id } = req.params;
	  const result = await userController.updateUser(req.user, id, req.body);
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

async function deleteUser(req, res) {
	try {
	  const { id } = req.params;
	  const result = await userController.deleteUser(req.user, id);
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
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser
}