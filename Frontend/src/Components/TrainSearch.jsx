import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import { FaPersonRunning, FaTrainSubway } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export const TrainSearch = () => {
    // State variables for inputs
    const [inputFrom, setInputFrom] = useState('');
    const [inputTo, setInputTo] = useState('');
    const [date, setDate] = useState('');
    const [trainResults, setTrainResults] = useState([]);

    // Function to handle input changes
    const handleFromChange = (value) => {
        setInputFrom(value);
    };

    const handleToChange = (value) => {
        setInputTo(value);
    };

    // Function to call API
    const handleSearch = async () => {
        const options = {
            method: 'GET',
            url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
            params: { query: inputFrom },  // Using the "From" station code
            headers: {
                'x-rapidapi-key': '76a688d63fmsh5c2656171fd0fe5p141e0ejsn4a9aefdd8813',
                'x-rapidapi-host': 'irctc1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data); // You can update the state here to display results
            setTrainResults(response.data); // Assuming response contains train results
        } catch (error) {
            console.error('Error fetching train data:', error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            {/* From Input */}
            <div className="flex items-center mb-4">
                <FaPersonRunning className="text-[#3A5A40] mr-2" />
                <input
                    type="text"
                    placeholder='From'
                    value={inputFrom}
                    onChange={(e) => handleFromChange(e.target.value)}
                    className="border border-[#8F9C7A] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#588157] w-64"
                />
            </div>

            {/* To Input */}
            <div className="flex items-center mb-4">
                <FaTrainSubway className="text-[#3A5A40] mr-2" />
                <input
                    type="text"
                    placeholder='To'
                    value={inputTo}
                    onChange={(e) => handleToChange(e.target.value)}
                    className="border border-[#8F9C7A] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#588157] w-64"
                />
            </div>

            {/* Date Input */}
            <div className="flex items-center mb-6">
                <SlCalender className="text-[#3A5A40] mr-2" />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-[#8F9C7A] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#588157] w-64"
                />
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}  // Trigger search on button click
                className="bg-[#8F9C7A] text-[#DAD7CD] font-semibold py-2 px-6 rounded hover:bg-[#588157] transition-colors duration-200"
            >
                Search Available Tickets 
            </button>

            {/* Display Train Results */}
            <div className="mt-6">
                {trainResults.length > 0 ? (
                    trainResults.map((train, index) => (
                        <div key={index} className="border p-4 mb-2 rounded bg-[#f5f5f5]">
                            <h3>{train.stationName} - {train.stationCode}</h3>
                        </div>
                    ))
                ) : (
                    <p>No stations found</p>
                )}
            </div>
        </div>
    );
};
