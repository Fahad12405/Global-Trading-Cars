import React, { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
         
          <h2 className="text-4xl font-manrope text-center font-bold text-red-800 leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="accordion-group">
          {/* First Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 0 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(0)}
            >
              <h5>How do I export cars through Global Trading Car?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 0 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 0 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                To export cars through Global Trading Car, you can contact us
                directly for a detailed process. Our team will guide you through
                the entire procedure, including documentation, customs
                clearance, and shipping options.
              </p>
            </div>
          </div>

          {/* Second Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 1 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(1)}
            >
              <h5>What documents are required to export a car?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 1 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 1 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                The required documents for car export include the vehicle title,
                proof of ownership, export declaration forms, and any additional
                country-specific paperwork. Our team will help ensure all
                documents are in order.
              </p>
            </div>
          </div>

          {/* Third Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 2 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(2)}
            >
              <h5>What are the costs involved in exporting a car?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 2 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 2 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                The cost of exporting a car includes shipping fees, customs
                duties, taxes, and any required handling charges. The exact cost
                depends on the destination country and the specific vehicle.
              </p>
            </div>
          </div>

          {/* Fourth Question */}
          <div
            className={`accordion py-8 px-6 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 3 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(3)}
            >
              <h5>How long does it take to export a car?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 3 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 3 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                The time it takes to export a car depends on the destination
                country, the mode of transport, and the necessary paperwork.
                Generally, the process takes around 2-4 weeks.
              </p>
            </div>
          </div>

          {/* Fifth Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 4 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(4)}
            >
              <h5>What do I have to do to buy a car?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 4 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 4 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                Registration is required. After registration is completed, you
                can buy any car that you want.
              </p>
            </div>
          </div>

          {/* Sixth Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 5 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(5)}
            >
              <h5>Can I track my car shipment?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 5 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 5 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                Yes, we provide shipment tracking for all vehicles. Once your
                car is shipped, we will share the tracking details with you.
              </p>
            </div>
          </div>

          {/* Seventh Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 6 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(6)}
            >
              <h5>What payment methods are accepted?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 6 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 6 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                We accept various payment methods, including bank transfers,
                credit/debit cards, and PayPal.
              </p>
            </div>
          </div>

          {/* Eighth Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 7 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(7)}
            >
              <h5>Do I need insurance for shipping?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 7 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 7 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                Yes, we recommend insuring your shipment for safety. Our team
                will guide you on insurance options to ensure peace of mind.
              </p>
            </div>
          </div>

          {/* Ninth Question */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 8 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(8)}
            >
              <h5>Can I export cars to any country?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 8 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 8 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                Yes, we provide export services to most countries worldwide.
                Please contact us for specific country availability and
                regulations.
              </p>
            </div>
          </div>

          {/* Tenth Question */}
          <div
            className={`accordion py-8 px-6 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 9 ? "bg-indigo-50" : ""
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(9)}
            >
              <h5>Do you offer bulk export services?</h5>
              <svg
                className={`text-gray-500 transition duration-500 ${
                  activeIndex === 9 ? "rotate-180 text-indigo-600" : ""
                }`}
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="accordion-content w-full px-0 overflow-hidden"
              style={{
                maxHeight: activeIndex === 9 ? "250px" : "0",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                Yes, we offer bulk export services for dealerships or large
                quantities. Please contact us for more information and
                customized solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
