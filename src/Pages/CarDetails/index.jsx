import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import ContactSection from '../../components/Contact/contact'



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
    useEffect(() => {
        const fetchVehicleData = async () => {
            try {
                const response = await fetch(`https://api-car-export.vercel.app/api/product/get/${id}`);
                const data = await response.json();
                console.log(data)
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

        closeModal();  // Close modal after submission (if applicable)
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

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + vehicle?.image?.length) % vehicle?.image?.length);
    };

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };


    return (
        <div className="max-w-7xl mx-auto mt-28 p-8">
            <div className="flex flex-col lg:flex-row">
                {/* Image on the left side */}
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className="text-4xl font-semibold text-red-900 mb-6 font-serif">{vehicle.name}</h1>

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

                    <div className="flex justify-center items-center w-full">
                        {
                            vehicle.stock ? (
                                <button className="text-white mt-3 bg-red-900 hover:bg-red-700 rounded-full text-sm px-5 py-2 text-center w-full cursor-pointer" onClick={() => openModal()}>
                                    Inquire Now
                                </button>
                            ) : (
                                <p className="text-sm text-center text-red-600 bg-white-100 rounded-full w-full py-2 mt-12"> This Car is Reserved!</p>
                            )
                        }
                    </div>

                </div>

                {/* Car Details on the right side */}
                <div className="w-full lg:w-3/3 pl-0 lg:pl-8">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-semibold text-red-900 mb-4 font-serif ">Car Details</h2>
                    </div>
                    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {/* Property and Detail for Model Code */}
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Model Code</h3>
                                <p className="text-sm text-gray-900">{vehicle.modelCode}</p>
                            </div>
                            <div className="border border-red-800   p-4">
                                <h3 className="text-md font-medium text-red-700">Year</h3>
                                <p className="text-sm text-gray-900">{vehicle.year}</p>
                            </div>

                            {/* Property and Detail for Transmission */}
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Transmission</h3>
                                <p className="text-sm text-gray-900">{vehicle.transmission}</p>
                            </div>
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Color</h3>
                                <p className="text-sm text-gray-900">{vehicle.color}</p>
                            </div>

                            {/* Property and Detail for Drive Type */}
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Drive Type</h3>
                                <p className="text-sm text-gray-900">{vehicle.drive}</p>
                            </div>
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Inventory Location</h3>
                                <p className="text-sm text-gray-900">{vehicle.inventoryLocation}</p>
                            </div>

                            {/* Property and Detail for Doors */}
                            <div className="border border-red-800 p-4">
                                <h3 className="text-md font-medium text-red-700">Doors</h3>
                                <p className="text-sm text-gray-900">{vehicle.doors}</p>
                            </div>
                            <div className="border border-red-800 p-4">
                                <h3 className="text-md font-medium text-red-700">Steering</h3>
                                <p className="text-sm text-gray-900">{vehicle.steering}</p>
                            </div>

                            {/* Property and Detail for Seats */}
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Seats</h3>
                                <p className="text-sm text-gray-900">{vehicle.seats}</p>
                            </div>
                            <div className="border border-red-800 p-4">
                                <h3 className="text-md font-medium text-red-700">Engine Type</h3>
                                <p className="text-sm text-gray-900">{vehicle.engineType}</p>
                            </div>

                            {/* Property and Detail for Body Type */}
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Body Type</h3>
                                <p className="text-sm text-gray-900">{vehicle.bodyType}</p>
                            </div>
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Engine Size</h3>
                                <p className="text-sm text-gray-900">{vehicle.engineSize}</p>
                            </div>

                            {/* Property and Detail for M-3 */}
                            <div className="border border-red-800 b p-4">
                                <h3 className="text-md font-medium text-red-700">M-3</h3>
                                <p className="text-sm text-gray-900">{vehicle.m3}</p>
                            </div>


                            {/* Property and Detail for Mileage */}
                            <div className="border border-red-800  p-4">
                                <h3 className="text-md font-medium text-red-700">Mileage</h3>
                                <p className="text-sm text-gray-900">{vehicle.mileage}</p>
                            </div>
                            <div className="border border-red-800 bg-red-1 p-4">
                                <h3 className="text-md font-medium text-red-700">Fuel Type</h3>
                                <p className="text-sm text-gray-900">{vehicle.fuelType}</p>
                            </div>
                            <div className="border border-red-800 bg-red- p-4">
                                <h3 className="text-md font-medium text-red-700">Description</h3>
                                <p className="text-sm text-gray-900">{vehicle.description}</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <ContactSection/>
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
