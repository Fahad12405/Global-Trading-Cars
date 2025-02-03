import React, { useState, useEffect } from 'react';

const CarSearchForm = ({ onSearch, apiData }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [rhdlhd, setRhdLhd] = useState('');
  const [year, setYear] = useState(''); // Single year field

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') setName(value);
    else if (id === 'modelCode') setModel(value);
    else if (id === 'bodyType') setBodyType(value);
    else if (id === 'year') setYear(value); // Handle the single year field
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = apiData.filter((vehicle) => {
      const vehicleYear = parseInt(vehicle.year.split('/')[0]);
      const isNameMatch = name ? vehicle.name.toLowerCase().includes(name.toLowerCase()) : true;
      const isModelMatch = model ? vehicle.modelCode.toLowerCase().includes(model.toLowerCase()) : true;
      const isBodyTypeMatch = bodyType ? vehicle.bodyType.toLowerCase().includes(bodyType.toLowerCase()) : true;
      const isRhdLhdMatch = rhdlhd ? vehicle.steering.toLowerCase().includes(rhdlhd.toLowerCase()) : true;
      const isYearMatch = year ? vehicleYear === parseInt(year) : true; // Compare with single year input

      return isNameMatch && isModelMatch && isBodyTypeMatch && isRhdLhdMatch && isYearMatch;
    });

    onSearch(filtered); // Pass the filtered results back to the parent
  };

  // Use useEffect to automatically update the data when any input changes
  useEffect(() => {
    // Trigger search when any input field is cleared
    handleSearch({ preventDefault: () => {} });
  }, [name, model, bodyType, rhdlhd, year]);

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl border border-gray-300">
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

          {/* Year Input (single field) */}
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <input
              id="year"
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm"
              placeholder="e.g. 2015"
              value={year}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="text-white mt-3 bg-red-900 hover:bg-red-700 rounded-full text-sm px-5 py-2 text-center w-full cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarSearchForm;
