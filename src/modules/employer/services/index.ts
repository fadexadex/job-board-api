import { ICreateJobPosting, IEmployerCreate } from "utils/types";
import EmployerRepository from "../emloyerRepo";

const employerRepository = new EmployerRepository();

const createEmployer = async (data: IEmployerCreate) => {
  return await employerRepository.createEmployer(data);
};

const createJobPosting = async (data: ICreateJobPosting) => {
  return await employerRepository.createJobPosting(data);
};

const getAllEmpoyerJobPostings = async (employerId: number) => {
  return await employerRepository.getAllEmpoyerJobPostings(employerId);
}

export { createEmployer, createJobPosting, getAllEmpoyerJobPostings };