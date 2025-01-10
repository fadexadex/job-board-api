import { Request, Response, NextFunction } from "express";
import {
  createEmployerSchema,
  createJobPostingSchema,
  getEmployerJobPostingsSchema,
} from "./schemas";
import { AppError } from "../../errorHandler";

export const validateCreateEmployer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = createEmployerSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    next(new AppError(error.details.map((err) => err.message).join(", "), 400));
  } else {
    next();
  }
};

export const validateCreateJobPosting = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = createJobPostingSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    next(new AppError(error.details.map((err) => err.message).join(", "), 400));
  } else {
    next();
  }
};

export const validateEmployerId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = getEmployerJobPostingsSchema.validate(req.params, {
    abortEarly: false,
  });
  if (error) {
    next(new AppError(error.details.map((err) => err.message).join(", "), 400));
  } else {
    next();
  }
};
