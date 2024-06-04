/* eslint-disable react/no-unescaped-entities */

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from '../assets/Images/logo.png'
import { FcGoogle } from "react-icons/fc";

export function ComponentLogin() {
    return (
        <div>
            <div className="flex justify-center items-center h-screen p-4">
                <Card className="bg-gray-400 p-5 mobile:p-0  rounded-2xl shadow-2xl shadow-black">
                    <form className="flex flex-col gap-4">
                        <div className='flex flex-col items-center'>
                            <label htmlFor="" className='font-bold text-2xl text-blue-900 mt-1 font-serif text-nowrap'>Welcome to Pride Products</label>
                            <img src={Logo} alt="Logo" className='w-32 h-32' />
                            <label htmlFor="" className='font-bold text-3xl text-yellow-200'>LOGIN</label>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" className='text-white font-bold' value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="dinuk@gmail.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" className='text-white font-bold' value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" required />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember" className='text-white font-bold'>Remember me</Label>
                        </div>
                        <Button type="submit">Login</Button>
                        <div className="flex justify-center text-white">
                            <label htmlFor="">______________________</label>
                            <label className="mr-1 ml-1" htmlFor="">Or</label>
                            <label htmlFor="">______________________</label>
                        </div>
                        <button className="flex bg-slate-500 p-2 text-white rounded-lg justify-center hover:bg-slate-600">
                            <FcGoogle className="size-7 mr-2" />
                            Login with Google
                        </button>

                    </form>
                </Card>
            </div>
        </div>
    );
}


