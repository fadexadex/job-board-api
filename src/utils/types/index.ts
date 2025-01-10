declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export * from "./models/user";
export * from "./models/employer";
export * from "./models/enums";
export * from "./interfaces/userInterfaces";
