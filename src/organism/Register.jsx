import { useState } from 'react';
import { Button, Card, Label, TextInput, Checkbox } from "flowbite-react";
import Logo from '../assets/Images/logo.png';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const[user ,setUser] =useState({
        "name" : '',
        "email" : '',
        "password" : '',
        "confirmPassword" : ''
    })

    const registerFunction =(event)=>{
        const{name,value} = event.target
        setUser({...user,[name]:value})
    }


    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex justify-center items-center h-screen ">
            <Card className="bg-gray-400 px-5 mobile:p-0 rounded-2xl shadow-2xl shadow-black">
                <form className="flex flex-col gap-2">
                    <div className='flex flex-col items-center'>
                        <label htmlFor="" className='font-bold text-2xl text-blue-900 mt-1 font-serif text-nowrap'>Welcome to Pride Products</label>
                        <img src={Logo} alt="Logo" className='w-32 h-32 ' />
                        <label htmlFor="" className='font-bold text-3xl text-yellow-200'>REGISTER</label>
                    </div>
                    <div>
                        <div className="mb-1 block ">
                            <Label htmlFor="name" className='text-white font-bold' value="Name" />
                        </div>
                        <TextInput id="name" type="name" name='name' value={user.name} onChange={registerFunction} placeholder="dinuk" required />
                    </div>
                    <div>
                        <div className="mb-1 block ">
                            <Label htmlFor="email" className='text-white font-bold' value="Your email" />
                        </div>
                        <TextInput id="email" type="email" name='email' value={user.email} onChange={registerFunction} placeholder="dinuk@gmail.com" required />
                    </div>
                    <div className="relative">
                        <div className="mb-1 block">
                            <Label htmlFor="password" className='text-white font-bold' value="Create password" />
                        </div>
                        <TextInput id="password" value={user.password} onChange={registerFunction} name='password' type='password' required />
                    </div>
                    <div className="relative">
                        <div className="mb-1 block">
                            <Label htmlFor="confirmPassword"  className='text-white font-bold' value="Confirm password" />
                            
                        </div>
                        <TextInput id="confirmPassword" onChange={registerFunction} name='confirmPassword' value={user.confirmPassword} type={passwordVisible ? "text" : "password"} required />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute bottom-[10px] right-[10px]">
                            {passwordVisible ? <IoIosEye className='text-gray-600' /> : <IoIosEyeOff className='text-gray-600' />}
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="accept" defaultChecked />
                        <Label htmlFor="accept" className="flex">
                            I agree with the&nbsp;
                            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </a>
                        </Label>
                    </div>
                    <Button type="submit">Register</Button>
                    <div className="flex justify-center text-white">
                        <label htmlFor="">______________________</label>
                        <label className="mr-1 ml-1" htmlFor="">Or</label>
                        <label htmlFor="">______________________</label>
                    </div>
                    <button className="flex bg-slate-500 p-1 text-white rounded-lg justify-center hover:bg-slate-600">
                        <FcGoogle className="size-7 mr-2" />
                        Login with Google
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default Register;
