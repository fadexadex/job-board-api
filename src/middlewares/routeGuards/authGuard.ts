import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../utils/jwt";
import { AppError } from "middlewares/errorHandler";
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

export default authGuard;