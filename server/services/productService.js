import Product from "../models/Product.js";

export const getProducts = async () => {
  return await Product.find();
};

export const addProduct = async (data) => {
  return await Product.create(data);
};