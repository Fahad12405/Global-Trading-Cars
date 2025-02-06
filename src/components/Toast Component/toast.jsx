import { useEffect, useState } from "react";

const Toast = ({ message, bgColor = "bg-red-500",  timeout }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, timeout || 5000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div
            className={`fixed bottom-5 left-5 px-4 py-2 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
                } ${bgColor}`}
        >
            {message}
        </div>
    );
};

export default Toast;