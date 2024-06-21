
import { FaImage } from "react-icons/fa";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from '../../src/App'

const ViewCard = () => {
    const params = useParams();
    const state = useContext(GlobalState)
    const [products] = state.productAPI.products
    const [detailProduct, setDetailProduct] = useState(null)

    useEffect(() => {
        if (params.id) {
            const product = products.find(product => product._id === params.id);
            if (product) {
                setDetailProduct(product);
            }
        }
    }, [products, params.id]);

    console.log(detailProduct);

    const imageUrl = detailProduct?.images || "";

    return (
        <div className="bg-color-view">
            <div>
                <div className="flex justify-center pt-8">
                    <div className="w-auto bg-slate-500 p-3 font-bold text-4xl mobile:text-3xl rounded-xl text-white">
                        <label htmlFor="">View Item</label>
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
                                <div className='mt-4 '><label htmlFor="" className='text-white text-xl font-bold underline '>{detailProduct?.productName}</label></div>
                                <div className='mt-2'><label htmlFor="" className='text-white text-xl font-bold '>Rs. {detailProduct?.price}</label></div>
                                <div className='grid mt-4'>
                                    <label className='text-white text-xl font-bold underline' htmlFor="">Content</label>
                                    <label className='text-white' htmlFor="">{detailProduct?.content}</label>
                                </div>
                                <div className='grid mt-4'>
                                    <label className='text-white text-xl font-bold underline ' htmlFor="">Description</label>
                                    <label className='text-white' htmlFor="">{detailProduct?.description}</label>
                                </div>
                                <div className='grid mt-4'>
                                    <label className='text-white text-xl font-bold underline ' htmlFor="">Sold : {detailProduct?.sold}</label>
                                </div>
                                <Button className="mb-5 w-40 mt-4">
                                    <HiShoppingCart className="mr-2 h-5 w-5 " />
                                    Buy now
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ViewCard;
