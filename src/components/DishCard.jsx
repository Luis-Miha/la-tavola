import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import useCartStore from "../store/useCartStore";

const DishCard = ({ dish }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(dish);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image placeholder */}
      <div className={`h-48 ${dish.image} relative`}>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
          <span className="text-primary font-bold text-lg">
            €{dish.price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {dish.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
        >
          <FaPlus className="text-sm" />
          Aggiungi
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DishCard;
