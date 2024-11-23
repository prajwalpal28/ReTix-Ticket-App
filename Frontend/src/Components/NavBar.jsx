import Logo from '../assets/Logo.png';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IoMdAdd } from "react-icons/io";
import { TbLogin2 } from "react-icons/tb";
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-md sm:px-6 lg:px-8">
            {/* Left Section: Logo and Brand Name */}
            <Link to='/'>
                <div className="flex items-center space-x-2">
                    <img className="w-10 sm:w-12" src={Logo} alt="Logo" />
                    <span className="text-xl sm:text-2xl font-bold text-[#3A5A40]">ReTix</span>
                </div>
            </Link>


            {/* Right Section: Buttons */}
            <div className='flex space-x-2 sm:space-x-4'>
                <div className="flex space-x-2 sm:space-x-4 mt-1">
                    <Link to='/addTicket'>
                        <button className="flex items-center bg-[#8F9C7A] text-[#DAD7CD] font-semibold py-1 px-3 sm:py-1.5 sm:px-4 rounded hover:bg-[#588157] transition-colors duration-200 cursor-pointer" >
                            <IoMdAdd className="mr-1" />
                            Add Ticket
                        </button>
                    </Link>

                    <Link to='/loginPage'>
                        <button className="flex items-center bg-[#8F9C7A] text-[#DAD7CD] font-semibold py-1 px-3 sm:py-1.5 sm:px-4 rounded hover:bg-[#588157] transition-colors duration-200 cursor-pointer">
                            <TbLogin2 className="mr-1" />
                            Login
                        </button>
                    </Link>
                </div>

                <div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <div className="relative inline-flex items-center cursor-pointer">
                                <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                                    <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-[#8F9C7A] text-[15px] font-medium">
                                        PP
                                    </Avatar.Fallback>
                                </Avatar.Root>
                            </div>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                                <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Profile
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Booking
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Wallet
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Log Out
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </div>
            </div>
        </nav>
    );
};
