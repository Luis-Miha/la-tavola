import { motion } from "framer-motion";
import {
  FaMinus,
  FaPlus,
  FaTrashCan,
  FaArrowLeft,
  FaBagShopping,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useCartStore, {
  useCartItems,
  useCartTotal,
} from "../store/useCartStore";

const Cart = () => {
  const { updateQuantity, removeItem, clearCart } = useCartStore();
  const items = useCartItems();
  const total = useCartTotal();
  const navigate = useNavigate();

  // Reindirizza al menu se il carrello è vuoto
  if (items.length === 0) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-800">
              Il tuo carrello
            </h1>
            <button
              onClick={() => {
                clearCart();
                navigate("/");
              }}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Svuota carrello
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-xl shadow-md p-6 flex gap-4"
                >
                  {/* Image */}
                  <div
                    className={`w-24 h-24 ${item.image} rounded-lg flex-shrink-0`}
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <p className="text-primary font-bold text-lg">
                      €{item.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => {
                          updateQuantity(item.id, item.quantity - 1);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <FaMinus className="text-sm text-gray-600" />
                      </button>
                      <span className="font-bold text-lg w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <FaPlus className="text-sm text-gray-600" />
                      </button>
                      <button
                        onClick={() => {
                          removeItem(item.id);
                        }}
                        className="p-2 hover:bg-red-100 rounded-lg ml-auto transition-colors"
                      >
                        <FaTrashCan className="text-sm text-red-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Riepilogo ordine
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotale ({items.reduce((s, i) => s + i.quantity, 0)}{" "}
                      articoli)
                    </span>
                    <span className="font-semibold">€{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Spese consegna</span>
                    <span className="font-semibold">€2.50</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold">Totale</span>
                      <span className="text-lg font-bold text-primary">
                        €{(total + 2.5).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-white text-primary py-4 rounded-lg font-bold text-lg border-2 border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Procedi al checkout
                </motion.button>

                <Link
                  to="/"
                  className="block text-center text-gray-600 mt-4 hover:text-primary transition-colors"
                >
                  Continua lo shopping
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
