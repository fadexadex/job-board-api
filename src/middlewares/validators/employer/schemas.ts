import Joi from "joi";
import { IEmployerCreate } from "utils/types";

export const createEmployerSchema = Joi.object<IEmployerCreate>({
  companyName: Joi.string().optional(),
  companySize: Joi.number().optional(),
  industry: Joi.string().optional(),
  userId: Joi.number().required().messages({
    "any.required": "User ID is required",
    "number.base": "User ID must be a number",
  }),
});
