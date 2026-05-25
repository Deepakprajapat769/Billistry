import { body } from "express-validator";

export const productValidation = [
  body("name")
    .notEmpty()
    .withMessage("Product name is required"),

  body("quantity")
    .isNumeric()
    .withMessage("Quantity must be a number"),

  body("price")
    .isNumeric()
    .withMessage("Price must be a number"),
];