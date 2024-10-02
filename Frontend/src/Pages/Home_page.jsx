import { NavBar } from '../Components/NavBar';
import { FaPersonRunning } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export const Home_page = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl font-bold text-[#3A5A40] text-center mb-2">
                    Sell Your Ticket, Let Someone Else Enjoy the Ride!
                </h1>
                <p className="text-lg text-[#588157] mb-6">
                    With ReTix, it's Easy.
                </p>
            </div>
            <div className="flex flex-col items-center mt-8">
                <div className="flex items-center mb-4">
                    <FaPersonRunning className="text-[#3A5A40] w-2" />
                    <FaTrainSubway className="text-[#3A5A40] mr-2" />

                    <input
                        type="text"
                        placeholder='From'
                        className="border border-[#8F9C7A] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#588157] w-64"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <FaTrainSubway className="text-[#3A5A40]" />
                    <FaPersonRunning className="text-[#3A5A40] mr-2 w-2" />

                    <input
                        type="text"
                        placeholder='To'
                        className="border border-[#8F9C7A] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#588157] w-64"
                    />
                </div>
                <div className="flex items-center mb-6">
                    <SlCalender className="text-[#3A5A40] mr-2 w-6" />
                    <input
                        type="date"
                        className="border border-[#8F9C7A] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#588157] w-64"
                    />
                </div>
                <button className="bg-[#8F9C7A] text-[#DAD7CD] font-semibold py-2 px-6 rounded hover:bg-[#588157] transition-colors duration-200">
                    SEARCH
                </button>
            </div>
        </>
    );
};
