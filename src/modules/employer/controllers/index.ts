import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { createEmployer } from "../services";

const createEmployerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employer = await createEmployer(req.body);
    res.status(StatusCodes.CREATED).json(employer);
  } catch (error) {
    next(error);
  }
};

export { createEmployerController };
