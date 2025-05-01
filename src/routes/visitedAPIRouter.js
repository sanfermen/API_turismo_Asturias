import { Router } from "express";
import { visitedController } from "../controllers/visited/visitedAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";

const router = Router();

// Conseguir los visitados del usuario
router.get("/", authenticateToken, visitedController.getByUserId);

// Crear un nuevo visitado
router.post("/", authenticateToken, visitedController.create);

// Editar un visitado con su id
router.put("/:id", authenticateToken, visitedController.edit);

// Eliminar un visitado por su id
router.delete("/:id", authenticateToken, visitedController.remove);

export default router;