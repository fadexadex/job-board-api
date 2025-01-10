import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createEmployer,
  createJobPosting,
  getAllEmpoyerJobPostings,
} from "../services";

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

const createJobPostingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobPosting = await createJobPosting(req.body);
    res.status(StatusCodes.CREATED).json(jobPosting);
  } catch (error) {
    next(error);
  }
};

const getAllEmpoyerJobPostingsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobPostings = await getAllEmpoyerJobPostings(Number(req.params.id));
    res.status(StatusCodes.OK).json(jobPostings);
  } catch (error) {
    next(error);
  }
};

export {
  createEmployerController,
  createJobPostingController,
  getAllEmpoyerJobPostingsController,
};
