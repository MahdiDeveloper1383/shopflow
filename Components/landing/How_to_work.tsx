"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

const Howtowork = [
  {
    step: "Step 1",
    title: "Create Account",
    description:
      "Click on GET START button and create your account by google or filling forms.",
  },
  {
    step: "Step 2",
    title: "Add product",
    description: "Add your products, employees and store information easily.",
  },
  {
    step: "Step 3",
    title: "Manage Dashboard",
    description:
      "Track sales, inventory, employees and reports from one dashboard.",
  },
  {
    step: "Step 4",
    title: "Grow",
    description: "Use insights and reports to make better business decisions.",
  },
];
function How_to_work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const togglehowtowork = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">How It Works</h2>

          <p className="mt-4 text-lg text-gray-500">
            Get started with ShopFlow in just a few simple steps.
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-row items-center justify-center gap-8">
          {Howtowork.map((w, index) => (
            <div
              key={index}
              className="w-full max-w-[600px] rounded-3xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                onClick={() => togglehowtowork(index)}
                className="flex items-center justify-between p-6"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                    {w.step}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {w.title}
                  </h3>
                </div>

                {openIndex === index ? <ArrowUp /> : <ArrowDown />}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-60 border-t border-gray-200 p-6"
                    : "max-h-0"
                }`}
              >
                <p className="leading-7 text-gray-600">{w.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default How_to_work;
