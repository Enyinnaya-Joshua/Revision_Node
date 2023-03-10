import { Router } from "express";
import homeRoute from "../routes/home.routes";

const router = Router();

router.get("/", homeRoute);

export default router;
