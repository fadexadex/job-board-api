import { Router } from "express";
import {
  applyForAJobController,
  createJobSeekerProfileController,
  getAllJobPostingsController,
  getJobPostingDetailsController,
} from "./controllers";
import { authGuard, jobSeekerGuard } from "middlewares/authGuard";
import upload from "../../utils/multer";

const router = Router();

//next up create validation schemas for the routes

router.post(
  "/create-profile",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "coverLetter", maxCount: 1 },
  ]),
  createJobSeekerProfileController
);

router.post("/apply/:jobId", authGuard, jobSeekerGuard, applyForAJobController);

router.get(
  "/job-postings",
  authGuard,
  jobSeekerGuard,
  getAllJobPostingsController
);

router.get(
  "/job-postings/:id",
  authGuard,
  jobSeekerGuard,
  getJobPostingDetailsController
);

export default router;
