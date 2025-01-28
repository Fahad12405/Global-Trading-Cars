import { useState } from "react";
import { CardDefault } from "../../components/Cards/Card";
import CarSearchForm from "../../components/Cards/cardsSearch";

export default function SearchCars() {

  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (filtered) => {
    setFilteredResults(filtered);
  };

  return (
    <div className="min-h-[50vh] flex flex-col">
      <h1 className="text-3xl font-semibold text-gray-900 text-center mt-32 ">Search Your Favourite Cars</h1>
      <div className="flex-1">
        <CarSearchForm onSearch={handleSearch} />

        <div className="flex flex-wrap justify-center items-center my-12 mx-auto gap-12">
          {filteredResults.length === 0 ? (
            <div className="flex justify-center items-center w-full h-32">
              <h1 className="text-center text-red-600 font-bold text-xl">Please search your fvt car</h1>
            </div>
          ) : (
            filteredResults.map((vehicle) => (
              <div key={vehicle.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  my-4">
                <img
                  className="p-8 rounded-t-lg w-full h-60 object-cover object-center"
                  src={vehicle.image}
                  alt="product image"
                />
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                      {vehicle.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${index < vehicle.rating ? 'text-yellow-300' : 'text-gray-200'}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">
                      {vehicle.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>


      </div>
    </div>
  )
}


