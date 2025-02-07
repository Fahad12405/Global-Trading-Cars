import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import InvoiceModal from "../../components/Pdf Template/pdfTemplate";
import ProductUpdate from "../../components/Dashboard/ProductUpdate";
import Toast from "../../components/Toast Component/toast";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const getLsToken = localStorage.getItem("token");
    if (!getLsToken) {
      window.location.href = "/Protected/LogIn";
    }
  }, []);

  // Fetch data when currentPage or searchTerm changes
  const fetchProducts = async (query = "", page = currentPage) => {
    try {
      setLoading(true);
      const skipValue = (page - 1) * itemsPerPage;

      const url = `https://api-car-export.vercel.app/api/product/get?referenceNo=${query}&skip=${skipValue}&limit=${itemsPerPage}`;
      const response = await axios.get(url);

      if (response.status === 200) {
        setData(response.data.data.products);
        setTotalPages(Math.ceil(response.data.data.total / itemsPerPage));
      }
    } catch (error) {
      console.error("An error occurred while fetching products.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(searchTerm, currentPage);
  }, [currentPage]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page on new search
    fetchProducts(searchTerm, 1);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await axios.delete(
        `https://api-car-export.vercel.app/api/product/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Product deleted successfully!");
        setData((prevData) => prevData.filter((item) => item.id !== id)); // UI Update bina reload ke
      }
    } catch (error) {
      alert("Failed to delete product. Please try again.");
    }
  };

  const handleCreateInvoice = (car) => {
    setSelectedCar(car);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);

    if (end - start < 2) {
      start = Math.max(1, end - 2);
    }

    return (
      <div className="flex justify-center mt-6 space-x-2">
        {currentPage > 1 && (
          <button onClick={() => handlePageClick(currentPage - 1)} className="px-4 py-2 bg-gray-200 rounded">
            Prev
          </button>
        )}
        {Array.from({ length: end - start + 1 }, (_, index) => start + index).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 ${currentPage === page ? "bg-red-800 text-white" : "bg-gray-200"} rounded`}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => handlePageClick(currentPage + 1)} className="px-4 py-2 bg-gray-200 rounded">
            Next
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-32 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
        <form className="flex gap-2 flex-1 max-w-full sm:max-w-xs w-full" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Cars..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-full "
          />
          <button type="submit" className="text-white bg-red-900 hover:bg-red-700 cursor-pointer rounded-full px-7" >
            Search
          </button>
        </form>

        <div>
          <Link
            to="/Protected/AddProduct"
            className="inline-flex items-center px-4 py-2 text-white rounded-full bg-red-900 hover:bg-red-700"
          >
            <FaPlus className="mr-3" />
            Add Product
          </Link>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto sm:overflow-x-visible mt-6">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Car Stock Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Engine Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transmission</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Color</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"> Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              Array.from({ length: itemsPerPage }, (_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                      <div className="flex-1 space-y-3 w-[50px]">
                        <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                  </td>
                </tr>
              ))
            ) : (
              data?.map((item, index) => (
                <tr key={index}>
                  <td className="px-1 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={item.image?.[0]?.url}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500">{item.modelCode}</div>
                        <div className="text-sm text-gray-500">{item.year}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.referenceNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.engineType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.transmission}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.color}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" >

                    {
                      <ProductUpdate id={item.id} stock={item.stock} setData={setData} fetchProducts={fetchProducts} searchTerm={searchTerm} currentPage={currentPage} />
                    }
                  </td>
                  <td className="flex space-x-4 px-6 py-8 whitespace-nowrap text-sm font-medium">
                    <p
                      className="text-red-700 hover:text-red-900 cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </p>
                    <p
                      className="text-blue-600 hover:text-blue-900 cursor-pointer"
                      onClick={() => handleCreateInvoice(item)}
                    >
                      Create Invoice
                    </p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && renderPagination()}

      {/* Modal */}
      {modal && selectedCar && (
        <InvoiceModal handleCloseModal={handleCloseModal} selectedCar={selectedCar} />
      )}



    </div>
  );

}