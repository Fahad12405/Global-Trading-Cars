import React from 'react';

export default function CompanyProfile() {
  return (
    <section className="py-24 relative bg-red-50 mt-12">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover h-96"  
                src={"https://images.pexels.com/photos/7144243/pexels-photo-7144243.jpeg?cs=srgb&dl=pexels-shkrabaanthony-7144243.jpg&fm=jpg"}
                alt="About Us"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover h-96" 
              src="https://media.istockphoto.com/id/1334985057/photo/exchange-money-and-car-keys-car-trading-and-loan.jpg?s=612x612&w=0&k=20&c=t3ynOYhc1mZouNZa9Bp5m0ZZyfi88fhealBOK6IoJKE="
              alt="Global Trading Cars"
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Global Trading Cars - Your Trusted Partner in Car Exports
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  At Global Trading Cars, we are committed to bringing you the best-used automobiles from around the world. We serve customers in developing countries where resource conservation is key, providing high-quality vehicles with fast and reliable export services.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    30+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Years of Experience in Automobile Exports
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    1000+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Vehicles Exported Annually
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    15+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Countries Served Globally
                  </h6>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-red-800 hover:bg-red-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
               Inquire Now
              </span>
            </button>
          </div>
        </div>

        {/* Company Details */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900">Company Information</h2>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Company Name</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">SBT CO., LTD.</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Foundation</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">January, 1993</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">President & CEO</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Inami Taro</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Headquarters</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">
                    Yokohama Plaza Bldg. 10F, 2-6 Kinko-cho, Kanagawa-ku, Yokohama, Kanagawa 221-0056, Japan
                  </th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Phone Number</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">+81-45-290-9485</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Fax Number</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">+81-45-290-9486</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Offices</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">2 Domestic Offices, 32 Overseas Offices</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Number of Employees</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">1,555 (As of February 2019)</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Business Description</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Export and Sale of Automobiles</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">License of Secondhand Dealer</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">
                    Kanagawa Prefectural Public Safety Commission; No. 452740600252
                  </th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Corporate Site</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">
                    <a href="https://sbtjapan.co.jp" className="text-indigo-600 hover:text-indigo-800">sbtjapan.co.jp</a>
                  </th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Branches in Japan</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Noda Yard, 4716 Funakata, Noda-shi, Chiba, 270-0233, Japan</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
