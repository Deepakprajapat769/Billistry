import * as customerService from "../services/customerService.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await customerService.getCustomers();

    res.json(customers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addCustomer = async (req, res) => {
  try {
    const customer = await customerService.addCustomer(req.body);

    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};