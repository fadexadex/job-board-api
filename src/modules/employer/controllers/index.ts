import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { createEmployer } from "../services";

const createEmployerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.user.role !== "employer") {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: "You are not allowed to perform this action",
      });
    }
    const employer = await createEmployer(req.body);
    res.status(StatusCodes.CREATED).json(employer);
  } catch (error) {
    next(error);
  }
};

export { createEmployerController };
