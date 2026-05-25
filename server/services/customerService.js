import Customer from "../models/Customer.js";

export const getCustomers = async () => {
  return await Customer.find();
};

export const addCustomer = async (data) => {
  return await Customer.create(data);
};