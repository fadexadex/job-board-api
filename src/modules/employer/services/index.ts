import EmployerRepository from "../emloyerRepo";
import { Prisma } from "@prisma/client";

const employerRepository = new EmployerRepository();

const createEmployer = async (data: Prisma.EmployerCreateInput) => {
  return await employerRepository.createEmployer(data);
};

const createJobPosting = async (data: Prisma.JobPostingsCreateInput) => {
  return await employerRepository.createJobPosting(data);
};

const getAllEmpoyerJobPostings = async (employerId: number) => {
  return await employerRepository.getAllEmpoyerJobPostings(employerId);
};

const getJobPostingDetails = async (jobPostingId: number) => {
  return await employerRepository.getJobPostingDetails(jobPostingId);
};

export {
  createEmployer,
  createJobPosting,
  getAllEmpoyerJobPostings,
  getJobPostingDetails,
};
