import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCartStore, {
  useCartItems,
  useCartTotal,
} from "../store/useCartStore";

const CartDrawer = () => {
  const { isCartOpen, closeCart, updateQuantity, removeItem } = useCartStore();
  const items = useCartItems();
  const total = useCartTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                Il tuo carrello
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaXmark className="text-gray-600" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">
                    Il carrello è vuoto
                  </p>
                  <button
                    onClick={closeCart}
                    className="text-primary font-medium hover:underline"
                  >
                    Torna al menu
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="flex gap-4 bg-gray-50 p-4 rounded-lg"
                    >
                      {/* Image */}
                      <div
                        className={`w-20 h-20 ${item.image} rounded-lg flex-shrink-0`}
                      />

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold">
                          €{item.price.toFixed(2)}
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <FaMinus className="text-xs text-gray-600" />
                          </button>
                          <span className="font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <FaPlus className="text-xs text-gray-600" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:bg-red-100 rounded ml-auto"
                          >
                            <FaTrashCan className="text-xs text-red-500" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="font-medium">Subtotale:</span>
                  <span className="font-bold">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Spese consegna:</span>
                  <span>€2.50</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-4">
                  <span>Totale:</span>
                  <span className="text-primary">
                    €{(total + 2.5).toFixed(2)}
                  </span>
                </div>
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="block w-full bg-primary text-white text-center py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Vai al carrello
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
