import { RequestHandler } from "express";
import { userSchema } from "./user.schema";
import { validator } from "../validator";

export const registerValidation: RequestHandler = (req, res, next) =>
  validator(userSchema.register, req.body, next);

export const loginValidation: RequestHandler = (req, res, next) =>
  validator(userSchema.login, req.body, next);
