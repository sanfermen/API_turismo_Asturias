import { Router } from "express";
import councilAPIController from "../controllers/council/councilAPIController.js";

const router = Router();

// Conseguir todos los concejos
router.get("/", councilAPIController.getAll);

// Conseguir un concejo por su id
router.get("/:id", councilAPIController.getByID);

export default router;