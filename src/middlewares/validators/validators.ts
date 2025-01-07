import { Request, Response, NextFunction } from "express";
import {
  registerSchema,
  loginSchema,
} from "../../middlewares/validators/validatorSchemas";
import { AppError } from "../../middlewares/errorHandler";

export const validateRegisterBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false }); 
  if (error) {
    next(new AppError(error.details.map((err) => err.message).join(", "), 400));
  } else {
    next();
  }
};

export const validateLoginBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });
  if (error) {
    next(new AppError(error.details.map((err) => err.message).join(", "), 400));
  } else {
    next();
  }
};
