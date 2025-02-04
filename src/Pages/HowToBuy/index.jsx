import HowToBuyCard from "../../components/Cards/howToBuyCard";
import { howToBuyData } from "../../../constant/constant";

export default function HowToBuy() {
    return (
        <div className="max-w-7xl mx-auto px-2 mt-28">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-red-700 mb-8 uppercase">
                Payment Details
            </h1>

            <div className="w-full flex flex-col items-center px-4 md:px-12 lg:px-48 py-6">
                <h2 className="text-3xl font-bold text-center text-red-700 mb-6 uppercase tracking-wide">
                    Payment Details
                </h2>

                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse border border-red-700 shadow-lg">
                        <tbody>
                            <tr className="bg-red-100">
                                <td className="border border-red-700 px-4 py-2 font-semibold">Payment Method</td>
                                <td className="border border-red-700 px-4 py-2">Telegraphic Transfer</td>
                            </tr>
                            <tr>
                                <td className="border border-red-700 px-4 py-2 font-semibold">Bank Name</td>
                                <td className="border border-red-700 px-4 py-2">SBI SUMISHIN NET BANK, LTD. TOKYO</td>
                            </tr>
                            <tr className="bg-red-100">
                                <td className="border border-red-700 px-4 py-2 font-semibold">Branch Address</td>
                                <td className="border border-red-700 px-4 py-2">
                                    Sumitomo Fudosan Roppongi Grand Tower, 2-1, Roppongi 3-chome, Minato-ku, Tokyo, Japan.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-red-700 px-4 py-2 font-semibold">SWIFT / BIC CODE</td>
                                <td className="border border-red-700 px-4 py-2">NTSSJPJT</td>
                            </tr>
                            <tr className="bg-red-100">
                                <td className="border border-red-700 px-4 py-2 font-semibold">Branch Code</td>
                                <td className="border border-red-700 px-4 py-2">106</td>
                            </tr>
                            <tr>
                                <td className="border border-red-700 px-4 py-2 font-semibold">Account (REGULAR)</td>
                                <td className="border border-red-700 px-4 py-2">2539709</td>
                            </tr>
                            <tr className="bg-red-100">
                                <td className="border border-red-700 px-4 py-2 font-semibold">Title</td>
                                <td className="border border-red-700 px-4 py-2">GTC LLC</td>
                            </tr>
                            <tr>
                                <td className="border border-red-700 px-4 py-2 font-semibold">Intermediary Bank</td>
                                <td className="border border-red-700 px-4 py-2">
                                    DEUTSCHE BANK TRUST COMPANY AMERICAS (SWIFT BIC: BKTRUS33) <br />
                                    OR <br />
                                    JPMORGAN CHASE BANK, TOKYO (SWIFT BIC: CHASJPJT)
                                </td>
                            </tr>
                            <tr className="bg-red-100">
                                <td className="border border-red-700 px-4 py-2 font-semibold">Contact</td>
                                <td className="border border-red-700 px-4 py-2">080 4107 4210</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {howToBuyData.map((data, index) => (
                <HowToBuyCard key={index} title={data.title} steps={data.steps} />

            ))}



        </div>
    );
}
