import React from 'react'
// import CarBanenr from '../../../public/CarBanner.webp'
import CarBanenr from '../../../public/Banner.jpg'

export default function HeroSection() {
  return (
    <div className="mt-0 relative font-sans before:absolute  before:inset-0 before:bg-black before:opacity-30 before:z-10">
      <img
        src={CarBanenr}
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="md:h-[89vh] relative w-full sm:w-[10%] md:w-[80%] lg:w-[70%] max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 sm:h-[30vh] h-[60vh]">
      </div>

    </div>
  );
}
