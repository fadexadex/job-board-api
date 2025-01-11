import { IFilter } from "utils/types";
import JobSeekerRepository from "../jobSeekerRepo";
import { Prisma } from "@prisma/client";

const jobSeekerRepository = new JobSeekerRepository();

const createJobSeekerProfile = async (data: Prisma.JobSeekerProfileCreateInput) => {
  return await jobSeekerRepository.createJobSeeker(data);
};

const getAllJobPostings = async (filter: IFilter) => {
  return await jobSeekerRepository.getAllJobPostings(filter);
};
 
const getJobPostingDetails = async (jobPostingId: number) => {
  return await jobSeekerRepository.getJobPostingDetails(jobPostingId);
};

export { createJobSeekerProfile, getAllJobPostings, getJobPostingDetails };
