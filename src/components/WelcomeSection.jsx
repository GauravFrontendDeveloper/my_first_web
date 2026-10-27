
import React, { useState } from "react";
import { FaPrayingHands } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";




const WelcomeSection = () => {
    // const [isOpen, setIsOpen] = useState(false);

    const [count, setCount] = useState(0);
    const [malaCount, SetMalaCount] = useState(0)
    const maxValue = 108;

    const totalCount = (malaCount * maxValue) + count

    // my code 
    // const additionHandle = () => {
    //     if (count < maxValue) {
    //         setCount(count + 1)
    //     } 
    //     else {
    //         setCount(0)
    //     }
    // }


    // updated code 
    const additionHandle = () => {
        if(count < maxValue){
            setCount(count + 1)
        }else{
            setCount(0)
            SetMalaCount(malaCount + 1)
        }
    }



    const resetHandle = () => {
        // alert('Reset all progress?')
        
        const hasConfirm = window.confirm("Are you sure you want to delete this?")
        if(hasConfirm){
            console.log("Reset all progress")
            setCount(0)
            SetMalaCount(0)
        }else{
            console.log("Cancel")
        }

    }


    





    return (
        <>
            <div id="counterBg" className="py-[5rem]">
                <div id="mainCounter" className="bg-white p-5 max-w-md mx-auto rounded-xl shadow-lg">
                    <h2 className="common_heading text-center py-2">Japa Counter</h2>

                    <div className="main_counter flex justify-center items-center py-3 gap-5">

                        <div className="rounded-lg border-1 border-solid border-[#f8f4ff]-20 w-20 flex-col justify-center items-center text-center bg-[#f8f4ff] py-1">
                            <p className="text-xs text-[#6129c3] font-semibold">Malas</p>
                            <p className="mb-0">{malaCount}</p>
                        </div>

                        <div className="font-bold text-6xl text-center mx-auto text-[#6129c3] border-3 border-solid border-[#6129c3]-200 w-1/4 aspect-square rounded-full flex items-center justify-center shadow-xl">    
                        <p className="text-4xl">{count}</p>
                        </div>


                        <div className="rounded-lg border-1 border-solid border-[#f8f4ff]-20 w-20 flex-col justify-center items-center text-center bg-[#f8f4ff] py-1">
                            <p className="text-xs text-[#6129c3] font-semibold">Total</p>
                            <p className="mb-0">{totalCount}</p>
                        </div>


                    </div>

                    <div className="">
                        <button onClick={additionHandle} className="cursor-pointer rounded-xl bg-linear-to-r from-indigo-500 to-blue-500 hover:bg-linear-to-l from-blue-500 to-indigo-800 text-white px-6 py-2 d-block w-full h-25 text-center uppercase font-bold transition duration-200 active:scale-95">
                            <span id="counterClick"><FaPrayingHands /></span>
                            Tap to Count</button>

                    </div>

                    <div className="flex place-content-between">
                        <button onClick={resetHandle} id="resetNum" className="cursor-pointer text-red-800 p-2 text-sm"> <span><RiDeleteBin6Line />
                        </span>Reset</button>

                        <button className="text-xs text-gray-800 px-2 uppercase">Autosave</button>
                    </div>


                </div>


            </div>


            {/* modal btn */}
            {/* <div className="mx-auto flex items-center justify-center py-5">
                <button onClick={() => setIsOpen(true)} className="text-center bg-purple-900 text-white cursor-pointer px-6 py-2 rounded-md">Check your previous Jaap</button>
            </div> */}

            {/* modal section */}
            {/* {isOpen && (
                <div className="fixed inset-0 bg-indigo-50">

                    <div className="min-h-full flex items-center justify-center">
                        <div className="p-5 mx-auto border-indigo rounded-md bg-white sm:max-w-lg sm-w-full relative">
                            <span onClick={() => setIsOpen(false)} className="cursor-pointer absolute -top-2 -right-2 bg-purple-800 rounded-full w-6 h-6 text-white text-center">&times;</span>

                            <h3 className="text-2xl font-semibold mb-2">This is Modal header</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eveniet maiores cum cumque facere facilis animi, necessitatibus voluptas excepturi quasi esse exercitationem vero, atque mollitia tempora quae. In, laboriosam atque.</p>
                            <button className="cursor-pointer px-6 py-2 rounded-md bg-red-800 text-white inset-s-0 top-0 mt-3" type="button" onClick={() => setIsOpen(false)} >Cancel</button>
                        </div>

                    </div>
                </div>
            )} */}


        </>
    )
}

export default WelcomeSection;