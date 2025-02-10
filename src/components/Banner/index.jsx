import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div
      className=" font-sans px-8 py-24 sm:px-4 sm:py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://skjapanexport.co.jp/cdn/shop/files/sk-banner.webp?v=1717591018)`,
      }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center text-center mt-16 sm:mt-8">
        <div className="mt-48 sm:mt-32">
          <Link
           to={"/CarforSale"}
            className="bg-red-600 text-lg text-white font-semibold py-3 px-12 rounded-3xl hover:bg-red-700 font-serif sm:text-base sm:px-6 sm:py-2"
          >
            Choose your Car
          </Link>
        </div>
      </div>
    </div>
  );
}
