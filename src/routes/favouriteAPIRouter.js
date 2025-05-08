import { Router } from "express";
import favouriteAPIController from "../controllers/favourite/favouriteAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";

const router = Router();

// Conseguir los favoritos del usuario
router.get("/", authenticateToken, favouriteAPIController.getByUserId);

// Crear un nuevo favorito
router.post("/", authenticateToken, favouriteAPIController.create);

// Eliminar un favorito por su id
router.delete("/:id", authenticateToken, favouriteAPIController.remove);

//Extraer los favoritos con datos y agrupados por tipo
router.get("/with-data", authenticateToken, favouriteAPIController.getWithData);

export default router;