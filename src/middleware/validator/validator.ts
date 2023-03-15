import { NextFunction } from "express";
import Joi from "joi";
import { AppError, HttpCode } from "../../utils/app.error";

export const validator = (
  schemaName: Joi.ObjectSchema,
  body: Object,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  try {
    value.error
      ? next(
          new AppError({
            httpCode: HttpCode.UNPROCESSABLE_IDENTITY,
            message: value.error.details[0].message,
          })
        )
      : next();
  } catch (error) {
    next(
      new AppError({
        httpCode: HttpCode.UNPROCESSABLE_IDENTITY,
        message: "error",
      })
    );
  }
};
