import { motion } from "framer-motion";
import {
  FaUtensils,
  FaCheese,
  FaBowlFood,
  FaDrumstickBite,
  FaPizzaSlice,
  FaIceCream,
  FaWineGlass,
} from "react-icons/fa6";

const iconMap = {
  FaUtensils: FaUtensils,
  FaCheese: FaCheese,
  FaBowlFood: FaBowlFood,
  FaDrumstickBite: FaDrumstickBite,
  FaPizzaSlice: FaPizzaSlice,
  FaIceCream: FaIceCream,
  FaWineGlass: FaWineGlass,
};

const CategoryFilters = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="py-6 bg-white sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide max-h-20">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {Icon && <Icon className="text-lg" />}
                <span className="font-medium">{category.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
