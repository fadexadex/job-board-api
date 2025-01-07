import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AppError } from "./errorHandler";
import { StatusCodes } from "http-status-codes";

const authGuard = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      throw new AppError("Token not provided", StatusCodes.UNAUTHORIZED);
    }
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    next(new AppError("Invalid token", StatusCodes.UNAUTHORIZED));
  }
};

const employerGuard = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role !== "employer") {
    return res.status(StatusCodes.FORBIDDEN).json({
      message: "You are not allowed to perform this action",
    });
  }
  next();
};

const jobSeekerGuard = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role !== "job_seeker") {
    return res.status(StatusCodes.FORBIDDEN).json({
      message: "You are not allowed to perform this action",
    });
  }
  next();
};

export { authGuard, employerGuard, jobSeekerGuard };
