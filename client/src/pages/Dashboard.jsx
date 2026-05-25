import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    revenue: 0,
  });

  const fetchData = async () => {
    try {
      const customersRes = await API.get("/customers");
      const productsRes = await API.get("/products");
      const invoicesRes = await API.get("/invoices");

      const customers = customersRes.data || [];
      const products = productsRes.data || [];
      const invoices = invoicesRes.data.data || [];

      const totalRevenue = invoices.reduce(
        (acc, invoice) => acc + invoice.totalAmount,
        0
      );

      setStats({
        customers: customers.length,
        products: products.length,
        revenue: totalRevenue,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card
          title="Customers"
          value={stats.customers}
        />

        <Card
          title="Products"
          value={stats.products}
        />

        <Card
          title="Revenue"
          value={`₹${stats.revenue}`}
        />
      </div>
    </DashboardLayout>
  );
};

const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="text-3xl mt-3 font-bold">
        {value}
      </p>
    </div>
  );
};

export default Dashboard;