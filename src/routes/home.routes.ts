import { Request, Response, Router, NextFunction } from "express";

const router = Router();
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      message: "welcome to SET06",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
