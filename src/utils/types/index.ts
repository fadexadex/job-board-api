// model User {
//   id        Int       @id @default(autoincrement())
//   fname     String
//   lname     String
//   email     String    @unique
//   password  String
//   role      Role
//   createdAt DateTime  @default(now())
//   updatedAt DateTime  @updatedAt
//   employer  Employer?
//   jobSeeker JobSeekerProfile?
// }

enum Role {
  EMPLOYER = "employer",
  JOB_SEEKER = "job_seeker",
}

export interface IUserCreate {
  fName: string;
  lName: string;
  email: string;
  role: Role;
  password: string;
}

export interface IUserRegisterBody {
  id: number;
  fName: string;
  lName: string;
  email: string;
  role: Role;
  password: string;
}
export interface IUserLoginBody {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  fName: string;
  lName: string;
  password?: string;
  role: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
