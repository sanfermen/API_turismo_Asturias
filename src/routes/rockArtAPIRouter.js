import { Router } from "express";
import rockArtAPIController from "../controllers/rockArt/rockArtAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

// Conseguir todos los sitios de arte rupestre
router.get("/", authenticateToken,rockArtAPIController.getAll);

// Crear un nuevo sitio de arte rupestre
router.post("/", authenticateToken, requireAdmin, rockArtAPIController.create);

// Conseguir un sitio de arte rupestre por su id
router.get("/:id", authenticateToken, rockArtAPIController.getByID);

// Conseguir los sitios de arte rupestre de un concejo
router.get("/by-council/:council_id", authenticateToken, rockArtAPIController.getByCouncil);

// Editar un sitio de arte rupestre con su id
router.post("/:id", authenticateToken, requireAdmin, rockArtAPIController.edit);

// Borrar un sitio de arte rupestre
router.post("/:id/delete", authenticateToken, requireAdmin, rockArtAPIController.remove)

export default router;