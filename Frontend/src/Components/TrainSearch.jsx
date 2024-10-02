import React, { useState } from 'react';
import { FaPersonRunning } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";

export const TrainSearch = () => {

    return (
        <div className="w-full flex justify-center items-center py-8">
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full max-w-5xl border">
                {/* From Input */}
                <div className="flex items-center space-x-2 w-full md:w-auto px-4">
                    <FaTrainSubway className="text-[#3A5A40] w-6 h-6" />
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500">From</label>
                        <input
                            type="text"
                            placeholder="PUNE - Pune Junction"
                            className="font-semibold text-gray-800 border-none focus:outline-none"
                        />
                    </div>
                </div>

                {/* Arrow Icon */}
                <div className="px-4">
                    <FiArrowRight className="text-gray-400 w-6 h-6" />
                </div>

                {/* To Input */}
                <div className="flex items-center space-x-2 w-full md:w-auto px-4">
                    <FaTrainSubway className="text-[#3A5A40] w-6 h-6" />
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500">To</label>
                        <input
                            type="text"
                            placeholder="NGP - Nagpur Junction"
                            className="font-semibold text-gray-800 border-none focus:outline-none"
                        />
                    </div>
                </div>

                {/* Date Picker */}
                <div className="flex items-center space-x-2 w-full md:w-auto px-4">
                    <SlCalender className="text-[#3A5A40] w-6 h-6" />
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500">Departure Date</label>
                        <input
                            type="date"
                            className="font-semibold text-gray-800 border-none focus:outline-none"
                        />
                    </div>
                </div>

                {/* Search Button */}
                <button className="bg-[#588157] text-white font-semibold py-2 px-8 rounded-lg hover:bg-[#3A5A40] transition-colors duration-200 ml-4">
                    SEARCH
                </button>
            </div>
        </div>
    )
}
