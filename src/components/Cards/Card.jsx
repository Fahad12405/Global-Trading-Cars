
import React, { useState } from 'react'
import vehicleData from '../../../constant/dummyData'
import CarSearchForm from './cardsSearch';


export function CardDefault() {
    const [filteredResults, setFilteredResults] = useState(vehicleData);
    console.log(filteredResults)// Initialize with all vehicles

    // Update filtered results based on search
    const handleSearch = (filtered) => {
        setFilteredResults(filtered);
    };
    return (
        <div>
<div className="w-full max-w-7xl mx-auto mt-20 p-6 bg-[#7d1418] rounded-lg shadow-xl text-center">
  <h1 className="text-4xl font-semibold text-red-50 mb-2 font-serif">
    Car For Sale
  </h1>
  <div className="border-t-2 border-white w-48 mx-auto"></div> 
</div>

            <CarSearchForm onSearch={handleSearch} /> {/* Pass handleSearch function as prop */}

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 justify-center items-center">
                {filteredResults.length == 0 ? (
                    <div className="flex justify-center items-center w-full h-96 mx-auto">
                        <h1 className="text-center text-red-600 font-bold text-xl">No results found</h1>
                    </div>
                ) : (
                    filteredResults.map((vehicle) => (
                        <div key={vehicle.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto"> {/* 👉 mx-auto added here */}
                            <img
                                className="p-8 rounded-t-lg w-full h-60 object-cover object-center"
                                src={vehicle.image}
                                alt="product image"
                            />
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                        {vehicle.name}
                                    </h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-4 h-4 ${index < vehicle.rating ? 'text-yellow-300' : 'text-gray-200'}`}
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900">
                                        {vehicle.price}
                                    </span>
                                    <a
                                        href="#"
                                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="flex justify-center items-center w-full h-32 mx-auto mb-20">
                <div className="text-center">
                    <button
                        className="bg-red-700 text-white px-6 py-2 rounded-lg font-semibold text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={() => alert("Try adjusting your search parameters!")} // Add a click handler or action
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>

    );
}
