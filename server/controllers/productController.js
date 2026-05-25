import * as productService from "../services/productService.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = await productService.addProduct(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};