import { verifyToken } from "../utils/token.js";

function authenticateToken(req, res, next) {
	const authHeader = req.headers.authorization;
	console.log("authorization", authHeader);
	if (!authHeader) {
		return res.status(401).json({ error: "Token no proporcionado"});
	}
	const tokenParts = authHeader.split(" ");
	if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
		return res.status(401).json({ error: "Formato de token inválido"});
	}
	const token = tokenParts[1];

	try {
		const result = verifyToken(token);
		req.user = {
			user_id: result.user_id,
			role: result.role
		};
		next();
	} catch (err) {
		console.error("Error al verificar el token", err);
		return res.status(403).json({ error: "Token inválido o expirado" });
	}
}

export default authenticateToken;