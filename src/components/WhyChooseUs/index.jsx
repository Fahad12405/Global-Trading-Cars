import React from 'react';
import { FaCar, FaRegClock, FaShieldAlt, FaRocket, FaThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-red-700/40"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Your Trusted Partner for Buying Cars from Japan
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            GlobalTradingCars connects you to the best deals on high-quality vehicles from Japan with fast, hassle-free shipping.
          </p>
        </div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border  bg-red-600"
              
            >
              <FaCar size={24} color="white" />
            </div>
            <h3 className="mt-6 text-gray-400">Wide Selection of Cars</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Choose from a wide variety of high-quality Japanese cars. Whether you’re looking for sports cars or family vehicles, we’ve got you covered.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border  bg-red-600"
             
            >
              <FaRegClock size={24} color="white" />
            </div>
            <h3 className="mt-6 text-gray-400">Fast and Efficient Delivery</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              We offer fast and efficient delivery services, ensuring your car arrives in perfect condition, ready to drive.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border  bg-red-600"
             
            >
              <FaShieldAlt size={24} color="white" />
            </div>
            <h3 className="mt-6 text-gray-400">Trusted and Reliable</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              We provide fully inspected cars with a reliable track record. Your satisfaction and safety are our top priority.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border  bg-red-600"
            
            >
              <FaRocket size={24} color="white" />
            </div>
            <h3 className="mt-6 text-gray-400">Quick Purchase Process</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Our easy-to-use platform ensures you can purchase your dream car from Japan with minimal effort and maximum speed.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-red-600"
             
            >
              <FaThumbsUp size={24} color="white" />
            </div>
            <h3 className="mt-6 text-gray-400">Customer Satisfaction</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              We prioritize our customers' satisfaction with a seamless buying experience and top-quality service.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border  bg-red-600"
             
            >
              <FaMapMarkerAlt size={24} color="white" />
            </div>
            <h3 className="mt-6 text-gray-400">Global Reach</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              We serve customers around the world, ensuring a reliable car purchasing experience from Japan to your doorstep.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
}
