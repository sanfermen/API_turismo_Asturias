import { Router } from "express";
import beachAPIController from "../controllers/beach/beachAPIController.js";
import { authenticateToken } from "../middleware/authToken.js";

const router = Router();

// Conseguir todas las playas
router.get("/", authenticateToken, beachAPIController.getAll);

// Conseguir una playa por su id
router.get("/:id", authenticateToken, beachAPIController.getByID);

// Conseguir las playas de un concejo
router.get("/by-council/:council_id", authenticateToken, beachAPIController.getByCouncil);


export default router;