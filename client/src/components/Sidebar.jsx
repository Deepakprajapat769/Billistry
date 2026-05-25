import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-black text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        Billistry
      </h1>

      <div className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>

        <Link to="/customers">
          Customers
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/invoices">
          Invoices
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;