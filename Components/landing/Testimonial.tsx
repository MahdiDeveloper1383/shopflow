"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
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
export default function Testimonial() {
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
  return (
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
  );
}
