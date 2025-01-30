import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams(); // Get the vehicle ID from the URL
    const [vehicle, setVehicle] = useState([]); // State for vehicle data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        country: 'PAKISTAN',
        city: '',
        email: '',
        phone: '',
        remarks: '',
        receivePromotions: false
    });
    // Fetch vehicle data when the component mounts or the id changes
    useEffect(() => {
        const fetchVehicleData = async () => {
            try {
                const response = await fetch(`https://api-car-export.vercel.app/api/product/get/${id}`);
                const data = await response.json();

                if (data && data.data) {
                    setVehicle(data.data); // Set the vehicle data
                } else {
                    console.error('Vehicle not found in API');
                }
            } catch (error) {
                console.error('Error fetching data from API:', error);
            }
        };

        fetchVehicleData();
    }, [id]); // Fetch new data whenever the ID changes

    // If no vehicle is found, display a message
    if (!vehicle) {
        return <h2>Vehicle not found</h2>;
    }

    // Modal toggle handler
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Handle form changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send form data to a server
        alert('Inquiry submitted!');
        closeModal();  // Close modal after submission
    };

    // Effect to handle modal visibility (disabling body scroll)
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

    // Handle previous slide
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + vehicle?.image?.length) % vehicle?.image?.length);
    };

    // Handle indicator click
    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };


    return (
        <div className="max-w-7xl mx-auto mt-20 p-6">
            <div className="flex flex-col lg:flex-row">
                {/* Image on the left side */}
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <div
                        id="indicators-carousel"
                        className="relative w-full bg-red-800"
                        data-carousel="static"
                    >
                        {/* Carousel wrapper */}
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            {vehicle?.image?.map((image, index) => (
                                <div
                                    key={index}
                                    className={`duration-700 ease-in-out ${index === activeIndex ? '' : 'hidden'}`}
                                >
                                    <img
                                        src={image.url}
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt={`carousel-item-${index}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Slider indicators */}
                        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                            {vehicle?.image?.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-300'}`}
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
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            onClick={handleNext}
                            data-carousel-next=""
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                    <div className="flex justify-between items-center mt-8">
                        <span className="text-4xl font-bold text-gray-900">{vehicle.price} USD</span>
                        <button
                            className="bg-red-800 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
                            onClick={() => openModal()}
                        >
                            Inquire Now
                        </button>
                    </div>
                </div>

                {/* Car Details on the right side */}
                <div className="w-full lg:w-2/3 pl-0 lg:pl-8">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4">{vehicle.name}</h1>

                    {/* Car Rating */}
                    <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-6 h-6 ${index < vehicle.ratings ? 'text-yellow-300' : 'text-gray-200'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>

                    {/* Car Details in Boxes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-gray-700">
                        <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
                            <p><strong>Model Code:</strong> {vehicle.modelCode}</p>
                            <p><strong>Year:</strong> {vehicle.year}</p>
                            <p><strong>Transmission:</strong> {vehicle.transmission}</p>
                            <p><strong>Color:</strong> {vehicle.color}</p>
                            <p><strong>Drive Type:</strong> {vehicle.drive}</p>
                        </div>
                        <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
                            <p><strong>Doors:</strong> {vehicle.doors}</p>
                            <p><strong>Steering:</strong> {vehicle.steering}</p>
                            <p><strong>Seats:</strong> {vehicle.seats}</p>
                            <p><strong>Engine Type:</strong> {vehicle.engineType}</p>
                            <p><strong>Body Type:</strong> {vehicle.bodyType}</p>
                            <p><strong>Engine Size:</strong> {vehicle.engineSize}</p>
                        </div>
                    </div>

                    {/* Additional Information in a Box */}
                    <div className="mt-6 border border-gray-300 p-4 rounded-lg shadow-sm">
                        <p><strong>Mileage:</strong> {vehicle.mileage}</p>
                        <p><strong>Fuel Type:</strong> {vehicle.fuelType}</p>
                        <p><strong>Dimensions:</strong> {vehicle.dimensions}</p>
                        <p><strong>Vehicle Weight:</strong> {vehicle.vehicleWeight}</p>
                        <p><strong>Max Loading Capacity:</strong> {vehicle.maxLoadingCapacity}</p>
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
                        <h2 className="text-2xl font-semibold mb-4">Inquiry for {vehicle.name}</h2>

                        <div className="mb-4">
                            <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <p><strong>Price:</strong> {vehicle.price} USD</p>
                            <p><strong>Rating:</strong> {vehicle.rating} / 5</p>
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
                                <label className="block text-sm font-medium">Phone:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
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
