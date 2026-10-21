import React from "react";
import { RiResetLeftLine } from "react-icons/ri";
import { LiaCreativeCommonsShare } from "react-icons/lia";
import { MdOutlineInbox } from "react-icons/md";
import { MdMoreTime } from "react-icons/md";





const AboutUs = () => {
    return (
        <>
            <div className="customBg max-md:px-4">
                <div className="w-full mx-auto max-w-3xl">
                    <div className="relative w-full max-w-7xl mx-auto py-10">
                        <h2 className="common_heading">What Is a Japa Counter?</h2>
                        <p className="pt-2 text-justify"><b>Counter App:</b> A React-based counting application that allows users to track individual counts and completed cycles. It automatically increments the counter, manages maximum-count completion, maintains a separate cycle/mala counter, and provides a confirmation-based reset functionality.
                        </p>
                        <p className="pt-4 text-justify">
                            It also tracks completed malas/cycles and handles maximum-count completion smoothly. With a confirmation-based reset, you can start a new session confidently while keeping your counting experience simple and reliable.
                        </p>
                    </div>



                    <div className="relative">

                        <div className="max-w-7xl mx-auto pb-12">
                            <h2 className="common_heading mb-4">Key Feature</h2>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                                <div className="feature_box group flex-1 shadow-xl p-5 rounded-md bg-white border-b-3 border-solid border-[#6129c3] hover:bg-[#6129c3] duration-300 ease-in-out hover:-translate-y-1">
                                    <div className="h-10 w-10 mb-2 rounded-md flex items-center justify-center border-1 border-solid border-[#e4d5ff] bg-[#f7edff] transition-transform duration-400 group-hover:rotate-360"><LiaCreativeCommonsShare /></div>
                                    <h3 className="common_sub_heading text-[#320058] group-hover:text-white">Interactive UI</h3>
                                    <p className="group-hover:text-white">The displayed values update automatically whenever the state changes.</p>
                                </div>

                                <div className="feature_box group flex-1 shadow-xl p-5 rounded-md bg-white border-b-3 border-solid border-[#6129c3] hover:bg-[#6129c3] duration-300 ease-in-out hover:-translate-y-1">
                                    <div className="h-10 w-10 mb-2 rounded-md flex items-center justify-center border-1 border-solid border-[#e4d5ff] bg-[#f7edff] transition-transform duration-400 group-hover:rotate-360"><MdMoreTime />
                                    </div>
                                    <h3 className="common_sub_heading text-[#320058] group-hover:text-white">Maximum Value</h3>
                                    <p className="group-hover:text-white">When the counter reaches the defined maxValue, the current count automatically resets to 0</p>
                                </div>

                                <div className="feature_box group flex-1 shadow-xl p-5 rounded-md bg-white border-b-3 border-solid border-[#6129c3] hover:bg-[#6129c3] duration-300 ease-in-out hover:-translate-y-1">
                                    <div className="h-10 w-10 mb-2 rounded-md flex items-center justify-center border-1 border-solid border-[#e4d5ff] bg-[#f7edff] transition-transform duration-400 group-hover:rotate-360"><RiResetLeftLine /></div>
                                    <h3 className="common_sub_heading text-[#320058] group-hover:text-white">Reset Functionality</h3>
                                    <p className="group-hover:text-white">Users can reset both the current count and completed mala count.</p>
                                </div>

                                <div className="feature_box group flex-1 shadow-xl p-5 rounded-md bg-white border-b-3 border-solid border-[#6129c3] hover:bg-[#6129c3] duration-300 ease-in-out hover:-translate-y-1">
                                    <div className="h-10 w-10 mb-2 rounded-md flex items-center justify-center border-1 border-solid border-[#e4d5ff] bg-[#f7edff] transition-transform duration-400 group-hover:rotate-360"><MdOutlineInbox />
                                    </div>
                                    <h3 className="common_sub_heading text-[#320058] group-hover:text-white">Confirmation Dialog</h3>
                                    <p className="group-hover:text-white">Before resetting the progress, the app displays a clear confirmation dialog that allows users to either confirm the reset or cancel the action.</p>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs;