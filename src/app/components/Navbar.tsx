"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/icons/logo.svg";
import Search from "../assets/icons/search.svg";
import User from "../assets/icons/user.svg";
import { navLinks } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Logo" width={200} height={100} />
            </Link>
          </div>

          {/* Navigation Links (centered) */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            {navLinks.map(({ id, name, href }) => (
              <Link
                href={href}
                className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
                key={id}
              >
                <h1 className="text-text-primary text-lg font-bold">{name}</h1>
              </Link>
            ))}
          </div>

          {/* User and Search Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Search"
              className="text-gray-500 hover:text-gray-900"
            >
              <Image src={Search} alt="Search" width={58} height={58} />
            </button>
            <button
              aria-label="User"
              className="text-gray-500 hover:text-gray-900"
            >
              <Image src={User} alt="User" width={58} height={58} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        {navLinks.map(({ id, name, href }) => (
          <Link
            href={href}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            key={id}
          >
            <h1 className="text-text-primary text-lg font-bold">{name}</h1>
          </Link>
        ))}

        <div className="py-2 px-4">
          <button
            aria-label="Search"
            className="text-gray-500 hover:text-gray-900 mr-4"
          >
            <Image src={Search} alt="Search" width={58} height={58} />
          </button>
          <button
            aria-label="User"
            className="text-gray-500 hover:text-gray-900"
          >
            <Image src={User} alt="User" width={58} height={58} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
