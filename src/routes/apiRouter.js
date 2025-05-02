import { Router } from "express";
import areaRouter from "./areaAPIRouter.js";
import beachRouter from "./beachAPIRouter.js";
import councilRouter from "./councilAPIRouter.js";
import museumRouter from "./museumAPIRouter.js";
import preromanRouter from "./preromanAPIRouter.js";
import rockArtRouter from "./rockArtAPIRouter.js";
import routeRouter from "./routeAPIRouter.js";
import userRouter from "./userAPIRouter.js";
import authRouter from "./authAPIRouter.js";
import favRouter from "./favouriteAPIRouter.js";
import visitedRouter from "./visitedAPIRouter.js";

const router = Router();

router.use("/area", areaRouter);
router.use("/beach", beachRouter);
router.use("/council", councilRouter);
router.use("/museum", museumRouter);
router.use("/preroman", preromanRouter);
router.use("/rockArt", rockArtRouter);
router.use("/route", routeRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/favourite", favRouter);
router.use("/visited", visitedRouter);

export default router;