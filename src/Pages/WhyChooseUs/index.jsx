import { whyChooseUsData } from "../../../constant/constant";
import WhyChoose from '../../components/WhyChooseUs/index'
import ContactUs from '../../components/Contact/contact';

export default function WhyChooseUs() {
    return (
        <div className="py-18" >
            <h1 className="text-center text-7xl font-bold italic py-7" >Why Choose Us</h1>

            {whyChooseUsData.map((data, index) => (
                <div key={index} className={`container mx-auto flex justify-center items-center gap-10 ${index % 2 === 0 ? "flex" : "flex-row-reverse"}`}>
                    <div className="h-[400px] w-[800px]">
                        <img src={data.imageSrc} alt="Why Choose Us" className="h-full w-full" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-semibold text-red-600">{data.title}</h1>
                        <p className="text-2xl mt-1">{data.desc}</p>
                    </div>
                </div>
            ))}
            <div className="mt-12">
                <WhyChoose />
            </div>
            <ContactUs />
        </div>
    );
}
