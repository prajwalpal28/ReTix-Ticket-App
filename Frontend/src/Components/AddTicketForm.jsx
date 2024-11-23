import React, { useState } from "react";

const AddTicketForm = () => {
    const [formData, setFormData] = useState({
        pnr: "",
        from: "",
        to: "",
        date: "",
        quantity: 1,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ticket Details Submitted:", formData);
        // Add further actions such as API calls here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                {/* Header */}
                <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
                    Add Your Ticket Details
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* PNR Number */}
                    <div className="mb-4">
                        <label htmlFor="pnr" className="block text-sm font-medium text-gray-700">
                            PNR Number
                        </label>
                        <div className="flex items-center space-x-2">
                            {/* PNR Input */}
                            <input
                                type="text"
                                id="pnr"
                                name="pnr"
                                value={formData.pnr}
                                onChange={handleChange}
                                className="flex-1 px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                                placeholder="Enter your PNR number"
                                required
                            />
                            {/* Verify Button */}
                            <button
                                type="button"
                                className="mt-1 px-4 py-2 bg-green-500 text-white font-medium text-sm rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                onClick={() => handleVerifyPNR(formData.pnr)}
                            >
                                Verify
                            </button>
                        </div>
                    </div>


                    {/* From and To */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                                From
                            </label>
                            <input
                                type="text"
                                id="from"
                                name="from"
                                value={formData.from}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                                placeholder="Starting point"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                                To
                            </label>
                            <input
                                type="text"
                                id="to"
                                name="to"
                                value={formData.to}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                                placeholder="Destination"
                                required
                            />
                        </div>
                    </div>

                    {/* Date */}
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Quantity */}
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            max="10"
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                    >
                        Add Ticket
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTicketForm;
