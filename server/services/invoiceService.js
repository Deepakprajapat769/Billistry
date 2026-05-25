import Invoice from "../models/Invoice.js";
import Product from "../models/Product.js";

export const createInvoice = async (data) => {
  const { customerId, items } = data;

  let totalAmount = 0;

  for (const item of items) {
    const product = await Product.findById(item.productId);

    if (!product) {
      throw new Error("Product not found");
    }

    if (product.quantity < item.quantity) {
      throw new Error("Insufficient stock");
    }

    product.quantity -= item.quantity;

    await product.save();

    item.price = product.price;

    totalAmount += product.price * item.quantity;
  }

  return await Invoice.create({
    customerId,
    items,
    totalAmount,
  });
};