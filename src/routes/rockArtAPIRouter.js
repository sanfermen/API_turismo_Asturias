import { Router } from "express";
import rockArtAPIController from "../controllers/rockArt/rockArtAPIController.js";

const router = Router();

// Conseguir todos los sitios de arte rupestre
router.get("/", rockArtAPIController.getAll);

// Crear un nuevo sitio de arte rupestre
router.post("/", rockArtAPIController.create);

// Conseguir un sitio de arte rupestre por su id
router.get("/:id", rockArtAPIController.getByID);

// Conseguir los sitios de arte rupestre de un concejo
router.get("/by-council/:council_id", rockArtAPIController.getByCouncil);

// Editar un sitio de arte rupestre con su id
router.post("/:id", rockArtAPIController.edit);

// Borrar un sitio de arte rupestre
router.post("/:id/delete", rockArtAPIController.remove)

export default router;