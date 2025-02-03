import React from 'react'

export default function HeroSection() {
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img
        src="https://i.ytimg.com/vi/Ht6dRrjCgOw/maxresdefault.jpg"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="min-h-[600px] h-[75vh] relative max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
       
        
      </div>
    </div>
  );
}
