"use client";
import Header from "@/Components/landing/Header";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BellIcon,
  Box,
  ChartArea,
  PackageSearch,
  Settings,
  ShoppingCart,
  User,
  UserRoundCheck,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    job: "Store Owner",
    text: "Lorem ipsum dolor sit amet...",
    image: "/women.jpg",
  },
  {
    name: "John Smith",
    job: "Manager",
    text: "Second testimonial...",
    image: "/man.jpg",
  },
  {
    name: "Emma Wilson",
    job: "Business Owner",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt nesciunt rerum ut quibusdam, fugit sequi dolorum architecto hic cupiditate nihil accusantium error corrupti ullam voluptatem fuga, amet quod unde.",
    image: "/women2.jpg",
  },
];
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
const How_to_work = [
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
  }
];
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
  }
];
export default function Home() {
  const [currentcard, setcurrentcard] = useState(0);
  const currenttestimonial = testimonials[currentcard];
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentcard((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  const next = () => {
    setcurrentcard((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setcurrentcard((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndex1, setOpenIndex1] = useState<number | null>(null);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);

  const togglehowtowork = (index: number) => {
    setOpenIndex1((prev) => (prev === index ? null : index));
  };

  const toggleFeature = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const toggleFaq = (id:number)=>{
    setOpenIndex2((prev)=>(prev === id ? null : id))
  }
  return (
    <React.Fragment>
      <Header />
      <div className="w-full min-h-[75vh] bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
        <section className="flex flex-col items-center text-center max-w-3xl">
          <span className="mb-4 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
            🚀 Business Management Platform
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Manage your Business{" "}
            <span className="text-green-500">Smarter.</span>{" "}
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            Manage products, employees, payroll and sales from one simple
            dashboard.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="rounded-full bg-green-500 px-7 py-3.5 font-semibold text-white transition hover:bg-green-600"
          >
            Get Started
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span>✔ Product Management</span>

          <span>✔ Employee Management</span>

          <span>✔ Payroll System</span>

          <span>✔ Sales Reports</span>
        </div>
      </div>
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
      <div className="w-full min-h-screen bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900">How It Works</h2>

            <p className="mt-4 text-lg text-gray-500">
              Get started with ShopFlow in just a few simple steps.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-row items-center justify-center gap-8">
            {How_to_work.map((w, index) => (
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

                  {openIndex1 === index ? <ArrowUp /> : <ArrowDown />}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex1 === index
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
      <div className="w-full min-h-[600px] bg-gray-100 flex flex-col gap-5 items-center justify-center px-6 py-16">
        <h3 className="text-4xl font-bold font-mono">Dashbaord Perview</h3>
        <div className="w-full max-w-5xl rounded-3xl border bg-white p-6 shadow-xl">
          {/* Header */}
          <header className="flex items-center justify-between border-b pb-5">
            <h4 className="text-2xl font-bold text-gray-900">Dashboard</h4>

            <div className="flex items-center gap-5 text-gray-500">
              <BellIcon />
              <User />
            </div>
          </header>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
              <p className="text-gray-500">Revenue</p>

              <span className="mt-2 block text-3xl font-bold text-gray-900">
                $12,430
              </span>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
              <p className="text-gray-500">Orders</p>

              <span className="mt-2 block text-3xl font-bold text-gray-900">
                525
              </span>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
              <p className="text-gray-500">Products</p>

              <span className="mt-2 block text-3xl font-bold text-gray-900">
                1200
              </span>
            </div>
          </div>

          {/* Chart Preview */}
          <div className="mt-8 h-48 rounded-2xl bg-gray-50 flex items-center justify-center">
            <p className="text-gray-400">Sales Chart Preview</p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[500px] bg-gray-50 px-6 py-16 overflow-hidden">
        <h3 className="mb-12 text-center text-5xl font-bold text-gray-900">
          Customers Happiness
        </h3>

        <div className=" w-full shrink-0 flex  flex-col items-center gap-10 rounded-2xl bg-white p-8 shadow-lg md:flex-row">
          <Image
            src={currenttestimonial.image}
            width={200}
            height={200}
            alt="Customer"
            className="rounded-2xl object-cover shadow-md"
          />

          <div className="flex flex-col gap-6">
            <p className="text-lg leading-8 text-gray-600">
              {currenttestimonial.text}
            </p>

            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                {currenttestimonial.name}
              </h4>

              <span className="text-sm text-gray-500">
                {currenttestimonial.job}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="rounded-full border px-5 py-3 hover:bg-gray-100 active:bg-green-500 "
          >
            <ArrowLeft />
          </button>

          <button
            onClick={next}
            className="rounded-full border px-5 py-3  hover:bg-gray-100 active:bg-green-500"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
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
        onClick={()=>toggleFaq(faq.id)}
         className="flex items-center justify-between w-full cursor-pointer">
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

          {openIndex2 === faq.id ? (
            <ArrowUp className="text-[#f1a34f]" />
          ) : (
            <ArrowDown className="text-[#f1a34f]" />
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            openIndex2 === faq.id
              ? "max-h-40 mt-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-600 pt-5">
            <p className="text-gray-300 leading-7">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<footer className='bg-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
    <div className='w-full max-w-7xl mx-auto'>

        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                <Image src={'/ckfXH01.svg'} alt="logo" width={300} height={300}/>
                <div className='w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black'></div>
                <p className='text-sm text-white/60 mt-6 max-w-sm leading-relaxed'>
                    PrebuiltUI is a growing collection of beautifully designed, production-ready Tailwind CSS UI components.
                </p>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className='text-sm text-white font-medium'>Important Links</h3>
                <div className="flex flex-col gap-2 mt-6">
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Home</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>About</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Portfolio</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Contact</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>FAQ</a>
                </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className='text-sm text-white font-medium'>Social Links</h3>
                <div className="flex flex-col gap-2 mt-6">
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Twitter</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Instagram</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Youtube</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Linkedin</a>
                </div>
            </div>

  

        </div>

        <div className='w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black'></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className='text-xs text-white/60'>© 2025 PrebuiltUI</p>
            <div className="flex items-center gap-6">
                <a href='#' className='text-xs text-white/60 hover:text-white transition-colors'>Terms & Conditions</a>
                <div className='w-px h-4 bg-white/20'></div>
                <a href='#' className='text-xs text-white/60 hover:text-white transition-colors'>Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>
    </React.Fragment>
  );
}
