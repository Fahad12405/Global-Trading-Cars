import React from 'react';
import Company  from '../../../public/company.jpg';
import Company2  from '../../../public/comapny2.jpg';
import AboutUs from '../../components/AboutUs/index'
import FAQ from '../../components/FAQ/FAQ'


export default function CompanyProfile() {
  return (
    <section className="py-24 relative mt-12">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover h-96"
                src={Company}
                alt="About Us"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover h-96"
              src={Company2}
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
          
          </div>
        </div>
        <AboutUs/>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900">Company Information</h2>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Company Name</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Global Trading Cars</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Foundation</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">January, 1993</th>
                </tr>

             
               
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Phone Number</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">+ 080 4107 4210</th>
                </tr>
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Intermediary Bank</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700"> DEUTSCHE BANK TRUST COMPANY AMERICAS (SWIFT BIC: BKTRUS33) <br />
                                    OR <br />
                                    JPMORGAN CHASE BANK, TOKYO (SWIFT BIC: CHASJPJT)</th>
                </tr>
               
               
              
             
                <tr className="border-b">
                  <th className="px-6 py-4 text-xl font-medium text-gray-700">Branches in Japan</th>
                  <th className="px-6 py-4 text-xl font-medium text-gray-700"> Saitama,
                    Higashimatusyma
                    Higashidaira
                    1277,
                    Japan  </th>
                </tr>
              </thead>
            </table>
            
          </div>
        </div>

        <FAQ/>
      </div>
    </section>
  );
}
