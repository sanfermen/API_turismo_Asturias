import { Router } from "express";
import visitedAPIController from "../controllers/visited/visitedAPIController.js"
import { authenticateToken } from "../middleware/authToken.js";

const router = Router();

// Conseguir los visitados del usuario
router.get("/", authenticateToken, visitedAPIController.getByUserId);

// Crear un nuevo visitado
router.post("/", authenticateToken, visitedAPIController.create);

// Editar un visitado con su id
router.put("/:id", authenticateToken, visitedAPIController.edit);

// Eliminar un visitado por su id
router.delete("/:id", authenticateToken, visitedAPIController.remove);

export default router;