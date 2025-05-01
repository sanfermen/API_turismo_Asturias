import { Router } from "express";
import preromanAPIController from "../controllers/preroman/preromanAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

// Conseguir todo el arte prerrománico
router.get("/", preromanAPIController.getAll);

// Crear un nuevo lugar de arte prerrománico
router.post("/", authenticateToken, requireAdmin, preromanAPIController.create);

// Conseguir un sitio de arte prerrománico por su id
router.get("/:id", preromanAPIController.getByID);

// Conseguir todo el arte prerrománico de un concejo
router.get("/by-council/:council_id", preromanAPIController.getByCouncil);

// Editar un sitio de arte prerrománico con su id
router.put("/:id", authenticateToken, requireAdmin, preromanAPIController.edit);

// borrar un sitio de arte prerrománico
router.delete("/:id", authenticateToken, requireAdmin, preromanAPIController.remove)

export default router;