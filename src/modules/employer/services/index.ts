import { IEmployerCreate } from "utils/types";
import EmployerRepository from "../emloyerRepo";

const employerRepository = new EmployerRepository();

const createEmployer = async (data: IEmployerCreate) => {
  return await employerRepository.createEmployer(data);
};


export { createEmployer };