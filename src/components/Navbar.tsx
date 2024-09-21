"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StyledText } from "./StyledText";
import Image from "next/image";
import Logo from "../app/assets/icons/logo.svg";
import Search from "../app/assets/icons/search.svg";
import User from "../app/assets/icons/user.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg h-20">
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
            <Link
              href="/"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <StyledText bold className="text-text-primary text-lg">
                Ik Huur
              </StyledText>
            </Link>
            <Link
              href="/about"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <StyledText bold className="text-text-primary text-lg">
                Ik zoek
              </StyledText>
            </Link>
            <Link
              href="/services"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <StyledText bold className="text-text-primary text-lg">
                Over ons
              </StyledText>
            </Link>
            <Link
              href="/contact"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <StyledText bold className="text-text-primary text-lg">
                Projecten
              </StyledText>
            </Link>
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
        {/* ... existing mobile menu links ... */}
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          <StyledText bold className="text-text-primary text-lg">
            Ik Huur
          </StyledText>
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          <StyledText bold className="text-text-primary text-lg">
            Ik zoek
          </StyledText>
        </Link>
        <Link
          href="/services"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          <StyledText bold className="text-text-primary text-lg">
            Over ons
          </StyledText>
        </Link>

        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          <StyledText bold className="text-text-primary text-lg">
            Projecten
          </StyledText>
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          <Image src={Search} alt="Search" width={58} height={58} />
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          <Image src={User} alt="User" width={58} height={58} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
