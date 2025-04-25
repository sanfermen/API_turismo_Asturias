import { Router } from "express";
import preromanAPIController from "../controllers/preroman/preromanAPIController.js";

const router = Router();

// Conseguir todo el arte prerrománico
router.get("/", preromanAPIController.getAll);

// Crear un nuevo lugar de arte prerrománico
router.post("/", preromanAPIController.create);

// Conseguir un sitio de arte prerrománico por su id
router.get("/:id", preromanAPIController.getByID);

// Conseguir todo el arte prerrománico de un concejo
router.get("/by-council/:council_id", preromanAPIController.getByCouncil);

// Editar un sitio de arte prerrománico con su id
router.post("/:id", preromanAPIController.edit);

// borrar un sitio de arte prerrománico
router.post("/:id/delete", preromanAPIController.remove)

export default router;