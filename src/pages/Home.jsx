import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import CategoryFilters from "../components/CategoryFilters";
import DishCard from "../components/DishCard";
import { dishes, categories } from "../data/dishes";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filteredDishes =
    activeCategory === "Tutti"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <CategoryFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Dishes Grid */}
      <section id="menu" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-display font-bold text-gray-800 mb-8 text-center"
          >
            {activeCategory === "Tutti"
              ? "Il Nostro Menu"
              : categories.find((c) => c.id === activeCategory)?.name}
          </motion.h2>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">La Tavola</h3>
          <p className="text-gray-400 mb-4">
            Autentica cucina italiana dal 1985
          </p>
          <p className="text-gray-500 text-sm">
            Via Roma, 123 - Milano | Tel: 02 1234567
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
