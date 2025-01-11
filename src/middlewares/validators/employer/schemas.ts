import Joi from "joi";
import { IEmployer, ICreateJobPosting } from "utils/types";

export const createEmployerSchema = Joi.object<IEmployer>({
  companyName: Joi.string().optional(),
  companySize: Joi.number().optional(),
  industry: Joi.string().optional(),
  userId: Joi.number().required().messages({
    "any.required": "User ID is required",
    "number.base": "User ID must be a number",
  }),
});

export const createJobPostingSchema = Joi.object<ICreateJobPosting>({
  employerId: Joi.number().required().messages({
    "any.required": "Employer ID is required",
    "number.base": "Employer ID must be a number",
  }),
  jobTitle: Joi.string().min(3).required().messages({
    "string.min": "Job title must be at least 3 characters long",
    "any.required": "Job title is required",
    "string.empty": "Job title cannot be empty",
  }),
  jobDescription: Joi.string().min(10).required().messages({
    "string.min": "Job description must be at least 10 characters long",
    "any.required": "Job description is required",
    "string.empty": "Job description cannot be empty",
  }),
  jobType: Joi.string()
    .valid("full_time", "part_time", "contract")
    .required()
    .messages({
      "any.only":
        "Job type must be one of 'full_time', 'part_time', or 'contract'",
      "any.required": "Job type is required",
    }),
  minSalary: Joi.number().positive().required().messages({
    "any.required": "Minimum salary is required",
    "number.base": "Minimum salary must be a number",
    "number.positive": "Minimum salary must be greater than zero",
  }),
  maxSalary: Joi.number().greater(Joi.ref("minSalary")).required().messages({
    "any.required": "Maximum salary is required",
    "number.base": "Maximum salary must be a number",
    "number.greater": "Maximum salary must be greater than minimum salary",
  }),
  locations: Joi.array()
    .items(
      Joi.string().min(2).messages({
        "string.min": "Each location must be at least 2 characters long",
      })
    )
    .min(1)
    .required()
    .messages({
      "array.base": "Locations must be an array of country names",
      "any.required": "At least one location is required",
    }),
  industry: Joi.string().optional().messages({
    "string.base": "Industry must be a string",
  }),
  requiredSkills: Joi.array()
    .items(
      Joi.string().min(2).messages({
        "string.min": "Each skill must be at least 2 characters long",
      })
    )
    .min(1)
    .required()
    .messages({
      "array.base": "Required skills must be an array of strings",
      "any.required": "At least one required skill is needed",
    }),
  qualifications: Joi.array()
    .items(
      Joi.string().min(2).messages({
        "string.min": "Each qualification must be at least 2 characters long",
      })
    )
    .optional()
    .messages({
      "array.base": "Qualifications must be an array of strings",
    }),
});

export const getEmployerJobPostingsSchema = Joi.object({
  id: Joi.number().required().messages({
    "any.required": "Employer ID is required",
    "number.base": "Employer ID must be a number",
  }),
});
