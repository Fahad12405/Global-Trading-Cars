import React, { useState, useEffect } from 'react';
import CarSearchForm from '../../components/Cards/cardsSearch';
import { Link } from 'react-router-dom';

export default function CarforSale() {
  const [filteredResults, setFilteredResults] = useState(
    {
      name: "",
      modelCode: "",
      year: ""
    }
  );
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredResults]);

  const fetchApiData = async (query) => {
    try {
      setLoading(true);
      const url = `https://api-car-export.vercel.app/api/product/get?name=${query.name}&modelCode=${query.modelCode}&year=${query.year}&skip=${(currentPage - 1) * itemsPerPage}`;
  
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.data.products) {
        setApiData(data.data.products);
        setTotalPages(Math.ceil(data.data.total / itemsPerPage));
      }
    } catch (error) {
      // console.log('There is a critical error');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchApiData(filteredResults);
  }, [currentPage, filteredResults]);

  const handleSearch = (formData) => {
    setFilteredResults(formData)
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
          <button onClick={() => handlePageClick(currentPage - 1)} className="px-4 py-2 bg-gray-200 rounded">Prev</button>
        )}
        {Array.from({ length: end - start + 1 }, (_, index) => start + index).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 ${currentPage === page ? 'bg-red-800 text-white' : 'bg-gray-200'} rounded`}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => handlePageClick(currentPage + 1)} className="px-4 py-2 bg-gray-200 rounded">Next</button>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full max-w-7xl mx-auto mt-32 p-3 bg-[#7d1418] rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-semibold text-red-50 mb-1 font-serif">Car For Sale</h1>
      </div>

      <CarSearchForm onSearch={(formData) =>  handleSearch(formData)} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 justify-center items-center">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
              <div className="p-8 rounded-t-lg w-full h-52 bg-gray-300 animate-pulse"></div>
              <div className="px-5 pb-5 mt-6">
                <div className="h-6 bg-gray-300 animate-pulse w-2/3"></div>
                <div className="h-6 bg-gray-300 animate-pulse w-1/5 mt-2"></div>
              </div>
            </div>
          ))
        ) : apiData.length > 0 ? (
          apiData.map((vehicle) => (
            <div key={vehicle.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
              <img className="rounded-t-lg w-full h-60 object-cover object-center" src={vehicle.image[0].url} alt="product image" />
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">{vehicle.name}</h5>
                  <p className="text-sm">({vehicle.year})</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-500">Model:</span>
                  <h5 className="tracking-tight text-gray-900">{vehicle.modelCode}</h5>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Transmission:</span>
                  <h5 className="tracking-tight text-gray-900">{vehicle.transmission}</h5>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Color:</span>
                  <h5 className="tracking-tight text-gray-900">{vehicle.color}</h5>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">{vehicle.price}</span>
                  <Link to={`/CarDetails/${vehicle.id}`} className="text-white mt-3 bg-red-900 hover:bg-red-700 rounded-full text-sm px-5 py-2 text-center w-full cursor-pointer">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : apiData.length === 0 && (
          <div className="flex justify-center items-center w-full h-96 mx-auto">
            <h1 className="text-center text-red-800 font-bold text-xl">No results found</h1>
          </div>
        )}
      </div>

      {totalPages > 1 && renderPagination()}
    </div>
  );
}
