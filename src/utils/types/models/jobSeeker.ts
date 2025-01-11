import { JobType } from "@prisma/client";
import { ApplicationStatus } from "./enums";

interface IApplication {
  id: number;
  jobId: number;
  jobSeekerId: number;
  applicationStatus: ApplicationStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface IJobSeeker {
  userId: number;
  location?: string;
  skills: string[];
  resumeUrl?: string;
  coverLetterUrl?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  applications: IApplication[];
}

export interface IFilter {
  location: string[];
  minSalary: number;
  maxSalary: number;
  jobType: JobType;
}
