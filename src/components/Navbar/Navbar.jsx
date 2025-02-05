import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import logo from '../../../public/logo2.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleHoverEnter = () => {
    if (isDropdownOpen) {
      closeDropdown();
    }
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  {/* Logo */}
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img
      src={logo}
      className="h-18 object-contain" // Remove width class
      style={{ width: '180px' }} // Set the width using inline style
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
            <Link to="/CarforSale" className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 ">
              Cars for Sale
            </Link>
          </li>

          {/* Dropdown for About */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              onMouseEnter={handleHoverEnter}
              className="text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-0 flex items-center"
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
              <div
                className="absolute left-0 mt-2 bg-white  rounded-lg w-48 z-10"
                onMouseLeave={closeDropdown} // Close the dropdown when mouse leaves the dropdown area
              >
                <ul>
                  <li>
                    <Link
                      to="/PrivacyPolicy"
                      className="block py-2 px-4 text-gray-900 rounded-sm "
                      onClick={closeDropdown} // Close the dropdown on item click
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/CompanyProfile"
                      className="block py-2 px-4 text-gray-900 rounded-sm"
                      onClick={closeDropdown} // Close the dropdown on item click
                    >
                      Company Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/TermsofUse"
                      className="block py-2 px-4 text-gray-900 rounded-sm"
                      onClick={closeDropdown} // Close the dropdown on item click
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Blogs"
                      className="block py-2 px-4 text-gray-900 rounded-sm"
                      onClick={closeDropdown} // Close the dropdown on item click
                    >
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

        {/* {user && (

          <>
            <FaUserAlt size={20} onClick={() => setIsUserDropdown(prevStats => !prevStats)} className="cursor-pointer" />

            {isUserDropdown && (
              <div className="absolute right-4 top-16 mt-2 bg-white rounded-lg w-48 z-10 border-black border-[1px] py-5">
                <ul>
                  <li className="block py-2 px-4 text-gray-900 rounded-sm hover: dark:text-white" >
                    Hi {user.name}
                  </li>
                 
                  <hr />
                  <li>
                    <Link to="/LogOut" className="block py-2 px-4 text-gray-900 rounded-sm bg-red-100">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            )}


          </>

        )}

        {!user && (
          <div className="hidden md:flex md:order-2 space-x-3 rtl:space-x-reverse">
            <Link
              to='/LogIn'
              className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Log In
            </Link>
            <Link
              to='/Register'
              className="text-white bg-red-800  hover:bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Sign Up
            </Link>
          </div>
        )} */}



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
              className="absolute top-18 left-0 w-full bg-white shadow-md  md:hidden z-[999999]"
            >
              <ul className="flex flex-col p-4 font-medium border border-gray-200 rounded-lg">
                <li>
                  <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/CarforSale" className="block py-2 px-3 text-gray-900 rounded-sm ">
                    Cars For Sale
                  </Link>
                </li>

                {/* Mobile About Dropdown */}
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex py-2 px-3 text-gray-900 rounded-sm  items-center"
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
                    <div className="absolute left-0 w-full bg-white shadow-lg  rounded-lg">
                      <ul>
                        <li>
                          <Link to="/PrivacyPolicy" className="block py-2 px-4 text-gray-900 rounded-sm  ">
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
                  <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-buy" className="block py-2 px-3 text-gray-900 rounded-sm hover:">
                    How to Buy
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="block py-2 px-3 text-gray-900 rounded-sm hover:">
                    Why Choose Us
                  </Link>
                </li>
                {/* <li className="flex flex-col space-y-2 mt-4">
                  <Link to='/LogIn' className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center ">
                    Log In
                  </Link>
                  <Link to='/Register' className="text-white bg-red-800 hover:bg-red-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Sign Up
                  </Link>
                </li> */}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
