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
      const customers = await API.get("/customers");
      const products = await API.get("/products");
      const invoices = await API.get("/invoices");

      const totalRevenue = invoices.data.reduce(
        (acc, inv) => acc + inv.totalAmount,
        0
      );

      setStats({
        customers: customers.data.length,
        products: products.data.length,
        revenue: totalRevenue,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-5">
        <Card title="Customers" value={stats.customers} />
        <Card title="Products" value={stats.products} />
        <Card title="Revenue" value={`₹${stats.revenue}`} />
      </div>
    </DashboardLayout>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white p-5 rounded shadow">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-3xl mt-2">{value}</p>
  </div>
);

export default Dashboard;