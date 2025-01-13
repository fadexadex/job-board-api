import { IFilter, IJobSeeker } from "utils/types";
import JobSeekerRepository from "../jobSeekerRepo";
import { Prisma } from "@prisma/client";
import { AppError } from "../../../middlewares/errorHandler";
import { StatusCodes } from "http-status-codes";

const jobSeekerRepository = new JobSeekerRepository();

const createJobSeekerProfile = async (
  data: Prisma.JobSeekerProfileCreateInput
) => {
  return await jobSeekerRepository.createJobSeeker(data);
};

const applyForAJob = async (jobId: string, jobSeekerId: number) => {
  const jobSeekerProfile: IJobSeeker =
    await jobSeekerRepository.getJobSeekerProfile(jobSeekerId);
    
  if (!jobSeekerProfile) {
    throw new AppError("Job Seeker not found", StatusCodes.NOT_FOUND);
  }

  return await jobSeekerRepository.createJobApplicationWithProfile(
    jobId,
    jobSeekerProfile
  );
};

const getAllJobPostings = async (filter: IFilter) => {
  return await jobSeekerRepository.getAllJobPostings(filter);
};

const getJobPostingDetails = async (jobPostingId: number) => {
  return await jobSeekerRepository.getJobPostingDetails(jobPostingId);
};

export {
  createJobSeekerProfile,
  getAllJobPostings,
  getJobPostingDetails,
  applyForAJob,
};
