import { register, login } from "../services";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await register(req.body);
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await login(req.body);
    res.status(StatusCodes.ACCEPTED).json(user);
  } catch (error) {
    next(error);
  }
};

export { registerController, loginController };
