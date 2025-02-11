import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CarSearchForm = ({ onSearch }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);


  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://api-car-export.vercel.app/api/product/products_summary");
        const data = await response.json();
  
        if (response.status == 200) {
          setCars(data.data.name)
          setModels(data.data.modelCode)
          setYears(data.data.year)

        } 
      } catch (error) {
        // console.log("Error fetching car data:", error);
      }
    };
  
    fetchCars();
  }, []);


  const onSubmit = (data) => {
    onSearch(data);
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl border border-gray-300">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <select
              id="name"
              {...register("name")}
              className="form-select px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a car</option>
              {cars.map((car, index) => (
                <option key={index} value={car.split(" ")[0]}>
                   {car}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="modelCode" className="text-sm font-medium text-gray-700 mb-2">
              Model
            </label>
            <select
              id="modelCode"
              {...register("modelCode")}
              className="form-select px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a model</option>
              {models.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <select
              id="year"
              {...register("year")}
              className="form-select px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a year</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="text-white mt-7 h-10 bg-red-900 hover:bg-red-700 rounded-full text-sm px-5 py-2 text-center w-full cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarSearchForm;