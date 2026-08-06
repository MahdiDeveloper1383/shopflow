"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
  const pathname = usePathname();
  const [menuOpen,setmenuOpen] = useState(false)
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center ">
          <Image
            src="/ckfXH01.svg"
            alt="ShopFlow Logo"
            width={200}
            height={200}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              ShopFlow
            </h1>

            <p className="text-xs text-gray-500">
              Business Management System
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <button 
        className="md:hidden"
        onClick={()=>setmenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
       
      </div>
       {menuOpen && (
            <nav className="flex md:hidden flex-col items-center">
     
                    {links.map((l)=>(
                   
                            <Link key={l.name}  className={`font-medium transition-colors duration-200 ${
                pathname === l.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}  href={l.href}>{l.name}</Link>
                    
                    ))}
        
            </nav>
        )}
    </header>
  );
}

export default Header;