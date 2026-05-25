import { body } from "express-validator";

export const invoiceValidation = [
  body("customerId")
    .notEmpty()
    .withMessage("Customer id is required"),

  body("items")
    .isArray({ min: 1 })
    .withMessage("Invoice items are required"),
];