import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

// Inside your component function:


export default function LogIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [apiError, setApiError] = useState('');
    const navigate = useNavigate(); // Initialize navigate


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        setSuccessMessage('');
        setApiError('');

        const validationErrors = {};
        if (!formData.email) validationErrors.email = 'Email is required';
        if (!formData.password) validationErrors.password = 'Password is required';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            validationErrors.email = 'Please enter a valid email';
        }

        if (formData.password && formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }
        try {
            const response = await axios.post('https://api-car-export.vercel.app/api/auth/login', formData);
            console.log(response); // Check if the response is successful
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Log In successfully!',
                    text: 'Welcome To Our Website!',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/'); // Use navigate in v6+
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Show SweetAlert for error message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
                confirmButtonText: 'OK'
            });
            setApiError('Something went wrong. Please try again later.');
        }

    };

    return (
        <div className="font-[sans-serif] bg-white md:h-screen mt-20">
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                <div className="max-md:hidden p-4"> {/* This will hide the image on mobile */}
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--select-an-account-join-the-forum-password-digital-marketing-pack-business-illustrations-8333958.png"
                        className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
                        alt="login-image"
                    />
                </div>
                <div className="flex items-center md:p-12 p-6 bg-[#3b0202] h-full lg:w-11/12 lg:ml-auto ">
                    <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto mb-16">
                        <div className="mb-20">
                            <h3 className="text-4xl font-bold text-white">Log In</h3>
                        </div>

                        {/* Email */}
                        <div className="mt-8">
                            <label className="text-white text-xs block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter email"
                                />
                                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mt-8">
                            <label className="text-white text-xs block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter password"
                                />
                                {errors.password && <span className="text-red-400 text-xs">{errors.password}</span>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded bg-white cursor-pointer"
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                            <p className="text-sm text-white mt-8">
                                Don't have an account?{" "}
                                <a href="/Register" className="text-white font-semibold hover:underline ml-1">
                                    Register here
                                </a>
                            </p>
                        </div>

                        {/* Success or error message */}
                        {successMessage && <p className="text-green-400 mt-4">{successMessage}</p>}
                        {apiError && <p className="text-red-400 mt-4">{apiError}</p>}
                    </form>
                </div>
            </div>
        </div>

    );
}
