import React from "react"
import { RiDeleteBin6Line } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
            <header className="relative bg-white dark-after-absolute shadow-sm">
                <div className="mx-auto lg:px-8 max-w-7xl py-2">
                    {/* mobile icons */}
                    <div className="absolute inset-y-0 left-0 items-center sm:hidden">
                        <button type="button" >
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </button>
                    </div>

                    <div className="flex justify-between max-lg:px-4">
                        <div className="main-menu flex">
                            <div className="logo flex shrink-0 items-center">
                                <a href="#" className="text-[#6129c3] text-xl font-bold">
                                    Logo
                                </a>
                            </div>

                        </div>


                        <nav className="flex items-center">
                            <ul className="flex space-x-2">
                                <li><a href="#" className="font-medium text-gray-800 text-md">Home</a></li>
                                {/* <li><a href="#" className="font-medium text-gray-800 text-md px-3">Blog</a></li> */}

                            </ul>
                        </nav>
                    </div>
                </div>



            </header>


        </>
    )


}

export default Navbar;
