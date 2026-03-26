import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-red-500 to-secondary">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4"
        >
          La Tavola
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
        >
          Autentica cucina italiana nel cuore della città
        </motion.p>

        <motion.button
          onClick={() => (window.location.href = "#menu")}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-full font-bold text-lg shadow-lg ordina-button border-2 border-primary hover:bg-primary hover:text-white transition-colors"
          style={{
            cursor: "pointer",
            backgroundColor: "#ffffff",
            color: "#dc2626",
          }}
        >
          Ordina Ora
        </motion.button>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full"
      />
    </section>
  );
};

export default Hero;
