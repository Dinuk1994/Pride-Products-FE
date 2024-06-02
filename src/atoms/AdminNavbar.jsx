import { Avatar, Dropdown } from 'flowbite-react'
import Logo from '../assets/Images/logo.png'
import { FaBell } from "react-icons/fa";
import { TbBellRinging2Filled } from "react-icons/tb";
import { useState } from 'react';
const AdminNavbar = () => {
    const[bell,setBell] = useState(false)

    const handleBell = ()=>{
        setBell(!bell)
    }
    return (
        <div className="w-full bg-adin-navbar">
            <div className="flex items-center">
                <img src={Logo} alt="" className="mr-3 h-28" />
                <div className='rounded-xl p-2 shadow-lg border-1 border-gray-700 shadow-gray-700 ml-8 mobile:ml-0 '> <label className='text-white font-bold text-2xl mobile:text-lg' htmlFor="">ADMINISTRATION</label></div>
                <div className='absolute right-3 tablet-or-mobile:-right-8'>
                    <button className='mobile:hidden' onClick={()=>{handleBell()}}>{
                        bell?<TbBellRinging2Filled className='absolute mt-2 text-2xl  text-yellow-300 size-8'/>:<FaBell className='absolute text-2xl mt-2 text-yellow-300 size-8'/>

                    }</button>
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar className="w-40" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar