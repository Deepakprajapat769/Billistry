import express from "express";

import { signup, login } from "../controllers/authController.js";

import validate from "../middlewares/validateMiddleware.js";

import {
  signupValidation,
  loginValidation,
} from "../validations/authValidation.js";

const router = express.Router();

router.post("/signup", signupValidation, validate, signup);

router.post("/login", loginValidation, validate, login);

export default router;
