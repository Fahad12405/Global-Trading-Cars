import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing phone and map icons from react-icons

const SmallNavbar = () => {
    const [textWidth, setTextWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    
    useEffect(() => {
        const textElement = document.getElementById('scrolling-text');
        const containerElement = document.getElementById('scrolling-container');
        if (textElement && containerElement) {
            setTextWidth(textElement.scrollWidth);
            setContainerWidth(containerElement.clientWidth);
        }
    }, []);

    return (
        <div id="scrolling-container" className="w-full overflow-hidden bg-black py-0 mt-22 ">
            <div className="whitespace-nowrap flex text-white text-sm font-medium" 
                 style={{ animation: `scrollText ${textWidth / 20}s linear infinite` }}>
                
                <p id="scrolling-text" className="px-2 mr-20">
                    Delivery time may vary depending on circumstances.
                </p>
                {/* Phone icon with number */}
                <p className="px-2 mr-12 flex items-center">
                    <FaPhoneAlt className="mr-2" /> {/* Phone icon */}
                    08 041074210 {/* Replace with your phone number */}
                </p>
                {/* Address icon with address */}
                <p className="px-2 flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> {/* Map marker icon */}
                    Saitama, Higashimatsuyama, Higashidaira 1277, Japan{/* Replace with your address */}
                </p>
            </div>
            
            <style>
                {`
                @keyframes scrollText {
                    from { transform: translateX(100%); }
                    to { transform: translateX(-100%); }
                }
                `}
            </style>
        </div>
    );
};

export default SmallNavbar;
