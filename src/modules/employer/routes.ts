import express from "express";
import { createEmployerController } from "./controllers";
import { validateCreateEmployer } from "../../middlewares/validators";
import authGuard from "middlewares/routeGuards/authGuard";

const router = express.Router();

router.post(
  "/create",
  validateCreateEmployer,
  authGuard,
  createEmployerController
);

export default router;
