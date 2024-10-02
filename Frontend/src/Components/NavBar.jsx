import Logo from '../assets/Logo.png';
import { IoMdAdd } from "react-icons/io";
import { TbLogin2 } from "react-icons/tb";

export const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-4 bg-[#DAD7CD] shadow-md sm:px-6 lg:px-8">
            {/* Left Section: Logo and Brand Name */}
            <div className="flex items-center space-x-2">
                <img className="w-10 sm:w-12" src={Logo} alt="Logo" />
                <span className="text-xl sm:text-2xl font-bold text-[#3A5A40]">ReTix</span>
            </div>

            {/* Right Section: Buttons */}
            <div className="flex space-x-2 sm:space-x-4">
                <button className="flex items-center bg-[#8F9C7A] text-[#DAD7CD] font-semibold py-1 px-3 sm:py-1.5 sm:px-4 rounded hover:bg-[#588157] transition-colors duration-200">
                    <IoMdAdd className="mr-1" />
                    Add Ticket
                </button>

                <button className="flex items-center bg-[#8F9C7A] text-[#DAD7CD] font-semibold py-1 px-3 sm:py-1.5 sm:px-4 rounded hover:bg-[#588157] transition-colors duration-200">
                    <TbLogin2 className="mr-1" />
                    Login
                </button>
            </div>
        </nav>
    );
};
