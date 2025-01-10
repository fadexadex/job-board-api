import { Role } from "./enums";

export interface IUserCreate {
    fName: string;
    lName: string;
    email: string;
    role: Role;
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