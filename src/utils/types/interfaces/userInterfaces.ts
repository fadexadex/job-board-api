import { Role } from "../models/enums";

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
