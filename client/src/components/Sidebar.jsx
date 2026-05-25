import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `px-4 py-3 rounded-lg block transition ${
      isActive(path)
        ? "bg-white text-black font-semibold"
        : "text-gray-300 hover:bg-gray-800"
    }`;

  return (
    <aside
      className="
        w-35 sm:w-50
        min-h-screen
        bg-black text-white
        p-4 sm:p-5
        flex flex-col
        shrink-0
      "
    >
      <h1 className="text-xl sm:text-2xl font-bold mb-8">
        Billistry
      </h1>

      <nav className="flex flex-col gap-2 text-sm sm:text-base">

        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>

        <Link to="/customers" className={linkClass("/customers")}>
          Customers
        </Link>

        <Link to="/products" className={linkClass("/products")}>
          Products
        </Link>

        <Link to="/invoices" className={linkClass("/invoices")}>
          Invoices
        </Link>

      </nav>
    </aside>
  );
};

export default Sidebar;