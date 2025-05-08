import { createToken } from "../../utils/token.js";
import authController from "./authController.js";

async function register(req, res) {
	try {
		const user = await authController.register(req.body);

		const data = {
			user_id: user.user_id,
			role: user.role
		};
		const token = createToken(data);
		res.status(201).json({
			message: "Usuario registrado correctamente",
			token: token,
			user: {
				id: user.user_id,
				name: user.name,
				email: user.email,
				role: user.role
			}
		});
	} catch (error) {
		console.error(error);
		if (error.statusCode) {
			res.status(error.statusCode).json({ error: error.message });
		} else {
			res.status(500).json({ error: "Error del servidor" });
		}
	}
}

async function login(req, res) {
	try {
		const {email, password} = req.body;
		const result = await authController.login(email, password);

		const data = {
			name: result.name,
			user_id: result.user_id,
			email: result.email,
			role: result.role
		};
		const token = createToken(data);
		res.json({token:token, user:data});
	} catch (error) {
		console.error(error);
		if (error.statusCode) {
			res.status(error.statusCode).json({ error: error.message });
		} else {
			res.status(500).json({ error: "Error del servidor" });
		}
	}
}

function logout(req, res) {
    res.json({ message: "Sesión cerrada correctamente" });
}

async function getUserInfo(req, res) {
	const userId = req.user.user_id;
	const result = await authController.getUserInfo(userId);
	res.send({user: result});
}

export default {
	register,
	login,
	logout,
	getUserInfo
};