import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const invoiceRefs = useRef({});

  const fetchInvoices = async () => {
    try {
      const response = await API.get("/invoices");
      setInvoices(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">
        Invoices
      </h2>

      <div className="space-y-6">
        {invoices.map((invoice) => (
          <div
            key={invoice._id}
            ref={(el) => (invoiceRefs.current[invoice._id] = el)}
            className="bg-white p-6 rounded-xl shadow border"
          >

            <div className="flex justify-between items-start mb-4">

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {invoice.customerId.name}
                </h3>
                <p className="text-gray-500">
                  {invoice.customerId.phone}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹{invoice.totalAmount}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">
                Items
              </h4>

              {invoice.items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between py-1 text-gray-700"
                >
                  <span>
                    {item.productId.name}
                  </span>

                  <span>
                    {item.quantity} × ₹{item.price}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Invoices;