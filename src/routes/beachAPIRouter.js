import { Router } from "express";
import beachAPIController from "../controllers/beach/beachAPIController.js";

const router = Router();

// Conseguir todas las playas
router.get("/", beachAPIController.getAll);

// Conseguir una playa por su id
router.get("/:id", beachAPIController.getByID);

// Conseguir las playas de un concejo
router.get("/by-council/:council_id", beachAPIController.getByCouncil);


export default router;