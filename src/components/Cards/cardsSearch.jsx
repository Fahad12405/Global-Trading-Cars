import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CarSearchForm = ({ onSearch }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [carModels, setCarModels] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API (you can replace this with your actual API call)
    const fetchCarModels = async () => {
      const data = [
        "TOYOTA MARK X 250G",
        "TOYOTA HARRIER",
        "TOYOTA ALPHARD",
        "MAZDA CX-5",
        "TOYOTA LAND CRUISER PRADO TX",
        "HONDA FIT HYBRID",
        "MAZDA DEMIO",
        "TOYOTA RUSH",
        "TOYOTA RUSH G",
        "TOYOTA MARK X 250G S",
        "TOYOTA COROLLA SPACIO",
        "TOYOTA VITZ",
        "SUBARU FORESTER 2.0XT",
        "MAZDA AXELA XD L",
        "MERCEDES-BENZ C180",
        "TOYOTA COROLLA AXIO 1.5G",
        "HONDA FIT RS",
        "TOYOTA HILUX",
        "TOYOTA RAV-4 G",
        "TOYOTA PROBOX DX",
        "TOYOTA HIACE",
        "TOYOTA LAND CRUISER PRADO TX",
        "TOYOTA RACTIS"
      ];
      setCarModels(data);
    };

    fetchCarModels();

    // Generate years from 1990 to 2026
    const yearsArray = [];
    for (let i = 1990; i <= 2026; i++) {
      yearsArray.push(i);
    }
    setYears(yearsArray);

    // Set fixed model options
    const fixedModels = [
      "RACTIS",
      "TX",
      "HIACE",
      "DX",
      "G",
      "HILUX",
      "RS",
      "1.5G",
      "C180",
      "250G S",
      "RUSH",
      "DEMIO",
      "FIT",
      "CX-5",
      "ALPHARD",
      "HARRIER",
      "250G",
    ];
    setModelOptions(fixedModels);
  }, []);

  useEffect(() => {
    // Set model options based on the selected car name
    const selectedCar = watch("name");
    if (selectedCar) {
      const models = getModelOptions(selectedCar);
      setModelOptions(models);
      setValue("modelCode", ""); // Reset model selection when the car changes
    }
  }, [watch("name"), setValue]);

  const getModelOptions = (carName) => {
    // Filter models based on the selected car name
    const modelsMap = {
      "TOYOTA MARK X 250G": ["250G", "250G S"],
      "TOYOTA HARRIER": ["HARRIER"],
      "TOYOTA ALPHARD": ["ALPHARD"],
      "MAZDA CX-5": ["CX-5"],
      "TOYOTA LAND CRUISER PRADO TX": ["TX"],
      // Add other cars and their model options here
    };

    return modelsMap[carName] || []; // Return empty array if no model matches
  };

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
              {carModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
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
              {modelOptions.map((model, index) => (
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
