import { Router } from "express";
import {
	create,
	getByUserId,
	edit,
	remove} 
	from "../controllers/visited/visitedAPIController.js"
import { authenticateToken } from "../middleware/authToken.js";

const router = Router();

// Conseguir los visitados del usuario
router.get("/", authenticateToken, getByUserId);

// Crear un nuevo visitado
router.post("/", authenticateToken, create);

// Editar un visitado con su id
router.put("/:id", authenticateToken, edit);

// Eliminar un visitado por su id
router.delete("/:id", authenticateToken, remove);

export default router;