import express from "express";

import { getProducts, addProduct } from "../controllers/productController.js";

import protect from "../middlewares/authMiddleware.js";

import validate from "../middlewares/validateMiddleware.js";

import { productValidation } from "../validations/productValidation.js";

const router = express.Router();

router.get("/", protect, getProducts);

router.post("/", protect, productValidation, validate, addProduct);

export default router;
