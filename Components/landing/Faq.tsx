"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
const FAQs = [
  {
    id: 1,
    question: "What businesses can use ShopFlow?",
    answer:
      "ShopFlow is designed for stores, small businesses and teams that need easier management.",
  },
  {
    id: 2,
    question: "Do I need technical skills to use ShopFlow?",
    answer: "No, ShopFlow has a simple interface designed for business owners.",
  },
  {
    id: 3,
    question: "Can I manage my employees with ShopFlow?",
    answer: "Yes, you can manage employee information, roles and permissions.",
  },
  {
    id: 4,
    question: "Can I track products and inventory?",
    answer: "Yes, you can add products and monitor your stock easily.",
  },
  {
    id: 5,
    question: "Does ShopFlow provide sales reports?",
    answer:
      "Yes, you can analyze sales and business performance through reports.",
  },
  {
    id: 6,
    question: "How can I start using ShopFlow?",
    answer:
      "Create an account, add your business information and start managing your business.",
  },
];
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (id: number) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };
  return (
    <div className="w-full min-h-[500px] bg-gray-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-black text-center mb-10">
        Frequently asked questions
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {FAQs.map((faq) => (
          <div
            key={faq.id}
            className="basis-full md:basis-[700px] rounded-3xl bg-gray-800 border border-gray-600 p-6 text-white shadow-lg transition-all duration-300"
          >
            <div
              onClick={() => toggleFaq(faq.id)}
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 border-r border-gray-400">
                  <span className="text-2xl font-extrabold text-[#f1a34f]">
                    0{faq.id}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold">
                  {faq.question}
                </h3>
              </div>

              {openIndex === faq.id ? (
                <ArrowUp className="text-[#f1a34f]" />
              ) : (
                <ArrowDown className="text-[#f1a34f]" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === faq.id
                  ? "max-h-40 mt-5 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-gray-600 pt-5">
                <p className="text-gray-300 leading-7">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
