import React, { useState, useEffect } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Toast from "../Toast Component/toast";



import axios from 'axios'; // Make sure you have axios imported

const EditModal = ({ selectedCar, onClose }) => {
    const [carData, setCarData] = useState(selectedCar || {});
    const [toast, setToast] = useState(null);
    const [loader, setLoader] = useState(false)

    const token = localStorage.getItem("token");
    console.log(selectedCar, "selectedCar")




    useEffect(() => {
        // Disable scrolling on the body when the modal is open
        document.body.style.overflow = 'hidden';

        // Cleanup: Restore scrolling when the modal is closed
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)

        try {
            const response = await axios.patch(
                `https://api-car-export.vercel.app/api/product/update/${carData.id}`,
                carData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                setToast({ message: "Product Updated Successfully!", bgColor: "bg-green-400" });
            }
        } catch (error) {
            setToast({ message: "Failed to update product. Please try again." });
        }
        setLoader(false)

    };
    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center mt-22">
            <div className="bg-white p-8 rounded-lg shadow-2xl border-1 w-full sm:w-11/12 md:w-7xl max-h-[80vh] overflow-y-auto flex flex-col relative">
                <button
                    type="button"
                    onClick={onClose} 
                    className="absolute top-6 right-8 text-gray-600"
                >
                    <IoCloseCircleOutline size={32} />
                </button>
    
                <h2 className="text-4xl mb-8 sm:mb-6 text-center text-red-800">Edit Product</h2>
    
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {['name', 'engineType', 'transmission', 'color', 'year', 'drive', 'inventoryLocation', 'doors', 'steering', 'seats', 'fuelType', 'bodyType', 'chassisNo', 'engineSize', 'mileage', 'modelCode', 'description'].map((field) => (
                        <div className="mb-4" key={field}>
                            <label className="block mb-1">
                                {field.replace(/([A-Z])/g, ' $1').toUpperCase()}
                            </label>
                            {
                                field === "description" ? (
                                    <div className="col-span-1 sm:col-span-2 md:col-span-3">
                                        <textarea
                                            name={field}
                                            value={carData[field] || ""}
                                            onChange={handleChange}
                                            className="w-full h-40 mt-1 p-2 border rounded-md border-[#A2A2A2]"
                                        />
                                    </div>
                                ) : field === "drive" ? (
                                    <select
                                        name={field}
                                        value={carData[field] || ""}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                    >
                                        <option value="2WD">2WD</option>
                                        <option value="4WD">4WD</option>
                                        <option value="AWD">AWD</option>
                                    </select>
                                ) : field === "fuelType" ? (
                                    <select
                                        name={field}
                                        value={carData[field] || ""}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                    >
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Electric">Electric</option>
                                    </select>
                                ) : field === "steering" ? (
                                    <select
                                        name={field}
                                        value={carData[field] || ""}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                    >
                                        <option value="LHD">LHD (Left-Hand-Drive)</option>
                                        <option value="RHD">RHD (Right-Hand-Drive)</option>
                                    </select>
                                ) : field === "transmission" ? (
                                    <select
                                        name={field}
                                        value={carData[field] || ""}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                    >
                                        <option value="AT">AT (Automatic)</option>
                                        <option value="MT">MT (Manual)</option>
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        name={field}
                                        value={carData[field] || ""}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded"
                                    />
                                )
                            }
                        </div>
                    ))}
    
                    <div className="flex justify-end space-x-2 mt-auto">
                        {toast && <Toast message={toast.message} bgColor={toast.bgColor} />}
    
                        <button
                            disabled={loader}
                            type="submit"
                            className="px-6 py-2 bg-red-800 text-white rounded text-sm"
                        >
                            {loader ? (
                                <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 text-white"></div>
                            ) : (
                                "Update"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
    
};

export default EditModal;
