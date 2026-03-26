import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTruck,
  FaCreditCard,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useCartStore, {
  useCartItems,
  useCartTotal,
  useCartItemCount,
} from "../store/useCartStore";

const steps = [
  { id: 1, title: "Consegna", icon: FaTruck },
  { id: 2, title: "Pagamento", icon: FaCreditCard },
  { id: 3, title: "Conferma", icon: FaCheck },
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "card",
  });
  const { clearCart } = useCartStore();
  const items = useCartItems();
  const total = useCartTotal();
  const itemCount = useCartItemCount();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Simulate order submission
    clearCart();
    navigate("/order-confirmation");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Dati di consegna
            </h2>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nome completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Mario Rossi"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Indirizzo di consegna
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Via Roma, 123 - Milano"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Numero di telefono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+39 333 1234567"
                required
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Metodo di pagamento
            </h2>
            <div className="space-y-4">
              {[
                { id: "card", label: "Carta di credito/debito", icon: "💳" },
                { id: "cash", label: "Contanti alla consegna", icon: "💵" },
                { id: "paypal", label: "PayPal", icon: "🅿️" },
              ].map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.paymentMethod === method.id
                      ? "border-primary bg-red-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={formData.paymentMethod === method.id}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <span className="text-2xl">{method.icon}</span>
                  <span className="font-medium text-gray-800">
                    {method.label}
                  </span>
                  {formData.paymentMethod === method.id && (
                    <FaCheck className="ml-auto text-primary" />
                  )}
                </label>
              ))}
            </div>

            {formData.paymentMethod === "card" && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-sm">
                  In un'app reale, qui ci sarebbe un form per inserire i dati
                  della carta di credito.
                </p>
              </div>
            )}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Conferma ordine
            </h2>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Riepilogo ordine</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      €{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span>Subtotale</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consegna</span>
                    <span>€2.50</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-2">
                    <span>Totale</span>
                    <span className="text-primary">
                      €{(total + 2.5).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">
                Informazioni di consegna
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Nome:</strong> {formData.name}
                </p>
                <p>
                  <strong>Indirizzo:</strong> {formData.address}
                </p>
                <p>
                  <strong>Telefono:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Pagamento:</strong>{" "}
                  {formData.paymentMethod === "card"
                    ? "Carta di credito"
                    : formData.paymentMethod === "cash"
                      ? "Contanti"
                      : "PayPal"}
                </p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isCompleted ? <FaCheck /> : <Icon />}
                  </div>
                  <span
                    className={`ml-3 font-medium ${
                      isActive ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-24 h-1 mx-4 ${
                        isCompleted ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={() =>
                currentStep > 1 ? setCurrentStep(currentStep - 1) : navigate(-1)
              }
              className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaArrowLeft />
              Indietro
            </button>

            {currentStep < 3 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Avanti
                <FaArrowRight />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <FaCheck />
                Conferma ordine
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
