import {
  createJobSeekerProfile,
  getAllJobPostings,
  getJobPostingDetails,
} from "../services";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import uploadDocToCloud from "../../../utils/uploadDocToClodinary";
import { IFilter } from "utils/types";
import { JobType } from "@prisma/client";

const createJobSeekerProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const resumePath = files["resume"][0].path;
    const coverLetterPath = files?.["coverLetter"]?.[0]?.path;
    if (coverLetterPath) {
      const coverLetterUrl = await uploadDocToCloud(coverLetterPath);
      req.body.coverLetter = coverLetterUrl;
    }

    const resumeUrl = await uploadDocToCloud(resumePath);

    req.body.userId = Number(req.body.userId);
    req.body.resumeUrl = resumeUrl;
    req.body.skills = JSON.parse(req.body.skills);

    const user = await createJobSeekerProfile(req.body);

    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllJobPostingsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filter = req.query;
    const filterObj: IFilter = {
      location: (filter?.location ? [filter.location] : []) as string[],
      minSalary: Number(filter?.minSalary),
      maxSalary: Number(filter?.maxSalary),
      jobType: filter?.jobType as JobType,
    };
    const user = await getAllJobPostings(filterObj);
    res.status(StatusCodes.ACCEPTED).json(user);
  } catch (error) {
    next(error);
  }
};

const getJobPostingDetailsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getJobPostingDetails(Number(req.params.id));
    res.status(StatusCodes.ACCEPTED).json(user);
  } catch (error) {
    next(error);
  }
};

export {
  createJobSeekerProfileController,
  getAllJobPostingsController,
  getJobPostingDetailsController,
};
