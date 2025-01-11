import { JobType } from "./enums";
export interface IEmployer {
  companyName?: string;
  companySize?: number;
  industry?: string;
  userId: number;
}


export interface ICreateJobPosting {
  employerId: number;
  jobTitle: string;
  jobDescription: string;
  jobType: JobType;
  minSalary: number;
  maxSalary: number;
  locations: string[];
  industry?: string;
  requiredSkills: string[];
  qualifications: string[];
}
