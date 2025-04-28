import { Router } from "express";
import museumAPIController from "../controllers/museum/museumAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

// Conseguir todos los museos
router.get("/", authenticateToken, museumAPIController.getAll);

// Crear una nuevo museo
router.post("/", authenticateToken, requireAdmin, museumAPIController.create);

// Conseguir un museo por su id
router.get("/:id", authenticateToken, museumAPIController.getByID);

// Conseguir los museos de un concejo
router.get("/by-council/:council_id", authenticateToken, museumAPIController.getByCouncil);

// Editar un museo con su id
router.put("/:id", authenticateToken, requireAdmin, museumAPIController.edit);

// Borrar un museo
router.delete("/:id", authenticateToken, requireAdmin, museumAPIController.remove)

export default router;