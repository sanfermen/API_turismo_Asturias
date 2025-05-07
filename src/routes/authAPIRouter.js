import { Router } from "express";
import authAPIController from "../controllers/authentication/authAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";

const router = Router();

router.post("/register", authAPIController.register);
router.post("/login", authAPIController.login);
router.post("/logout", authAPIController.logout);
router.get("/user-info", authenticateToken, authAPIController.getUserInfo);

export default router;