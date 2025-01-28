import React from "react";

const Blogs = () => {
    return (
        <>
            <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] ml-4 sm:ml-0">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full text-center mb-[60px] max-w-[510px] sm:max-w-full lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Global Trading Cars
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Global Car Export News & Updates
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                Stay up to date with the latest insights and trends in the used car export industry. From buying tips to financial advice, we've got you covered.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        <BlogCard
                            date="Jan 3, 2025"
                            CardTitle="Should You Buy A Used Car With Accident History?"
                            CardDescription="When searching for a used vehicle, it’s common to come across cars with an accident history. This article dives into the pros and cons of buying a car with an accident history, helping you make a more informed decision."
                            image="https://media.licdn.com/dms/image/D4E12AQF-JqVGeau4cA/article-cover_image-shrink_720_1280/0/1668071140800?e=2147483647&v=beta&t=IHaSxhglFTkTGGSHBgPlMtIocBUoGGr8rl1CEgp_PA0"
                        />
                        <BlogCard
                            date="Jan 5, 2025"
                            CardTitle="How To Finance A Used Car: A Comprehensive Guide"
                            CardDescription="Learn about the different ways to finance a used car, including loans, leasing, and other options that can make your car purchase easier on your wallet."
                            image="https://media.istockphoto.com/id/1414949812/photo/ar-business-concept.jpg?s=612x612&w=0&k=20&c=7_0trpMd8EE8Bydss3c9fVflKoY2abZR1yA9T0yKP98="
                        />
                        <BlogCard
                            date="Jan 7, 2025"
                            CardTitle="The Best Time of the Year to Buy a Used Car"
                            CardDescription="Timing is everything when it comes to buying a used car. Find out which months offer the best deals and how to take advantage of seasonal discounts."
                            image="https://www.exchangemycar.co.uk/blog/wp-content/uploads/2025/01/how-exchange-my-car-makes-car-selling-hassle-free.jpg"
                        />
                        <BlogCard
                            date="Jan 9, 2025"
                            CardTitle="Understanding Mileage: How Much Is Too Much For A Used Car?"
                            CardDescription="Mileage is one of the first things buyers consider when shopping for used cars. This article helps you understand how much mileage is acceptable and when it could be a red flag."
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu93Q8BCn5IlXjX5eY0iU4wudfHVvk8EMS7g&sg"
                        />
                        <BlogCard
                            date="Jan 12, 2025"
                            CardTitle="How to Check the History of a Used Car Before Buying"
                            CardDescription="Buying a used car requires careful inspection. Learn how to check the car's history, including accidents, ownership, and service records, to avoid hidden issues."
                            image="https://cdn.ihsmarkit.com/www/images/0723/rr-blog-image.jpg"
                        />
                        <BlogCard
                            date="Jan 15, 2025"
                            CardTitle="Is It Better To Buy A Used Car From a Dealership Or a Private Seller?"
                            CardDescription="Should you purchase from a dealership or a private seller? This guide compares both options, helping you decide which is better for your used car purchase."
                            image="https://cdn.create.vista.com/api/media/small/13432892/stock-photo-sellingg"
                        />
                        <BlogCard
                            date="Jan 18, 2025"
                            CardTitle="Top Features to Consider When Buying a Used Car"
                            CardDescription="When buying a used car, it’s crucial to know what features matter most. This article highlights the key features to look for in a pre-owned vehicle to get the best value."
                            image="https://di-uploads-pod27.dealerinspire.com/cbsqualitycars/uploads/2020/06/Used-Cars-For-Sale-Durham-NC-Couple-with-Kays.jpg"
                        />
                        <BlogCard
                            date="Jan 20, 2025"
                            CardTitle="Certified Pre-Owned Vs. Used Cars: What’s The Difference?"
                            CardDescription="Explore the differences between certified pre-owned and regular used cars to make an informed decision when purchasing your next vehicle."
                            image="https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/t6fBOIj1ysbvuLferymrGQt59WR99t1A4W4qRtqS.jpg"
                        />
                        <BlogCard
                            date="Jan 22, 2025"
                            CardTitle="How to Negotiate the Best Price on a Used Car"
                            CardDescription="Negotiating the price of a used car can be tricky. Here are some expert tips on how to negotiate the best price, whether you're buying from a dealership or a private seller."
                            image="https://images.saymedia-content.com/.image/t_share/MjAwMzE5OTI5MjQzNjczNzA4/training-a-rookie-car-salesman.jpg"
                        />
                        <BlogCard
                            date="Jan 22, 2025"
                            CardTitle="Top Negotiation Strategies When Buying a Used Car"
                            CardDescription="Buying a used car doesn’t have to be intimidating. Learn the top negotiation strategies that can help you secure the best price on your next vehicle, from understanding the market to timing your offer right."
                            image="https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2019/10/Suzuki-Alto-Pakistan-September-2019.jpg?fit=600%2C400&ssl=1"
                        />

                        <BlogCard
                            date="Jan 22, 2025"
                            CardTitle="How to Use Vehicle History Reports in Negotiations"
                            CardDescription="A vehicle history report can be a powerful tool in price negotiations. Learn how to use the report to uncover any potential issues and reduce the price, ensuring you make a fair deal."
                            image="https://bestsellingcarsblog.com/wp-content/uploads/2019/11/Suzuki-Alto-Pakistan-October-2019.jpg"
                        />

                        <BlogCard
                            date="Jan 22, 2025"
                            CardTitle="Understanding Market Value: How to Avoid Overpaying for a Used Car"
                            CardDescription="Knowing the market value of a used car can give you leverage during negotiations. This guide explains how to research pricing and avoid paying more than necessary."
                            image="https://allaboutcars.pk/wp-content/uploads/2021/11/Pak-Suzuki-Alto.jpg"
                        />

                    </div>

                    {/* View More Button */}
                    <div className="flex justify-center mt-10">
                        <button className="bg-red-800 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300">
                            View More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8">
            <div className="w-full">
                <div className="mb-8 overflow-hidden rounded">
                    <img
                        src={image}
                        alt={CardTitle}
                        className="w-full h-64 object-cover rounded-lg" // Ensuring the image covers its container properly
                    />
                </div>
                <div>
                    {date && (
                        <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                            {date}
                        </span>
                    )}
                    <h3>
                        <a
                            href="/#"
                            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                            {CardTitle}
                        </a>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">{CardDescription}</p>
                </div>
            </div>
        </div>
    );
};
