import express from "express";

import { createInvoice, getInvoices } from "../controllers/invoiceController.js";

import protect from "../middlewares/authMiddleware.js";

import validate from "../middlewares/validateMiddleware.js";

import { invoiceValidation } from "../validations/invoiceValidation.js";

const router = express.Router();

router.post("/", protect, invoiceValidation, validate, createInvoice);
router.get("/", protect, getInvoices);

export default router;
