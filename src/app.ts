import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { AppError, HttpCode } from "./utils/app.error";
import { errorHandler } from "./middleware/error.handler.ts";
import api from "./api/index";

const appConfig = (app: Application) => {
  // Application
  app

    // Middle Ware

    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    // Api EndPoints
    .use("/api", api)

    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          httpCode: HttpCode.NOT_FOUND,
          message: `This routes ${req.originalUrl} doesn't exist`,
        })
      );
    })
    // Middleware Error Handler
    .use(errorHandler);
};

export default appConfig;
