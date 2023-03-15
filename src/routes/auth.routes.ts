import { Router } from "express";
import { Login, register } from "../controller/user.controller";
import {
  loginValidation,
  registerValidation,
} from "../middleware/validator/user.validation/user.validator";

const router = Router();

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, Login);

export default router;
