import React from "react";
import { useForm } from "react-hook-form";

const CarSearchForm = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();


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
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              id="name"
              {...register("name")}
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Toyota"
            />
          </div>

          {/* Model Input */}
          <div className="flex flex-col">
            <label htmlFor="modelCode" className="text-sm font-medium text-gray-700 mb-2">
              Model
            </label>
            <input
              id="modelCode"
              {...register("modelCode")}
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Corolla"
            />
          </div>

          {/* Body Type Input */}
          {/* <div className="flex flex-col">
            <label htmlFor="bodyType" className="text-sm font-medium text-gray-700 mb-2">
              Body Type
            </label>
            <input
              id="bodyType"
              {...register("bodyType")}
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Sedan"
            />
          </div> */}

          {/* Year Input */}
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <input
              id="year"
              {...register("year")}
              type="text"
              className="form-input px-4 py-2 border rounded-md shadow-sm"
              placeholder="e.g. 2015"
            />
          </div>

          {/* Submit Button */}
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
