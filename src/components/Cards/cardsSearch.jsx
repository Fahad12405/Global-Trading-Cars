import React, { useState } from 'react';
import vehicleData from '../../../constant/dummyData';

const CarSearchForm = ({ onSearch }) => {  // Accept onSearch function as prop
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [rhdlhd, setRhdLhd] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') setName(value);
    else if (id === 'modelCode') setModel(value);
    else if (id === 'bodyType') setBodyType(value);
    else if (id === 'rhdlhd') setRhdLhd(value);
    else if (id === 'yearFrom') setYearFrom(value);
    else if (id === 'yearTo') setYearTo(value);
  };

  // Filter function for the vehicle data
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    const filtered = vehicleData.filter((vehicle) => {
      const vehicleYear = parseInt(vehicle.year.split('/')[0]);
      const isNameMatch = name ? vehicle.name.toLowerCase().includes(name.toLowerCase()) : true;
      const isModelMatch = model ? vehicle.modelCode.toLowerCase().includes(model.toLowerCase()) : true;
      const isBodyTypeMatch = bodyType ? vehicle.bodyType.toLowerCase().includes(bodyType.toLowerCase()) : true;
      const isRhdLhdMatch = rhdlhd ? vehicle.steering.toLowerCase().includes(rhdlhd.toLowerCase()) : true;
      const isYearMatch =
        (yearFrom ? vehicleYear >= parseInt(yearFrom) : true) &&
        (yearTo ? vehicleYear <= parseInt(yearTo) : true);

      return isNameMatch && isModelMatch && isBodyTypeMatch && isRhdLhdMatch && isYearMatch;
    });

    onSearch(filtered); // Pass filtered data to parent component
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-red-50 p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" onSubmit={handleSearch}>
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Toyota"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          {/* Model Input */}
          <div className="flex flex-col">
            <label htmlFor="modelCode" className="text-sm font-medium text-gray-700 mb-2">
              Model
            </label>
            <input
              id="modelCode"
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Corolla"
              value={model}
              onChange={handleInputChange}
            />
          </div>

          {/* Body Type Input */}
          <div className="flex flex-col">
            <label htmlFor="bodyType" className="text-sm font-medium text-gray-700 mb-2">
              Body Type
            </label>
            <input
              id="bodyType"
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Sedan"
              value={bodyType}
              onChange={handleInputChange}
            />
          </div>

          {/* RHD/LHD Input */}
          <div className="flex flex-col">
            <label htmlFor="rhdlhd" className="text-sm font-medium text-gray-700 mb-2">
              RHD/LHD
            </label>
            <input
              id="rhdlhd"
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. RHD"
              value={rhdlhd}
              onChange={handleInputChange}
            />
          </div>

          {/* Year Range */}
          <div className="flex flex-col col-span-2 sm:col-span-1 text-center">
            <label htmlFor="yearRange" className="text-sm font-medium text-gray-700 mb-2">
              Year Range
            </label>
            <div className="flex space-x-2">
              <input
                id="yearFrom"
                type="number"
                className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="From"
                value={yearFrom}
                onChange={handleInputChange}
                min="1900"
                max="2025"
              />
              <span className="text-gray-700">to</span>
              <input
                id="yearTo"
                type="number"
                className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="To"
                value={yearTo}
                onChange={handleInputChange}
                min="1900"
                max="2025"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center sm:col-span-2 lg:col-span-1 mt-4">
            <button
              type="submit"
              className="bg-red-800 text-white px-8 py-1 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarSearchForm;
