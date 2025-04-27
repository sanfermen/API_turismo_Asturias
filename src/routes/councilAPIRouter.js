import { Router } from "express";
import councilAPIController from "../controllers/council/councilAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";

const router = Router();

// Conseguir todos los concejos
router.get("/", authenticateToken, councilAPIController.getAll);

// Conseguir un concejo por su id
router.get("/:id", authenticateToken, councilAPIController.getByID);

export default router;