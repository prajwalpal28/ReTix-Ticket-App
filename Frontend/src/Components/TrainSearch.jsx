import React from 'react';
import { FaTrainSubway } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";

export const TrainSearch = () => {

    return (
        <div className="w-full flex justify-center items-center py-8 px-4">
            <div className="flex flex-wrap items-center bg-white shadow-md rounded-lg p-4 w-full max-w-5xl border">

                {/* From Input */}
                <div className="flex items-center space-x-2 w-full md:w-auto px-4 mb-4 md:mb-0">
                    <FaTrainSubway className="text-[#3A5A40] w-6 h-6" />
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="From"
                            className="font-semibold text-gray-800 border-none focus:outline-none w-full"
                        />
                    </div>
                </div>

                {/* Arrow Icon */}
                <div className="px-4 hidden md:block">
                    <FiArrowRight className="text-gray-400 w-6 h-6" />
                </div>

                {/* To Input */}
                <div className="flex items-center space-x-2 w-full md:w-auto px-4 mb-4 md:mb-0">
                    <FaTrainSubway className="text-[#3A5A40] w-6 h-6" />
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="To"
                            className="font-semibold text-gray-800 border-none focus:outline-none w-full"
                        />
                    </div>
                </div>

                {/* Date Picker */}
                <div className="flex items-center space-x-2 w-full md:w-auto px-4 mb-4 md:mb-0">
                    <SlCalender className="text-[#3A5A40] w-6 h-6" />
                    <div className="flex flex-col">
                        <input
                            type="date"
                            className="font-semibold text-gray-800 border-none focus:outline-none w-full"
                        />
                    </div>
                </div>

                {/* Search Button */}
                <div className="w-full md:w-auto flex justify-center md:justify-end px-4">
                    <button className="bg-[#588157] text-white font-semibold py-2 px-8 rounded-lg hover:bg-[#3A5A40] transition-colors duration-200 w-full md:w-auto">
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    )
}
