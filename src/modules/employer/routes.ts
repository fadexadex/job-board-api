import express from "express";
import { createEmployerController } from "./controllers";
import { validateCreateEmployer } from "../../middlewares/validators";
import { authGuard, employerGuard } from "../../middlewares/routeGuards/authGuard";

const router = express.Router();

router.post(
  "/create",
  validateCreateEmployer,
  authGuard,
  employerGuard,
  createEmployerController
);

export default router;
