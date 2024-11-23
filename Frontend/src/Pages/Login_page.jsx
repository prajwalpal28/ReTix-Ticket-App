import React from 'react'
import Logo from '../assets/Logo.png';
import { FaGoogle } from "react-icons/fa6";

export const Login_page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        {/* Logo Section */}
        <div className="text-center mb-4">
          <img
            src={Logo} alt="Logo"
            className="mx-auto h-12"
          />
          <h2 className="text-lg font-semibold mt-2">LOG IN/SIGN UP</h2>
        </div>

        {/* Instructions */}
        <p className="text-sm text-gray-600 mb-4 text-center">
          Your tickets will be sent to the below Mobile number
        </p>

        {/* Mobile Number Input */}
        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your Mobile Number
          </label>
          <div className="flex items-center mt-2">
            <span className="px-2 py-2 bg-gray-100 border border-gray-300 rounded-l-md text-gray-600">
              +91
            </span>
            <input
              id="mobileNumber"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your number"
            />
          </div>
        </div>

        {/* Generate OTP Button */}
        <button className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none">
          GENERATE OTP (ONE TIME PASSWORD)
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign-In */}
        <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:outline-none">
          <img
            src={FaGoogle}
            alt="Google Logo"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
