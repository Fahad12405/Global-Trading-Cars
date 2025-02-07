import React from 'react'

export default function ContactSection() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
                <div className="w-full max-w-1xl mx-auto mt-20 p-3 bg-[#7d1418] rounded-lg shadow-xl text-center">
                    <h1 className="text-3xl font-semibold text-red-50 mb-2 font-serif">
                        Contact Us
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8">
                    <div className="flex items-center lg:mb-0 mb-10">
                        <div className="">

                            <h2 className="text-red-800  font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                                Reach Out To Us
                            </h2>
                            <form action="">
                                <input
                                    type="text"
                                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                    placeholder="Name"
                                />
                                <input
                                    type="email"
                                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                    placeholder="Email"
                                />
                                <textarea
                                    name=""
                                    id="text"
                                    className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                                    placeholder="Phone"
                                    defaultValue={""}
                                />
                                <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-red-800 shadow transition-all duration-700 hover:bg-red-500">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="lg:max-w-xl w-full h-[650px] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('https://media.istockphoto.com/id/515743917/photo/contact-us-web-concept.jpg?s=612x612&w=0&k=20&c=Jdt_fWYLnw0vftaal23tLc6LD2kfFBTDfrTlG0U8sh4=')]">
                        <div className="mt-12 px-4 md:px-6">
                            <div className="lg:w-96 w-full h-auto bg-white shadow-xl p-4 lg:p-6 rounded-lg">
                                <h4 className="text-red-800 text-xl font-extrabold leading-6 mb-8 text-center font-serif">
                                    Contact Us
                                </h4>
                                <a href="javascript:;" className="flex items-center mb-8">
                                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                                            stroke="#000000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">080 4107 4210</h5>
                                </a>
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                                            stroke="#000000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">info@globaltradingcars.com</h5>
                                </a>
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                                            stroke="#000000"
                                            strokeWidth={2}
                                        />
                                        <path
                                            d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                                            stroke="#000000"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                        <a
                                            href="https://maps.app.goo.gl/BgwEke8ZFua7etB98"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            Saitama, Higashimatsuyama, Higashidaira 1277, Japan
                                        </a>
                                    </h5>
                                </a>
                                <div className="flex items-center justify-center border-t border-gray-100 pt-6">
                                    <a href="javascript:;" className="mr-6">
                                        <svg width={31} height={30} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.0683594" width={30} height={30} rx={15} fill="#337FFF" />
                                            <path
                                                d="M18.5094 15.937L18.9369 13.2236H16.3038V11.4599C16.3038 10.7179 16.6714 9.99293 17.8469 9.99293H19.0608V7.68231C18.3539 7.56968 17.6396 7.50874 16.9236 7.5C14.7565 7.5 13.3417 8.80158 13.3417 11.1546V13.2236H10.9395V15.937H13.3417V22.5H16.3038V15.937H18.5094Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                    <a href="javascript:;" className="mr-6">
                                        <svg width={31} height={30} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={30} height={30} rx={15} fill="#1DA1F2" />
                                            <path
                                                d="M23.4053 8.02057C23.4053 7.82414 23.4153 7.62772 23.4248 7.43129C22.5243 7.74391 21.5715 7.95706 20.5756 8.06789C21.5854 7.42355 22.2631 6.45159 22.3832 5.28713C21.4101 5.86126 20.2979 6.23579 19.1671 6.32703C18.2323 5.46967 16.8993 5.12356 15.5221 5.46347C14.1449 5.80338 13.2272 6.91579 12.8647 8.23009C12.5022 9.54439 12.7402 10.9794 13.7048 11.6951C12.8763 11.6792 12.1085 11.4336 11.524 10.9514C11.2565 11.885 11.8596 12.8624 12.8961 13.0534C13.9325 13.2444 15.1176 12.7447 15.646 11.8986C16.4272 12.4936 17.2673 12.8719 18.1832 12.9936C17.9644 13.5875 17.4582 14.0107 16.8347 14.0107C16.2671 14.0107 15.6984 13.7452 15.2106 13.2101C14.7227 12.675 14.4156 12.0165 14.4156 11.3312C14.4156 9.52057 15.8662 8.26712 17.6566 8.26712C17.9442 8.26712 18.233 8.31068 18.5101 8.40101C18.8979 7.9395 19.3829 7.64365 19.9365 7.63192C20.5191 7.58392 21.0367 7.68678 21.4347 7.98062C21.876 8.28947 22.2947 8.66239 22.6535 9.03284C22.5913 9.02219 23.4299 8.0193 23.4053 8.02057Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                    <a href="javascript:;">
                                        <svg width={31} height={30} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={30} height={30} rx={15} fill="#F2255B" />
                                            <path
                                                d="M19.1684 7.63435C19.3887 7.41563 19.3887 7.07095 19.1684 6.85223C18.9481 6.63351 18.6034 6.63351 18.3846 6.85223C17.9504 7.28642 17.2045 7.97398 17.2045 9.02134V10.2193H16.0858C15.9154 10.2193 15.7518 10.3032 15.6345 10.4428C15.5172 10.5824 15.4611 10.7552 15.4773 10.9267V13.3583C15.4611 13.5297 15.5172 13.7026 15.6345 13.8422C15.7518 13.9818 15.9154 14.0657 16.0858 14.0657H17.2045V16.6522H14.4023V14.0657H13.0194V13.3583C13.0194 13.1889 13.1142 13.0292 13.2631 12.9902C13.3662 12.9719 13.4728 12.9903 13.5647 13.0575C13.6565 13.1247 13.6699 13.2761 13.5908 13.3952C13.5174 13.5477 13.3469 13.6158 13.2111 13.4828C13.0405 13.3331 12.9031 13.0676 12.9031 12.7878V11.3137C12.9031 10.9677 13.2763 10.5956 13.6316 10.5936H17.2045V9.02134C17.2045 8.26712 17.9504 7.58046 18.3846 7.14627L19.1684 7.63435Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >

    )
}
