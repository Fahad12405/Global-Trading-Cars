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
            <div className="mt-4 p-3 bg-[#7d1418] rounded-lg shadow-xl text-center">
                <h1 className="text-3xl font-semibold text-red-50 mb-2 font-serif">
                    Car For Sale
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 justify-center items-center">
    {data?.map((vehicle) => (
        <div key={vehicle.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto h-full flex flex-col">
            <img
                className="rounded-t-lg w-full object-cover object-center h-60" // fixed height for image
                src={vehicle.image?.[0]?.url}
                alt={vehicle.name || "Vehicle Image"}
            />
            <div className="px-5 pb-5 mt-4 flex flex-grow flex-col">
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

                <div className="flex items-center justify-between mt-auto">
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



