import Link from "next/link";

function Hero() {
  return (
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
  );
}

export default Hero;
