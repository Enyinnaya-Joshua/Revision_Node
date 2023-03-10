import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../../utils/AppError";

const devErrors = (err: AppError, res: Response) => {
  return res.status(HttpCode.INTERNAL_SEVER_ERROR).json({
    error: err,
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
  devErrors(err, res);
};
