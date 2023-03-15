import { Router } from "express";
import homeRouter from "../routes/homeRoute";
import authRouter from "../routes/auth.routes";

const router = Router();

router.use("/", homeRouter);
router.use("/auth", authRouter);

export default router;
