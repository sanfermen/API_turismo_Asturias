import { Router } from "express";
import areaAPIController from "../controllers/area/areaAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

// Conseguir todas las áreas
router.get("/", authenticateToken, areaAPIController.getAll);

// Crear una nueva área
router.post("/", authenticateToken, requireAdmin, areaAPIController.create);

// Conseguir un área por su id
router.get("/:id", authenticateToken,areaAPIController.getByID);

// Conseguir las areas de un concejo
router.get("/by-council/:council_id", authenticateToken, areaAPIController.getByCouncil);

// Editar un área con su id
router.put("/:id", authenticateToken, requireAdmin, areaAPIController.edit);

// borrar un área
router.delete("/:id", authenticateToken, requireAdmin, areaAPIController.remove)

export default router;