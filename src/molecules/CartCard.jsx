import { FaImage } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from "react";

const CartCard = () => {
    const imageUrl = "";
    const [number , setNumber] = useState(0)

    const handleMinusButton = () =>{
        if(number > 0){
            setNumber(number-1)
        }
    }

    const handlePlusButton = () =>{
        setNumber(number+1)
    }

    return (
        <div className="bg-color-view">
            <div className="flex justify-center pt-8">
                <div className="w-auto bg-slate-500 p-3 font-bold text-4xl mobile:text-3xl rounded-xl text-white">
                    <label htmlFor="">Cart</label>
                </div>
            </div>
            <div className="grid justify-center items-center mt-10 pb-28 mobile:pb-20 mobile:h-auto bg-color-view">
                <div className="w-[800px] mobile:w-[300px] bg-slate-700 rounded-2xl mobile:my-10  p-5 shadow-2xl shadow-black">
                    <div className="grid grid-cols-2 mobile:grid-cols-1 h-full">
                        <div className="flex justify-center items-center col-span-1">
                            {imageUrl ? (
                                <img src={imageUrl} className="w-52 h-40" alt="Product" />
                            ) : (
                                <div className="flex justify-center items-center w-60 h-52 rounded-lg bg-white">
                                    <FaImage className="text-gray-400 text-5xl" />
                                </div>
                            )}
                        </div>
                        <div className="grid items-center col-span-1 ">
                            <div className='mt-4 '><label htmlFor="" className='text-white text-xl font-bold underline '>Product name</label></div>
                            <div className='mt-2'><label htmlFor="" className='text-white text-xl font-bold '>0 $</label></div>
                            <div className='grid mt-4'>
                                <label className='text-white text-xl font-bold underline' htmlFor="">Content</label>
                                <label className='text-white' htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque temporibus unde dolor debitis dignissimos hic enim consequatur labore architecto ducimus adipisci cum eveniet at voluptatem deleniti, quam inventore officiis.</label>
                            </div>
                            <div className='grid mt-4'>
                                <label className='text-white text-xl font-bold underline ' htmlFor="">Description</label>
                                <label className='text-white' htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
                            </div>
                            <div className="flex ">
                                <button onClick={()=>{handleMinusButton()}}><FaSquareMinus className="text-red-600 mt-2 hover:text-red-800" /></button>
                                <label className="ml-3 mt-1 mr-3 font-bold text-white" htmlFor="">{number}</label>
                                <button onClick={()=>{handlePlusButton()}}><FaPlusSquare className="text-blue-600 mt-2 hover:text-blue-800"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard