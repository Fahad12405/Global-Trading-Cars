import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

export function ProductCard({ data }) {
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/CarDetails/${id}`);
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="mt-20 p-3 bg-[#7d1418] rounded-lg shadow-xl text-center">
                <h1 className="text-3xl font-semibold text-red-50 mb-2 font-serif">
                    Car For Sale
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 justify-center items-center">
                {data?.map((vehicle) => (
                    <div key={vehicle.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto h-full">
                        <img
                            className="rounded-t-lg w-full h-60 object-cover object-center"
                            src={vehicle.image?.[0]?.url}
                            alt={vehicle.name || "Vehicle Image"}
                        />
                        <div className="px-5 pb-5 mt-4">
                            <div className='flex justify-between items-center'>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                    {vehicle.name}
                                </h5>
                                <p className='text-sm'>({vehicle.year})</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                Transmisson:
                                <h5 className="tracking-tight text-gray-900">
                                    {vehicle.transmission}
                                </h5>
                            </div>
                            <div className='flex justify-between items-center'>
                                Color:
                                <h5 className="tracking-tight text-gray-900">
                                    {vehicle.color}
                                </h5>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    className="text-white mt-3 bg-red-900 hover:bg-red-700 rounded-full text-sm px-5 py-2 text-center w-full cursor-pointer"
                                    onClick={() => handleViewDetails(vehicle.id)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Link to="/CarforSale" className="flex items-center gap-3 bg-red-900 text-white px-6 py-2 hover:bg-red-700 rounded-full my-7">
                    View More
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}




{/* <div className="flex items-center mt-2.5 mb-5">
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
</div>  */}