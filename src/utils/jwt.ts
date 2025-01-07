import jwt from "jsonwebtoken";
import { IUser } from "./types";

const generateToken = (payload: IUser) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};

const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};

export { generateToken, verifyToken };
