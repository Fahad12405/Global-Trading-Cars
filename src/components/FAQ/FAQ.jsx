import React, { useState } from "react";

const faqData = [
  {
    question: "How do I export cars through Global Trading Car?",
    answer:
      "To export cars through Global Trading Car, you can contact us directly for a detailed process. Our team will guide you through the entire procedure, including documentation, customs clearance, and shipping options."
  },
  {
    question: "What documents are required to export a car?",
    answer:
      "The required documents for car export include the vehicle title, proof of ownership, export declaration forms, and any additional country-specific paperwork. Our team will help ensure all documents are in order."
  },
  {
    question: "What are the costs involved in exporting a car?",
    answer:
      "The cost of exporting a car includes shipping fees, customs duties, taxes, and any required handling charges. The exact cost depends on the destination country and the specific vehicle."
  },
  {
    question: "How long does it take to export a car?",
    answer:
      "The time it takes to export a car depends on the destination country, the mode of transport, and the necessary paperwork. Generally, the process takes around 2-4 weeks."
  },
  {
    question: "What do I have to do to buy a car?",
    answer:
      "Registration is required. After registration is completed, you can buy any car that you want."
  },
  {
    question: "Can I track my car shipment?",
    answer:
      "Yes, you can track your car shipment once it has been dispatched. You will receive tracking details through our shipment partner."
  },
  {
    question: "What is the best time to export a car?",
    answer:
      "The best time to export a car depends on various factors such as market demand, seasonal shipping schedules, and pricing. It is advisable to contact us for the most suitable timing."
  },
  {
    question: "How can I pay for the export service?",
    answer:
      "You can make the payment for the export service through bank transfer, credit card, or online payment platforms. Our team will provide all the details once your export process starts."
  },
  {
    question: "Can I export my car to multiple countries?",
    answer:
      "Yes, it is possible to export cars to multiple countries. However, the process will vary depending on each destination. Our team will help guide you through the required steps for each country."
  },
  {
    question: "What happens if my car gets damaged during shipping?",
    answer:
      "In the rare event that your car gets damaged during shipping, our team will assist in filing an insurance claim. The damage will be evaluated, and compensation will be provided based on the insurance coverage."
  }
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-16"> */}
          <div className="w-full max-w-9xl mx-auto mt-20 p-6 bg-[#7d1418] rounded-lg shadow-xl text-center">
            <h1 className="text-4xl font-semibold text-red-50 mb-2 font-serif">
              Frequently Asked Questions
            </h1>
            <div className="border-t-2 border-white w-48 mx-auto"></div>
          </div>
        {/* </div> */}
        <div className="accordion-group flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-7 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${activeIndex === index ? "bg-indigo-50" : ""
                }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-red-800"
                onClick={() => toggleAccordion(index)}
              >
                <h5 className="text-lg" >{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 ${activeIndex === index ? "rotate-180 text-red-600" : ""
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
                  maxHeight: activeIndex === index ? "250px" : "0",
                  transition: "max-height 0.5s ease-in-out"
                }}
              >
                <p className="text-base text-gray-900 leading-6 mt-3">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}