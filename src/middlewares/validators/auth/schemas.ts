import Joi from "joi";

export const registerSchema = Joi.object({
  fName: Joi.string().min(1).required().messages({
    "string.empty": "First name is required",
    "any.required": "First name is required",
  }),
  lName: Joi.string().min(1).required().messages({
    "string.empty": "Last name is required",
    "any.required": "Last name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
  role: Joi.string()
    .valid("employer", "job_seeker")
    .required()
    .messages({
      "any.only": "Role must be either 'employer' or 'job_seeker'",
      "any.required": "Role is required",
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});
