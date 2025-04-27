import { Router } from "express";
import routeAPIController from "../controllers/route/routeAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

// Conseguir todas las rutas
router.get("/", authenticateToken, routeAPIController.getAll);

// Crear una nueva ruta
router.post("/", authenticateToken, requireAdmin, routeAPIController.create);

// Conseguir una ruta por su id
router.get("/:id", authenticateToken, routeAPIController.getByID);

// Conseguir las rutas de un concejo
router.get("/by-council/:council_id", authenticateToken, routeAPIController.getByCouncil);

// Editar una ruta con su id
router.put("/:id", authenticateToken, requireAdmin, routeAPIController.edit);

// Borrar una ruta
router.delete("/:id", authenticateToken, requireAdmin, routeAPIController.remove)

export default router;