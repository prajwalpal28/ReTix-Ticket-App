import React from 'react';
import { FaTicketAlt, FaMoneyBillAlt, FaRegCreditCard, FaHeadset, FaRedoAlt, FaTrain } from 'react-icons/fa'; // Importing icons

const FeaturesSection = () => {
    return (
        <div className="bg-white py-10 px-6">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
                Why Book Train Tickets on <span className='text-[#3A5A40]'>ReTix</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <Feature
                    icon={<FaTicketAlt className="text-green-500 text-2xl" />}
                    title="Get Train Tickets"
                    description="With our same train alternates and prediction feature, increase your chances of getting confirmed train tickets."
                />

                {/* Feature 2 */}
                <Feature
                    icon={<FaRegCreditCard className="text-green-500 text-2xl" />}
                    title="UPI Enabled Secured Payment"
                    description="Payment on our site is highly secure. Easy UPI and other multiple payment modes available."
                />

                {/* Feature 3 */}
                <Feature
                    icon={<FaMoneyBillAlt className="text-green-500 text-2xl" />}
                    title="Free Cancellation on Train Tickets"
                    description="Get a full refund on train tickets by opting for our free cancellation feature."
                />

                {/* Feature 4 */}
                <Feature
                    icon={<FaHeadset className="text-green-500 text-2xl" />}
                    title="Train Booking & Enquiry Support"
                    description="24X7 customer support for any train enquiry & booking-related queries."
                />

                {/* Feature 5 */}
                <Feature
                    icon={<FaRedoAlt className="text-green-500 text-2xl" />}
                    title="Instant Refund & Cancellation"
                    description="Get an instant refund and book your next train ticket easily."
                />

                {/* Feature 6 */}
                <Feature
                    icon={<FaTrain className="text-green-500 text-2xl" />}
                    title="Live Train Status Tracking"
                    description="Track train status & get notifications for your booked tickets."
                />
            </div>
        </div>
    );
};

// Feature Component
const Feature = ({ icon, title, description }) => {
    return (
        <div className="flex items-start">
            <div className="bg-green-100 p-4 rounded-full">
                {icon}
            </div>
            <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeaturesSection;
