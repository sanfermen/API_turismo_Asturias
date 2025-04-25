import { Router } from "express";
import routeAPIController from "../controllers/route/routeAPIController.js";

const router = Router();

// Conseguir todas las rutas
router.get("/", routeAPIController.getAll);

// Crear una nueva ruta
router.post("/", routeAPIController.create);

// Conseguir una ruta por su id
router.get("/:id", routeAPIController.getByID);

// Conseguir las rutas de un concejo
router.get("/by-council/:council_id", routeAPIController.getByCouncil);

// Editar una ruta con su id
router.post("/:id", routeAPIController.edit);

// Borrar una ruta
router.post("/:id/delete", routeAPIController.remove)

export default router;