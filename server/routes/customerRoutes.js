import express from "express";

import {
  getCustomers,
  addCustomer,
} from "../controllers/customerController.js";

import protect from "../middlewares/authMiddleware.js";

import validate from "../middlewares/validateMiddleware.js";

import { customerValidation } from "../validations/customerValidation.js";

const router = express.Router();

router.get("/", protect, getCustomers);

router.post("/", protect, customerValidation, validate, addCustomer);

export default router;
