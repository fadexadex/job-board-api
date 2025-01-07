import { IUser } from "./types";
import { generateToken } from "./jwt";

export const sanitizeUserAndGenerateToken = (user: IUser) => {
  const { password: _, ...newUser } = user;
  return { ...newUser, token: generateToken(newUser) };
};
