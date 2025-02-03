import React, { useState, useEffect } from 'react';
import CarSearchForm from '../../components/Cards/cardsSearch';
import { Link } from 'react-router-dom';

export default function CarforSale() {
  const [filteredResults, setFilteredResults] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('https://api-car-export.vercel.app/api/product/get');
        const data = await response.json();
        if (data && data.data) {
          setApiData(data.data);
          setFilteredResults(data.data);
        }
      } catch (error) {
        alert('There is a critical error');
      }
    };
    fetchApiData();
  }, []);

  const handleSearch = (filtered) => {
    setFilteredResults(filtered);
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="w-full max-w-7xl mx-auto mt-20 p-6 bg-[#7d1418] rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-semibold text-red-50 mb-2 font-serif">
          Car For Sale
        </h1>
        <div className="border-t-2 border-white w-48 mx-auto"></div>
      </div>

      <CarSearchForm onSearch={handleSearch} apiData={apiData} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 justify-center items-center">
        {filteredResults.length === 0 ? (
          <div className="flex justify-center items-center w-full h-96 mx-auto">
            <h1 className="text-center text-red-600 font-bold text-xl">No results found</h1>
          </div>
        ) : (
          filteredResults.map((vehicle) => (
            <div key={vehicle.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
              <img
                className="p-8 rounded-t-lg w-full h-60 object-cover object-center"
                src={vehicle.image[0].url}
                alt="product image"
              />
              <div className="px-5 pb-5">
                <div className='flex justify-between items-center'>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {vehicle.name}
                  </h5>
                  <p className='text-sm'>({vehicle.year})</p>
                </div>
                <div className='flex justify-between items-center'>
                  Transmisson:
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
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">{vehicle.price}</span>
                  <Link
                    to={`/CarDetails/${vehicle.id}`}
                    className="text-white mt-3 bg-red-900 hover:bg-red-700 rounded-full text-sm px-5 py-2 text-center w-full cursor-pointer"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
