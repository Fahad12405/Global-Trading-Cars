import { useState } from "react";
import axios from "axios";
import Toast from "../Toast Component/toast";

const ProductUpdate = ({ id, stock, setData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toast, setToast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem("token");

    const handleUpdateStock = async () => {
        setIsModalOpen(false);
        setIsLoading(true);

        try {
            const response = await axios.patch(
                `https://api-car-export.vercel.app/api/product/update/${id}`,
                { stock: !stock },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                setData((prevData) =>
                    prevData.map((item) =>
                        item.id === id ? { ...item, stock: !stock } : item
                    )
                );
                setToast({ message: "Product Updated Successfully!", bgColor: "bg-green-400" });
            }
        } catch (error) {
            setToast({ message: "Failed to update product. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
            >
                {stock ? (
                    <p
                        className="ml-2 text-green-800 bg-green-100 rounded-full text-center px-2 cursor-pointer"
                    >
                        In Stock
                    </p>
                ) : isLoading ? (
                    <div className="flex items-center justify-center space-x-1 bg-green-100 px-3 py-2 ml-2 rounded-full">
                        <div className="w-2 h-2 bg-green-800 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-green-800 rounded-full animate-bounce delay-300"></div>
                        <div className="w-2 h-2 bg-green-800 rounded-full animate-bounce delay-500"></div>
                    </div>

                ) : (
                    <p
                        className="ml-2 text-gray-800 bg-gray-100 rounded-full text-center px-2 cursor-pointer"
                    >
                        Out Of Stock
                    </p>
                )}
            </button>

            {isModalOpen && (
                <div
                    className={`fixed inset-0 top-22 mx-auto flex items-center justify-center bg-transparent backdrop-blur-md z-50 transition-opacity duration-300 ${isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                        }`}
                >
                    <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 transform transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 text-center leading-relaxed text-wrap">
                            Are you sure you want to update this product?
                        </h3>
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                onClick={handleUpdateStock}
                                className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                            >
                                Yes, Update
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-5 py-2.5 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {toast && <Toast message={toast.message} bgColor={toast.bgColor} />}
        </>
    );
};

export default ProductUpdate;