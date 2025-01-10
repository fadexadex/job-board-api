import express from "express";
import {
  createEmployerController,
  createJobPostingController,
  getAllEmpoyerJobPostingsController,
} from "./controllers";
import {
  validateCreateEmployer,
  validateCreateJobPosting,
  validateEmployerId,
} from "../../middlewares/validators";
import { authGuard, employerGuard } from "../../middlewares/authGuard";

const router = express.Router();

router.post(
  "/create",
  authGuard,
  employerGuard,
  validateCreateEmployer,
  createEmployerController
);

router.post(
  "/job-postings/create",
  authGuard,
  employerGuard,
  validateCreateJobPosting,
  createJobPostingController
);

router.get(
  "/job-postings/:id",
  authGuard,
  employerGuard,
  validateEmployerId,
  getAllEmpoyerJobPostingsController
);

export default router;
