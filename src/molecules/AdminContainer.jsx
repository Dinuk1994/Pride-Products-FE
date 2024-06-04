import { useState } from 'react';
import { FaImage } from "react-icons/fa";
import { TextInput, Textarea, Button } from "flowbite-react";

const AdminContainer = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="grid grid-cols-1 bg-cyan-800 w-[1000px] shadow-xl shadow-black rounded-xl mb-20 p-5">
                <div className="flex justify-center w-full">
                    <label htmlFor="" className="font-bold text-white text-3xl mt-2">Create Product</label>
                </div>
                <div className="grid grid-cols-2 mobile:grid-cols-1 mt-8 gap-4 ">
                    <div className="flex flex-col items-center col-span-1">
                        <div
                            className={`w-full h-64 max-w-xs mt-20 mobile:mt-5 rounded border-4 border-white flex items-center justify-center ${!image ? 'bg-white' : ''}`}
                        >
                            {image ? (
                                <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded" />
                            ) : (
                                <FaImage className="text-gray-400 text-6xl" />
                            )}
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-4"
                        />
                    </div>
                    <div className="grid col-span-1">
                        <label htmlFor="" className="text-white w-full h-full">Product ID</label>
                        <TextInput id="base" type="text" sizing="md" />
                        <label htmlFor="" className="text-white w-full h-full">Title</label>
                        <TextInput id="base" type="text" sizing="md" />
                        <label htmlFor="" className="text-white w-full h-full">Price</label>
                        <TextInput id="base" type="number" sizing="md" />
                        <label htmlFor="" className="text-white w-full h-full">Description</label>
                        <Textarea id="comment" placeholder="Product description" required rows={4} />
                        <label htmlFor="" className="text-white w-full h-full">Content</label>
                        <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                        <div className='flex justify-center'>
                            <Button className='bg-blue-500 hover:bg-blue-800 mt-3 shadow-md shadow-black w-48 font-bold'>Add Product</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminContainer;
