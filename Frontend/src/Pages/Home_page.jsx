import { NavBar } from '../Components/NavBar';
import { TrainSearch } from '../Components/TrainSearch';
import train from "../assets/train.jpg";

export const Home_page = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${train})` }}>
            {/* Overlay to darken the background for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00000080]"></div>

            {/* Navigation Bar */}
            <NavBar />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center mt-10 text-center px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                    Sell Your Ticket, Let Someone Else Enjoy the Ride!
                </h1>
                <p className="text-lg md:text-2xl text-[#DAD7CD] mb-8">
                    With ReTix, it's Easy.
                </p>

                {/* Train Search Component */}
                <div className="w-full flex justify-center">
                    <TrainSearch />
                </div>
            </div>
        </div>
    );
};
