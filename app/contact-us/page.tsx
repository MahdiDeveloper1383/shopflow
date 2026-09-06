'use client'
import Footer from "@/Components/landing/Footer";
import Header from "@/Components/landing/Header";
import React, { useState } from "react";
import { SendMessageContact } from "../api/contact/route";

export default function page() {
  const [message,setmessage] = useState('')
  async function handlesubmit(formdata:FormData) {
    const result = await SendMessageContact(formdata)
    
    setmessage(result.message)
  }
  return (
    <React.Fragment>
      <Header />
      <div className="w-full min-h-[800px] bg-gray-100 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl min-h-[600px] bg-white rounded-3xl shadow-2xl shadow-gray-300 overflow-hidden">
          <div className="p-6 md:p-10">
            <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h4>

            <form action={handlesubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name..."
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email..."
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject..."
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 md:row-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="min-h-[160px] w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700 active:scale-95"
              >
                Send Message
              </button>
              {message && <p>{message}</p>}
            </form>

            {/* Contact information */}
            <div className="mt-10 rounded-2xl bg-amber-50 p-6">
              <h5 className="text-lg font-bold text-gray-900">
                We'd love to hear from you
              </h5>

              <p className="mt-2 text-gray-600">
                Have a question or want to learn more? Send us a message and
                we'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
