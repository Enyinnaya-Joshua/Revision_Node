import e, { Request, Response, NextFunction } from "express";
import UserModel from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { AppError, HttpCode } from "../utils/app.error";
import { Iuser } from "../interfaces/user.interface";

export const register = asyncHandler(
  async (req: Request<{}, {}, Iuser>, res: Response, next: NextFunction) => {
    const { email, password, name, role, comfirmPassword } = req.body;

    const user = await UserModel.create({
      name,
      email,
      password,
      comfirmPassword,
      role,
    });

    if (!user)
      next(
        new AppError({
          message: "Account not created",
          httpCode: HttpCode.BAD_REQUEST,
        })
      );

    return res.status(HttpCode.CREATED).json({
      message: "Success",
      data: user,
    });
  }
);

export const Login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password)
      next(
        new AppError({
          message: "Enter an email",
          httpCode: HttpCode.BAD_REQUEST,
        })
      );

    const user = await UserModel.findOne({ email });

    await user?.comparePassword(password);

    return res.status(200).json({
      message: "Success",
      data: user,
    });
  }
);
