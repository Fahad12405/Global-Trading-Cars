import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdCancel } from "react-icons/md";


export default function AddProduct() {
    const [attachments, setAttachments] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        inventoryLocation: "",
        modelCode: "",
        year: "",
        transmission: "",
        color: "",
        drive: "",
        doors: "",
        steering: "",
        seats: "",
        engineType: "",
        bodyType: "",
        engineSize: "",
        mileage: "",
        fuelType: "",
        dimensions: "",
        vehicleWeight: "",
        grossVehicleWeight: "",
        maxLoadingCapacity: "",
        m3: "",
        images: [],
    });

    // useEffect(()=> {
    //     const getLsToken = localStorage.getItem('token')
    //     if(!getLsToken){
    //         window.location.href = '/'
    //     }
    // },[])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addAttachment = (event) => {
        const files = Array.from(event.target.files);

        if (attachments.length + files.length > 6) {
            alert("You can only upload up to 6 files.");
            return;
        }

        const newAttachments = files.map((file) => ({
            id: Date.now() + Math.random(),
            file, // Store the actual File object
            name: file.name,
            preview: URL.createObjectURL(file), // Just for preview
        }));

        const updatedAttachments = [...attachments, ...newAttachments];

        setAttachments(updatedAttachments);
        setFormData({ ...formData, images: updatedAttachments.map(att => att.file) }); // Update formData with file objects
    };

    const removeAttachment = (id) => {
        const updatedAttachments = attachments.filter((attachment) => attachment.id !== id);
        setAttachments(updatedAttachments);
        setFormData({ ...formData, images: updatedAttachments.map(att => att.file) }); // Update formData
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        for (const [key, value] of Object.entries(formData)) {
            if (key !== "images") {
                data.append(key, value);
            }
        }

        // Append images as File objects
        formData.images.forEach((image) => {
            data.append("images", image);
        });

        const token = localStorage.getItem('token');
        if (!token) {
            alert("Token not found. Please log in first.");
            return;
        }

        try {
            const response = await axios.post('https://api-car-export.vercel.app/api/product/add', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added Successfully!',
                    text: 'Your product has been added.',
                    confirmButtonText: 'OK'
                })
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while adding the product.");
        }
    };
    

    return (
        <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md mt-22 border-2 border-gray-300 hover:border-gray-400 h-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Product</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Car Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Inventory Location</label>
                    <input
                        type="text"
                        name="inventoryLocation"
                        value={formData.inventoryLocation}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Model Code</label>
                    <input
                        type="text"
                        name="modelCode"
                        value={formData.modelCode}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Year</label>
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700">Transmission</label>
                    <select
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    >
                        <option value="">Select Transmission</option>
                        <option value="AT (Automatic)">AT (Automatic)</option>
                        <option value="MT (Manual)">MT (Manual)</option>
                    </select>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700">Drive</label>
                    <select
                        name="drive"
                        value={formData.drive}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    >
                        <option value="">Select Drive Type</option>
                        <option value="2WD">2WD</option>
                        <option value="4WD">4WD</option>
                        <option value="AWD">AWD</option>
                    </select>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700">Color</label>
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700">Doors</label>
                    <input
                        type="text"
                        name="doors"
                        value={formData.doors}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Engine Type</label>
                    <input
                        type="text"
                        name="engineType"
                        value={formData.engineType}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Engine Size</label>
                    <input
                        type="text"
                        name="engineSize"
                        value={formData.engineSize}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Mileage</label>
                    <input
                        type="text"
                        name="mileage"
                        value={formData.mileage}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
                    <select
                        name="fuelType"
                        value={formData.fuelType}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    >
                        <option value="">Select Fuel Type</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Body Type</label>
                    <input
                        type="text"
                        name="bodyType"
                        value={formData.bodyType}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Dimensions</label>
                    <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Gross Vehicle Weight</label>
                    <input
                        type="number"
                        name="grossVehicleWeight"
                        value={formData.grossVehicleWeight}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Max Loading Capacity</label>
                    <input
                        type="number"
                        name="maxLoadingCapacity"
                        value={formData.maxLoadingCapacity}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Seats</label>
                    <input
                        type="number"
                        name="seats"
                        value={formData.seats}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Steering</label>
                    <select
                        name="steering"
                        value={formData.steering}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    >
                        <option value="">Select Steering Type</option>
                        <option value="LHD (Left-Hand Drive)">LHD (Left-Hand Drive)</option>
                        <option value="RHD (Right-Hand Drive)">RHD (Right-Hand Drive)</option>
                    </select>
                </div>

               

                <div>
                    <label className="block text-sm font-medium text-gray-700">Vehicle Weight</label>
                    <input
                        type="text"
                        name="vehicleWeight"
                        value={formData.vehicleWeight}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">M-3</label>
                    <input
                        type="number"
                        name="m3"
                        value={formData.m3}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                </div>

                <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                        Upload Images (Max 6)
                    </label>
                    <input
                        type="file"
                        name="images"
                        accept="image/*"
                        onChange={addAttachment}
                        multiple
                        className="w-full mt-1 p-2 border rounded-md "
                    />
                </div>
                <div className="flex w-fit" >
                    {attachments.map((attachment) => (
                        <div
                            key={attachment.id}
                            className="relative border-2 border-dashed border-gray-400 p-4 w-20 h-24 flex items-center justify-center"
                        >
                            <img
                                src={attachment.preview}
                                alt={attachment.name}
                                className="object-cover w-full h-full"
                            />
                            <button
                                onClick={() => removeAttachment(attachment.id)}
                                className="absolute top-0 right-0 p-1"
                            >
                                <MdCancel size={22} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="col-span-3 flex justify-center">
                    <button
                        type="submit"
                        className="bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                    >
                        Add Product
                    </button>
                </div>
            </form>

        </div>


    );
}
