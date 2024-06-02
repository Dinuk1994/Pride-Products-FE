import { useState } from 'react';
import { FaImage } from "react-icons/fa";

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
        <div className="flex justify-center mt-5">
            <div className="grid grid-cols-1 bg-gray-400 w-[1000px] rounded-xl p-5">
                <div className="flex justify-center w-full">
                    <label htmlFor="" className="font-bold text-white text-3xl mt-2">Create Product</label>
                </div>
                <div className="grid grid-cols-2 mt-8 gap-4">
                    <div className="flex flex-col items-center col-span-1">
                        <div
                            className={`w-full h-64 max-w-xs rounded border-4 border-white flex items-center justify-center ${!image ? 'bg-white' : ''}`}
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
                        <label htmlFor="" className="flex justify-center w-full h-full">
                            
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminContainer;
