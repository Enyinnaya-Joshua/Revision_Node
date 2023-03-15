import { NextFunction, Request, Response, Router } from "express";
import { HttpCode } from "../utils/app.error";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(HttpCode.OK).json({
      message: "welcome to set06",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
