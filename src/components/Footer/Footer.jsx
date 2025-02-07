import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../../../public/logo2.png'


export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="bg-white px-4 sm:px-6 pt-12 pb-6 font-[sans-serif] border border-t-2 border-gray-200 mt-12" >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  mb-14">
          <div className="space-y-4 text-center sm:text-left">
            <h6 className="text-lg text-black font-medium">RESOURCES</h6>
            <ul className="space-y-2.5">
              <li><a href="/">Home</a></li>
              <li><a href="/CompanyProfile">About Us</a></li>
              <li><a href="/CarforSale">Find Cars</a></li>
              <li><a href="CarDetails/:id">Inquire Now</a></li>
              <li><a href="/CarforSale">Search your Favourite Car</a></li>


            </ul>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h6 className="text-lg text-gray-1000 font-medium">HELPFUL LINKS</h6>
            <ul className="space-y-2.5">
              <li><a href="/how-to-buy">Payment Details</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/how-to-buy">How to Buy</a></li>
              <li><a href="/why-choose-us">Why Choose Us</a></li>
              <li><a href="/">Ask Questions</a></li>


            </ul>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h6 className="text-lg text-gray-1000 font-medium">ABOUT US</h6>
            <ul className="space-y-2.5">
              <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
              <li><a href="/CompanyProfile">Company Profile</a></li>
              <li><a href="/TermsofUse">Terms of Use</a></li>
              <li><a href="/Blogs">Our Blogs</a></li>
              <li><a href="/">Our Costumer Review</a></li>


            </ul>
          </div>

          <div className="space-y-4 text-center sm:text-left" >
            {/* Logo */}
            <div className="mt-0">
              <img
                src={logo}
                alt="Company Logo"
                className="mx-auto sm:mx-0 "
                style={{ width: "200px" }}
              />
            </div>
            <div className="space-y-2 text-gray-1000">
              <h6 className="text-lg font-bold">Company Information</h6>

              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <FaMapMarkerAlt className="text-red-800" />
                <a
                  href="https://maps.app.goo.gl/BgwEke8ZFua7etB98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saitama, Higashimatsuyama, Higashidaira 1277, Japan
                </a>
              </p>

              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <FaPhone className="text-red-800" />
                <a
                  href="tel:+81123456789"
                >
                  +81 123 456 789
                </a>
              </p>

              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <FaEnvelope className="text-red-800" />
                <a
                  href="mailto:info@globaltradingcars.com"
                >
                  info@globaltradingcars.com
                </a>
              </p>
            </div>


          </div>
        </div>

        <hr className="my-3 border-gray-600" />
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-gray-800 text-[13px]">
            GlobalTradingCars Copyright © 2025. All rights reserved.
          </p>
        </div>
      </footer>


      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7-7 7" />
        </svg>
      </button>
    </>
  )
}
