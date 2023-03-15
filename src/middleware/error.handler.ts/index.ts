import { NextFunction, Request, Response } from "express";
import { AppError, HttpCode } from "../../utils/app.error";

const devError = (err: AppError, res: Response) => {
  return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    error: err.name,
    message: err.message,
    stack: err.stack,
    status: err.httpCode,
  });
};

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,

  next: NextFunction
) => {
  devError(err, res);
};
