import { Router } from "express";
import museumAPIController from "../controllers/museum/museumAPIController.js";

const router = Router();

// Conseguir todos los museos
router.get("/", museumAPIController.getAll);

// Crear una nuevo museo
router.post("/", museumAPIController.create);

// Conseguir un museo por su id
router.get("/:id", museumAPIController.getByID);

// Conseguir los museos de un concejo
router.get("/by-council/:council_id", museumAPIController.getByCouncil);

// Editar un museo con su id
router.post("/:id", museumAPIController.edit);

// Borrar un museo
router.post("/:id/delete", museumAPIController.remove)

export default router;