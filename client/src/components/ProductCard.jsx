const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">
        {product.name}
      </h2>

      <p className="text-gray-600 mb-2">
        Quantity: {product.quantity}
      </p>

      <p className="font-bold text-lg">
        ₹{product.price}
      </p>
    </div>
  );
};

export default ProductCard;