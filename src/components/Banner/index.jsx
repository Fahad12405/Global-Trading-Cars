import React from 'react';
import { Link } from 'react-router-dom';
import SkBanner from "../../../public/Sk-Banner.webp";

export default function Banner() {
  return (
   
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
  <img
    src={SkBanner}
    alt="Banner Image"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
    <h2 className="sm:text-3xl text-2xl font-bold mt-32 ">Choose Your Dream Car
    </h2>
    
    <Link 
    to={'/CarforSale'}
      type="button"
      className="mt-6 bg-red-900 text-white text-base py-2 px-6 border border-red-900 rounded-full hover:bg-red-700 "
    >
      Inquire Now
    </Link>
  </div>
</div>

  );
}
