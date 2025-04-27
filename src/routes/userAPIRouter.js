import { Router } from "express";
import userAPIController from "../controllers/user/userAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

// Obtener todos los usuarios, solo si eres el Administrador
router.get("/", authenticateToken, requireAdmin, userAPIController.getAllUsers);

// Obtener un usuario por su Id (admin o el mismo)
router.get("/:id", authenticateToken, userAPIController.getUserById);

// Editar un usuario, solo él mismo
router.put("/:id", authenticateToken, userAPIController.updateUser);

// Eliminar un usuario, solo si eres el Administrador
router.delete("/:id", authenticateToken, requireAdmin, userAPIController.deleteUser);

export default router;