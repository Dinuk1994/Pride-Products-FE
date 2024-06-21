/* eslint-disable react/no-unescaped-entities */

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from '../assets/Images/logo.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

export function ComponentLogin() {
    const[user,setUser] =useState({
        'email': '',
        'password' : '' 
    })

    const loginFunction=(event)=>{
        const{name,value}=event.target;
        setUser({...user,[name]:value})
    }

    const loginSubmit= async (event)=>{
        event.preventDefault()
        try {
            await axios.post('/user/login',{...user})
            localStorage.setItem('firstLogin',true)
            window.location.href="/"
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    return (
        <div>
            <div className="flex justify-center items-center h-screen p-4">
                <Card onSubmit={loginSubmit} className="bg-gray-400 p-5 mobile:p-0  rounded-2xl shadow-2xl shadow-black">
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
                            <TextInput id="email1" type="email" value={user.email} onChange={loginFunction} placeholder="dinuk@gmail.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" className='text-white font-bold' value="Your password" />
                            </div>
                            <TextInput id="password1" value={user.password} onChange={loginFunction} type="password" required />
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


