import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do you offer home pick-up and delivery for eyeglass repairs?",
    answer:
      "Yes, we offer convenient home pick-up and delivery for eyeglass repairs in select areas. Contact us for availability.",
  },
  {
    question: "Do you accept NHS vouchers for eyewear purchases?",
    answer:
      "Yes, we accept NHS vouchers for eligible eyewear purchases. This allows you to receive high-quality glasses at a reduced cost, making eyewear more affordable. For more information on how to use your NHS voucher with our services, please contact us directly.",
  },
  {
    question: "How long does it take to repair my eyeglasses?",
    answer:
      "Most eyeglass repairs are completed within 24 to 48 hours. Some complex repairs may take longer. We'll keep you informed throughout the process.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border-2 rounded-2xl border-gray-200 shadow-sm bg-white transition-all`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left text-base sm:text-lg font-medium"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 animate-fadeIn">
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
