export function requireAdmin(req, res, next) {
	if (req.user.role === "admin") {
		next();
	} else {
		return res.status(403).json({ error: "Acceso restringido al administrador"});
	}
}