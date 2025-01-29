import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import vehicleData from '../../../constant/dummyData';


const CarDetails = () => {
    const { id } = useParams();
    const vehicle = vehicleData.find(v => v.id === parseInt(id)); // Find the vehicle by ID

    // State for managing modal visibility and form fields
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        country: 'PAKISTAN',
        city: '',
        email: '',
        phone: '',
        remarks: '',
        receivePromotions: false
    });

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


    useEffect(() => {
        if (isModalOpen) {
            // Disable body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Enable body scroll when modal is closed
            document.body.style.overflow = 'auto';
        }
    
        // Cleanup on component unmount or when modal state changes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);


    return (
        <div className="max-w-7xl mx-auto mt-20 p-6">
            <div className="flex flex-col lg:flex-row">
                {/* Image on the left side */}
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <img
                        className="w-full h-96 object-cover object-center rounded-lg"
                        src={vehicle.image}
                        alt={vehicle.name}
                    />
                    <div className="flex justify-between items-center mt-8">
                        <span className="text-4xl font-bold text-gray-900">{vehicle.price} USD</span>
                        <button
                            className="bg-red-800 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
                            onClick={openModal}
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
                                className={`w-6 h-6 ${index < vehicle.rating ? 'text-yellow-300' : 'text-gray-200'}`}
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
                            <p><strong>Stock ID:</strong> {vehicle.stockId}</p>
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
