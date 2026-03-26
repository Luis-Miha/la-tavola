import { motion } from "framer-motion";
import { FaCircleCheck, FaHouse, FaReceipt } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <FaCircleCheck className="text-5xl text-green-500" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-display font-bold text-gray-800 mb-4"
          >
            Ordine Confermato!
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-8"
          >
            Grazie per il tuo ordine! Ti invieremo una conferma via email con
            tutti i dettagli.
          </motion.p>

          {/* Order Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaReceipt className="text-primary text-xl" />
              <span className="text-gray-600">Numero ordine</span>
            </div>
            <p className="text-3xl font-bold text-primary">#{orderNumber}</p>
            <p className="text-gray-500 text-sm mt-2">
              Tempo stimato di consegna: 30-45 minuti
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-4"
          >
            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <FaHouse />
              Torna alla home
            </Link>

            <p className="text-gray-500 text-sm">
              Hai domande sul tuo ordine?{" "}
              <a
                href="tel:+39021234567"
                className="text-primary hover:underline"
              >
                Contattaci
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
