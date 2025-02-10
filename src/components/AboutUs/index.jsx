import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from '../../../public/aboutimage.jpg'

export default function HomeAbout() {
    return (
        <section className="py-12 relative xl:mr-0 lg:mr-5 mr-0">  {/* Reduced the padding */}
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 className="text-black-500 text-2xl font-normal leading-relaxed">
                                    About Us
                                </h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-red-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Global Trading Cars Company
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Founded in 2012 in Saitama, Higashimatusyma Higashidaira 1277, Japan, our company specializes in exporting used cars worldwide. We have direct access to almost all auctions in Japan
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-52 p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                            All Cars Varieties
                                        </h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            We offer a diverse range of used cars from Japan,our variety ensures that you find the perfect Cars
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                            125+ Countries
                                        </h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            We are proud to have a global presence, exporting high-quality vehicles  around the world
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                            20+ Shipping Companies
                                        </h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Collaborating with Various Shipping Companies for  Deliveries.Our   companies allow us  shipping .
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                            99% Customer Satisfaction
                                        </h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            We pride ourselves on  reflecting our commitment to providing  service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/contact" className="w-full sm:w-fit px-6 py-2 mb-12 bg-red-900 text-white rounded-lg text-center hover:bg-red-700 transition-all duration-300 ease-in-out">
                            Contact Us
                        </Link>

                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex mb-12">
                        <div className="sm:w-[564px] w-full sm:h-[600px] h-[300px] sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img
                                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src={AboutImg}
                                alt="About Us Image"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>

    )
}
