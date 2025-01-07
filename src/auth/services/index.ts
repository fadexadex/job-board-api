import { AppError } from "../../middlewares/errorHandler";
import AuthRepository from "../authRepository";
import { hashPassword, comparePassword } from "../../utils/bcrypt";
import { IUserRegisterBody, IUserLoginBody } from "../../utils/types";
import { sanitizeUserAndGenerateToken } from "../../utils/sanitizer";
import { StatusCodes } from "http-status-codes";

const authRepository = new AuthRepository();

const register = async ({
  email,
  password,
  fName,
  lName,
  role,
}: IUserRegisterBody) => {
  const alreadyRegistered = await authRepository.getUserByEmail(email);
  if (alreadyRegistered) {
    throw new AppError(
      "User with provided email already exists",
      StatusCodes.BAD_REQUEST
    );
  }
  const passwordHash = await hashPassword(password);

  const user = await authRepository.createUser({
    email,
    fName,
    lName,
    role,
    password: passwordHash,
  });
  if (!user) {
    throw new AppError(
      "An error occured while creating user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  return sanitizeUserAndGenerateToken(user);
};

const login = async ({ email, password }: IUserLoginBody) => {
  const user = await authRepository.getUserByEmail(email);
  if (!user) {
    throw new AppError("No user with provided email exists", StatusCodes.NOT_FOUND);
  }

  const isPasswordMatch = await comparePassword(password, user.password);
  if (!isPasswordMatch) {
    throw new AppError("Password is incorrect", StatusCodes.UNAUTHORIZED);
  }

  return sanitizeUserAndGenerateToken(user);
};

export { register, login };
