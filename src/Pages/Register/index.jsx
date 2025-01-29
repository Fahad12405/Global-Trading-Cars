import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [apiError, setApiError] = useState('');

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
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.country) validationErrors.country = 'Country is required';

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
      const response = await axios.post('https://api-car-export.vercel.app/api/auth/signup', formData);
      //sweetalert HERE

      
    } catch (error) {
      setApiError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen mt-12">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740836.png"
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="login-image"
          />
        </div>
        <div className="flex items-center md:p-8 p-6 bg-[#210000] h-full lg:w-11/12 lg:ml-auto">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white">Create an account</h3>
            </div>

            {/* Full Name */}
            <div>
              <label className="text-white text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter name"
                />
                {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
              </div>
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

            {/* Country */}
            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Country</label>
              <div className="relative flex items-center">
                <input
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter Country"
                />
                {errors.country && <span className="text-red-400 text-xs">{errors.country}</span>}
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="flex items-center mt-8">
              <input
                id="remember-me"
                name="acceptTerms"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded"
              />
              <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                I accept the{" "}
                <a href="javascript:void(0);" className="text-red-300 font-semibold hover:underline ml-1">
                  Terms and Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded bg-white cursor-pointer"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
              <p className="text-sm text-white mt-8">
                Already have an account?{" "}
                <a href="/LogIn" className="text-white font-semibold hover:underline ml-1">
                  Login here
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
