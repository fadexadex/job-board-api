import { ParsedQs } from 'qs';

declare global {
  namespace Express {
    interface Request {
      user?: any;
      fileValidationError?: string;
      query: {
        minSalary?: number;
        maxSalary?: number;
      }& ParsedQs
    }
  }
}

export * from "./models/user";
export * from "./models/employer";
export * from "./models/jobSeeker";
export * from "./models/enums";
export * from "./interfaces/userInterfaces";
