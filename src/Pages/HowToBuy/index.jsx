import HowToBuyCard from "../../components/Cards/howToBuyCard";
import { howToBuyData } from "../../../constant/constant";
import FAQ from '../../components/FAQ/FAQ'

export default function HowToBuy() {
    return (
        <div className="max-w-7xl mx-auto px-2 mt-28">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-red-700 mb-8 uppercase">
                Payment Details
            </h1>



            {howToBuyData.map((data, index) => (
                <HowToBuyCard key={index} title={data.title} steps={data.steps} />

            ))}

            <FAQ />

        </div>
    );
}
