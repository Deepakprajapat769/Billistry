import express from "express";

import { createInvoice } from "../controllers/invoiceController.js";

import protect from "../middlewares/authMiddleware.js";

import validate from "../middlewares/validateMiddleware.js";

import { invoiceValidation } from "../validations/invoiceValidation.js";

const router = express.Router();

router.post("/", protect, invoiceValidation, validate, createInvoice);

export default router;
