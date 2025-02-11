import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';



const CarDetails = () => {
    const { id } = useParams(); // Get the vehicle ID from the URL
    const [vehicle, setVehicle] = useState([]); // State for vehicle data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [formData, setFormData] = useState({
        productId: id,
        name: '',
        country: '',
        city: '',
        email: '',
        number: '',
        remarks: '',
        receivePromotions: false
    });

    const [loading, setLoading] = useState(true); // Track loading state


    useEffect(() => {
        const fetchVehicleData = async () => {
            try {
                const response = await fetch(`https://api-car-export.vercel.app/api/product/get/${id}`);
                const data = await response.json();
                if (data && data.data) {
                    setVehicle(data.data); // Set the vehicle data
                    setLoading(false); // Set loading to false after data is fetched

                } else {
                    // console.log('Vehicle not found in API');
                    setLoading(false);

                }
            } catch (error) {
                // console.log('Error fetching data from API:', error);
                setLoading(false);

            }
        };

        fetchVehicleData();
    }, [id]);

    if (!vehicle) {
        return <h2>Vehicle not found</h2>;
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://api-car-export.vercel.app/api/product_inquiry', formData);

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product Inquiry Submitted!',
                    text: 'Your inquiry has been submitted successfully.',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while submitting your inquiry.',
                confirmButtonText: 'Try Again'
            });
        }

        closeModal();
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);



    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % vehicle?.image?.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + vehicle?.image?.length) % vehicle?.image?.length);
    };

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

  if (loading)  {
    return (
        <div className="max-w-7xl mx-auto mt-28 p-8">
          <div className="flex flex-col lg:flex-row animate-pulse">
            {/* Left side - Image skeleton */}
            <div className="w-full mb-6 lg:mb-0">
              <div className="h-8 bg-gray-200 rounded-full w-3/4 mb-6"></div>
              
              {/* Image carousel skeleton */}
              <div className="relative w-full">
                <div className="relative h-60 md:h-96 bg-gray-200 rounded-lg"></div>
                
                {/* Indicators skeleton */}
                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 -bottom-5 left-1/2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-gray-300"></div>
                  ))}
                </div>
              </div>
              
              {/* Button skeleton */}
              <div className="mt-5 h-12 bg-gray-200 rounded-full"></div>
            </div>
      
            {/* Right side - Details skeleton */}
            <div className="w-full lg:w-3/3 pl-0 lg:pl-8">
              <div className="h-8 bg-gray-200 rounded-full w-1/3 mb-6"></div>
              
              {/* Table skeleton */}
              <div className="border border-gray-300 rounded-lg">
                <div className="min-w-full">
                  <div className="bg-gray-200 h-12 rounded-t-lg"></div>
                  
                  {/* Table rows */}
                  <div className="p-4 space-y-4">
                    {[...Array(14)].map((_, i) => (
                      <div key={i} className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
    
    
    


    return (
        <div className="max-w-7xl mx-auto mt-28 p-8">
            <div className="flex flex-col lg:flex-row">
                {/* Image on the left side */}
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-6">{vehicle.name}</h1>

                    <div
                        id="indicators-carousel"
                        className="relative w-full"
                        data-carousel="static"
                    >
                        {/* Carousel wrapper */}
                        <div className="relative h-60 overflow-hidden rounded-lg md:h-96">
                            {vehicle?.image?.map((image, index) => (
                                <div
                                    key={index}
                                    className={`duration-700 ease-in-out ${index === activeIndex ? '' : 'hidden'}`}
                                >
                                    <img
                                        src={image.url}
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                                        alt={`carousel-item-${index}`}
                                    />
                                    <p className=" w-full text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg text-red-600 bg-gray-100 px-2">
                                        Refrence Code = {vehicle.referenceNo}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Slider indicators */}
                        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse -bottom-5 left-1/2">
                            {vehicle?.image?.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-red-300' : 'bg-red-900'}`}
                                    onClick={() => handleIndicatorClick(index)}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Slider controls */}
                        <button
                            type="button"
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            onClick={handlePrev}
                            data-carousel-prev=""
                        >
                            <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-2">
                                <svg
                                    className="w-4 h-4 text-red-900 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            onClick={handleNext}
                            data-carousel-next=""
                        >
                            <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-2">
                                <svg
                                    className="w-4 h-4 text-red-900 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div className="flex justify-center items-center w-full mt-5">
                        {
                            vehicle.stock ? (
                                <button className="text-white mt-3 bg-red-900 hover:bg-red-700 rounded-full text-sm px-5 py-2 text-center w-full cursor-pointer" onClick={() => openModal()}>
                                    Inquire Now
                                </button>
                            ) : (
                                <p className="text-xl text-center text-red-600 bg-red-100 rounded-full w-full py-2 mt-12"> This Car is Reserved!</p>
                            )
                        }
                    </div>

                </div>

                {/* Car Details on the right side */}
                <div className="w-full lg:w-3/3 pl-0 lg:pl-8">
                    <div className="text-left mb-6">
                        <h2 className="text-4xl font-semibold text-gray-900 mb-4 ">Car Details</h2>
                    </div>
                    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 text-left text-xl font-medium text-gray-700">Property</th>
                                    <th className="py-2 px-4 text-left text-xl font-medium text-gray-700">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-300">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Model </td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.modelCode}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Year</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.year}</td>
                                </tr>
                                <tr className="border-t border-gray-300">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Transmission</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.transmission}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Color</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.color}</td>
                                </tr>
                                <tr className="border-t border-gray-300">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Drive Type</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.drive}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Inventory Location</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.inventoryLocation}</td>
                                </tr>
                                <tr className="border-t border-gray-300">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Doors</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.doors}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Steering</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.steering}</td>
                                </tr>
                                <tr className="border-t border-gray-300">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Seats</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.seats}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Engine Type</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.engineType}</td>
                                </tr>
                                <tr className="border-t border-gray-300">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Body Type</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.bodyType}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Engine Size</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.engineSize}</td>
                                </tr>

                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Mileage</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.mileage}</td>
                                </tr>
                                <tr className="border-t border-gray-300">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Fuel Type</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.fuelType}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-1 px-4 text-md font-semibold text-gray-700">Features</td>
                                    <td className="py-1 px-4 text-sm text-gray-900">{vehicle.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>







            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50  overflow-hidden">
                    {/* Modal Content */}
                    <div className="bg-white p-12 rounded-lg max-w-full max-h-screen overflow-auto relative w-full lg:w-2/4 h-[80vh] lg:h-[90vh] overflow-x-hidden shadow-lg border border-gray-300">
                        <button
                            className="absolute top-2 right-2 text-2xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">{vehicle.name}</h2>

                        <div className="mb-4">
                            <img src={vehicle.image?.[0]?.url} alt={vehicle.name} className="w-full h-48 object-cover rounded-lg" />
                        </div>

                        {/* Inquiry Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium">Country:</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium">City:</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium">Phone Number:</label>
                                <input
                                    type="text"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium">Remarks:</label>
                                <textarea
                                    name="remarks"
                                    value={formData.remarks}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="inline-flex items-center text-sm">
                                    <input
                                        type="checkbox"
                                        name="receivePromotions"
                                        checked={formData.receivePromotions}
                                        onChange={handleInputChange}
                                        className="form-checkbox"
                                    />
                                    <span className="ml-2">I want to receive special promotions by email</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-700 text-white py-2 rounded-lg font-semibold hover:bg-red-800"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>


    );
};

export default CarDetails;
