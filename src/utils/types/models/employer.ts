import { JobType } from "./enums";
export interface IEmployerCreate {
  companyName?: string;
  companySize?: number;
  industry?: string;
  userId: number;
}

// model JobPostings {
//   id             Int         @id @default(autoincrement())
//   employerId     Int
//   jobTitle       String
//   jobDescription String
//   jobType        JobType
//   minSalary      Int?        // Minimum salary range
//   maxSalary      Int?        // Maximum salary range
//   locations       Json        // JSON format for city, state, etc.
//   industry       String?
//   requiredSkills Json?       // JSON array of required skills
//   qualifications String?
//   createdAt      DateTime    @default(now())
//   updatedAt      DateTime    @updatedAt
//   employer       Employer    @relation(fields: [employerId], references: [id])
//   applications   Applications[]
// }

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
