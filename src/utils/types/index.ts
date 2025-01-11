declare global {
  namespace Express {
    interface Request {
      user?: any;
      fileValidationError?: string;
    }
  }
}

export * from "./models/user";
export * from "./models/employer";
export * from "./models/jobSeeker";
export * from "./models/enums";
export * from "./interfaces/userInterfaces";
