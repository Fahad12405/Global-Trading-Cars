export const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
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
                        <span className="text-sm leading-loose">
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
