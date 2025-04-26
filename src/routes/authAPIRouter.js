import { Router } from "express";
import authAPIController from "../controllers/authentication/authAPIController.js";

const router = Router();

router.post("/register", authAPIController.register);
router.post("/login", authAPIController.login);
router.post("/logout", authAPIController.logout);

export default router;