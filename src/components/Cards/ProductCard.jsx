import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';  
import CarSearchForm from "./cardsSearch";

export function ProductCard({ data }) {
  const [filteredResults, setFilteredResults] = useState({
    name: "",
    modelCode: "",
    year: ""
  });
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;  

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/CarDetails/${id}`);
  };

  const fetchApiData = async (query) => {
    try {
      setLoading(true);
      const skipValue = (query.name || query.modelCode || query.year) ? 0 : (currentPage - 1) * itemsPerPage;

      const url = `https://api-car-export.vercel.app/api/product/get?name=${query.name}&modelCode=${query.modelCode}&year=${query.year}&skip=${skipValue}&limit=${itemsPerPage}`;

      const response = await fetch(url);
      const data = await response.json();
      if (data && data.data.products) {
        setApiData(data.data.products);
        setTotalPages(Math.ceil(data.data.total / itemsPerPage));
      }
    } catch (error) {
      console.log('There is a critical error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData(filteredResults);
  }, [currentPage, filteredResults]);

  const handleSearch = (formData) => {
    setFilteredResults(formData);
    setCurrentPage(1); 
  };

  const SkeletonLoader = () => (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto h-full flex flex-col">
      <div className="h-60 bg-gray-300 rounded-t-lg"></div>
  
      <div className="px-5 pb-5 mt-4 flex flex-grow flex-col">
        <div className='flex justify-between items-center gap-1'>
          <div className="h-6 w-3/4 bg-gray-300 rounded"></div> 
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
        </div>
        
        
  
        <div className='flex justify-between items-center mt-4'>
          <div className="h-5 w-1/3 bg-gray-300 rounded"></div>
        </div>
  
        <div className='flex justify-between items-center mt-4 '>
          <div className="h-5 w-1/3 bg-gray-300 rounded"></div> 
        </div>
  
        <div className="flex items-center justify-between mt-4">
          <div className="h-10 w-full bg-gray-300 rounded-full"></div> 
        </div>
      </div>
    </div>
  );
  
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="mt-4 p-3 bg-[#7d1418] rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-semibold text-red-50 mb-2 font-serif">
          Car For Sale
        </h1>
      </div>
      <CarSearchForm onSearch={(formData) => handleSearch(formData)} />
      
      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 justify-center items-center">
          {[...Array(8)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 justify-center items-center">
          {apiData.length === 0 ? (
            <p>No cars found based on your search.</p>
          ) : (
            apiData?.map((vehicle) => (
              <div key={vehicle.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto h-full flex flex-col">
                <img
                  className="rounded-t-lg w-full object-cover object-center h-60" 
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
                    Transmission:
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
            ))
          )}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-red-900 text-white px-4 py-4 hover:bg-red-700 rounded-full"
        >
          <GrLinkPrevious size={20} />
        </button>
        <span className="mx-12 text-2xl mt-2">{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-red-900 text-white px-4 py-4 hover:bg-red-700 rounded-full"
        >
          <GrLinkNext size={20} />
        </button>
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
