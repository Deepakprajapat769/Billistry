import * as invoiceService from "../services/invoiceService.js";

export const createInvoice = async (req, res) => {
  try {
    const invoice = await invoiceService.createInvoice(req.body);

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getInvoices = async (req, res) => {
  try {
    const invoices = await invoiceService.getAllInvoices();

    res.status(200).json({
      success: true,
      data: invoices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};