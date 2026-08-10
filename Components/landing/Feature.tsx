"use client";
import {
  ArrowDown,
  ArrowUp,
  Box,
  ChartArea,
  PackageSearch,
  Settings,
  ShoppingCart,
  UserRoundCheck,
  Users,
  Wallet,
} from "lucide-react";
import { useState } from "react";
const features = [
  {
    title: "Product Management",
    description:
      "Add products, manage categories, update prices and control your inventory easily.",
    icon: <Box />,
  },
  {
    title: "Employee Management",
    description:
      "Manage employees, roles, permissions and employee information in one place.",
    icon: <Users />,
  },
  {
    title: "Sales Reports",
    description:
      "Analyze your sales performance with detailed reports and useful insights.",
    icon: <ChartArea />,
  },
  {
    title: "Payroll Management",
    description:
      "Calculate salaries, bonuses and employee payments faster and easier.",
    icon: <Wallet />,
  },
  {
    title: "Inventory Tracking",
    description:
      "Track your stock levels and get better control over your warehouse.",
    icon: <PackageSearch />,
  },
  {
    title: "Customer Management",
    description:
      "Manage customer information, purchase history and relationships.",
    icon: <UserRoundCheck />,
  },
  {
    title: "Order Management",
    description:
      "Manage orders, check order status and improve your sales workflow.",
    icon: <ShoppingCart />,
  },
  {
    title: "Business Settings",
    description:
      "Customize your business settings and manage your account preferences.",
    icon: <Settings />,
  },
];
function Feature() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFeature = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="w-full min-h-[60vh] flex flex-col gap-10 px-6 py-16 bg-gray-100">
      <h3 className="text-center text-5xl font-bold">Powerful Features</h3>

      <div className="flex flex-wrap justify-center items-start gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="basis-full md:basis-[500px] overflow-hidden grow rounded-3xl border border-gray-700 bg-gray-800 text-white"
          >
            <div
              onClick={() => toggleFeature(index)}
              className="flex cursor-pointer items-center justify-between p-5"
            >
              <div className="flex items-center gap-5">
                {feature.icon}

                <h4 className="text-xl font-semibold">{feature.title}</h4>
              </div>

              {openIndex === index ? <ArrowUp /> : <ArrowDown />}
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-60 border-t p-5 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
