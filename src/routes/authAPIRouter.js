import { Router } from "express";
import authAPIController from "../controllers/authentication/authAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";
import { body } from "express-validator";

const router = Router();

router.post("/register", [
	body("password")
		.isLength({min: 8 }).withMessage("Debe tener al menos 8 caracteres")
		.matches(/[a-z]/).withMessage("Debe incluir una letra minúscula")
		.matches(/[A-Z]/).withMessage("Debe incluir una letra mayúscula")
		.matches(/[0-9]/).withMessage("Debe incluir un número")
], authAPIController.register);

router.post("/login", authAPIController.login);
router.post("/logout", authAPIController.logout);
router.get("/user-info", authenticateToken, authAPIController.getUserInfo);

export default router;