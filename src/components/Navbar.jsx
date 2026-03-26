import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCartStore, { useCartItemCount } from "../store/useCartStore";

const Navbar = () => {
  const { openCart } = useCartStore();
  const itemCount = useCartItemCount();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-primary">
              La Tavola
            </h1>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Menu
            </Link>

            <button
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
              style={{ position: "relative" }}
            >
              <FaCartShopping className="text-xl" />
              {itemCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    backgroundColor: "#dc2626",
                    color: "white",
                    fontSize: "10px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    zIndex: 9999,
                  }}
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
