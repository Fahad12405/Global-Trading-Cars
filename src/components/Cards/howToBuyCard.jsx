export default function HowToBuyCard({ title, steps }) {
    return (
        <div className="relative p-5 border-2 border-red-500 rounded-lg">
            <div className="absolute -top-3 left-5 bg-white px-3">
                <h2 className="text-red-600 font-bold text-lg italic">{title}</h2>
            </div>

            <div className="grid grid-cols-3 gap-5 text-center">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={step.image} alt={step.heading} className="w-32 h-32" />
                        <h3 className="font-bold mt-2">{step.heading}</h3>
                        <p className="text-sm">{step.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
