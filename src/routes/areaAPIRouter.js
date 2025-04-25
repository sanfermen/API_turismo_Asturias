import { Router } from "express";
import areaAPIController from "../controllers/area/areaAPIController.js";

const router = Router();

// Conseguir todas las áreas
router.get("/", areaAPIController.getAll);

// Crear una nueva área
router.post("/", areaAPIController.create);

// Conseguir un área por su id
router.get("/:id", areaAPIController.getByID);

// Conseguir las areas de un concejo
router.get("/by-council/:council_id", areaAPIController.getByCouncil);

// Editar un área con su id
router.post("/:id", areaAPIController.edit);

// borrar un área
router.post("/:id/delete", areaAPIController.remove)

export default router;