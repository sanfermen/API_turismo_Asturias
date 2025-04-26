import User from "../../models/user.js";
import {
	UserForbiddenAccess,
	UserNotFound
} from "../../utils/errors/userErrors.js";

async function getAllUsers() {
	const users = await User.findAll({
		attributes: {exclude: ["password"]}
	});
	return users;
}

async function getUserById(data, id) {

	if (data.role !== "admin" && data.user_id != id) {
		throw new UserForbiddenAccess();
	}

	const user = await User.findByPk(id, {
		attributes: { exclude: ["password"]}
	});
	if (!user) {
		throw new UserNotFound();
	};
	return user;
}

async function updateUser(data, id, updateData) {
	if (data.user_id != id) {
		throw new UserForbiddenAccess();
	}
	const user = await User.findByPk(id);
	if (!user) {
		throw new UserNotFound();
	}

	const { name, email } = updateData;
	if (name) {
		user.name = name;
	}
	if (email) {
		user.email = email;
	}
	await user.save();

	return {
		message: "Usuario actualizado",
		user: {
			id: user.user_id,
			name: user.name,
			email: user.email
		}
	}
}

async function deleteUser(data, id) {
	if (data.role !== "admin") {
		throw new UserForbiddenAccess();
	}
	const user = await User.findByPk(id);
	if (!user) {
		throw new UserNotFound();
	}
	await user.destroy();

	return { message: "Usuario eliminado correctamente" };
}

export default {
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser
}