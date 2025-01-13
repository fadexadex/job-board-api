import { Router } from "express";
import {
  applyForAJobController,
  createJobSeekerProfileController,
  getAllJobPostingsController,
  getJobPostingDetailsController,
} from "./controllers";
import upload from "../../utils/multer";

const router = Router();

router.post(
  "/create-profile",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "coverLetter", maxCount: 1 },
  ]),
  createJobSeekerProfileController
);

router.post("/apply/:jobId", applyForAJobController);

router.get("/job-postings", getAllJobPostingsController);

router.get("/job-postings/:id", getJobPostingDetailsController);

export default router;
