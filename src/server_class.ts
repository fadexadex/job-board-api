import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "./modules/auth/routes";
import employerRoutes from "./modules/employer/routes";
import jobSeekerRoutes from "./modules/jobSeeker/routes";

dotenv.config();

export class Server {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  private enableMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public startApp() {
    this.enableMiddlewares();
    this.app.use("/auth", authRoutes);
    this.app.use("/employer",employerRoutes)
    this.app.use("/job-seeker", jobSeekerRoutes);
    this.app.use(errorHandler);

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
