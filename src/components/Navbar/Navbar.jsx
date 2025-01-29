

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link here

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown toggle

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://globalcorporation.jp/wp-content/uploads/2015/12/GlobalCorporation-1.png"
            className="h-12 w-28"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-8 font-medium">
          <li>
            <Link to="/" className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Search-Cars" className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 ">
              Search Cars
            </Link>
          </li>

          {/* Dropdown for About */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-0  flex items-center"
            >
              About
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Desktop Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg dark:bg-gray-800 rounded-lg w-48 z-10">
                <ul>
                  <li>
                    <Link to="/PrivacyPolicy" className="block py-2 px-4 text-gray-900 rounded-sm hover: dark:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/CompanyProfile" className="block py-2 px-4 text-gray-900 rounded-sm ">
                      Company Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/TermsofUse" className="block py-2 px-4 text-gray-900 rounded-sm ">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to="/Blogs" className="block py-2 px-4 text-gray-900 rounded-sm ">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact" className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 ">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/how-to-buy" className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 ">
              How to Buy
            </Link>
          </li>
          <li>
            <Link to="/why-choose-us" className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 ">
              Why Choose Us
            </Link>
          </li>
        </ul>

        {/* Desktop Log In/Sign Up */}
        <div className="hidden md:flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Log In
          </button>
          <button
            type="button"
            className="text-white bg-red-800  hover:bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark: dark:focus:ring-gray-600"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-18 left-0 w-full bg-white shadow-md dark:bg-gray-800 md:hidden z-[999999]"
            >
              <ul className="flex flex-col p-4 font-medium border border-gray-200 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm hover: dark:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Search-Cars" className="block py-2 px-3 text-gray-900 rounded-sm hover: dark:text-white">
                    Search Cars
                  </Link>
                </li>

                {/* Mobile About Dropdown */}
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex py-2 px-3 text-gray-900 rounded-sm hover: dark:text-white items-center"
                  >
                    About
                    <svg
                      className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mobile Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 w-full bg-white shadow-lg dark:bg-gray-800 rounded-lg">
                      <ul>
                        <li>
                          <Link to="/PrivacyPolicy" className="block py-2 px-4 text-gray-900 rounded-sm hover: dark:text-white">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/CompanyProfile" className="block py-2 px-4 text-gray-900 rounded-sm hover: dark:text-white">
                            Company Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/TermsofUse" className="block py-2 px-4 text-gray-900 rounded-sm hover: dark:text-white">
                            Terms of Use
                          </Link>
                        </li>
                        <li>
                          <Link to="/Blogs" className="block py-2 px-4 text-gray-900 rounded-sm hover: dark:text-white">
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded-sm hover: dark:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-buy" className="block py-2 px-3 text-gray-900 rounded-sm hover: dark:text-white">
                    How to Buy
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="block py-2 px-3 text-gray-900 rounded-sm hover: dark:text-white">
                    Why Choose Us
                  </Link>
                </li>
                <li className="flex flex-col space-y-2 mt-4">
                  <button type="button" className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center ">
                    Log In
                  </button>
                  <button type="button" className="text-white bg-red-800 hover:bg-red-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Sign Up
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
