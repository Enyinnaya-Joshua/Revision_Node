import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorhandler";
import { AppError, HttpCode } from "./utils/AppError";
import api from "./api";

const appConfig = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    // Api endpoint

    .use("/api", api)

    // check for unavailable route
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      //   res.status(404).json({
      //     message: `This route ${req.originalUrl} is not found`,
      //   });

      next(
        new AppError({
          httpCode: HttpCode.NON_FOUND,
          message: `This route ${req.originalUrl} doesn't exist`,
        })
      );
    })

    //   Error handler
    .use(errorHandler);
};

export default appConfig;
