import express from "express";
import { createEmployerController } from "./controllers";
import { validateCreateEmployer } from "../../middlewares/validators";

const router = express.Router();

router.post(
  "/create",
  validateCreateEmployer,
  createEmployerController
);

export default router;