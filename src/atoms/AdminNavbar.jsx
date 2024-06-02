import { Avatar, Dropdown } from 'flowbite-react'
import Logo from '../assets/Images/logo.png'
const AdminNavbar = () => {
    return (
        <div className="w-full bg-adin-navbar">
            <div className="flex items-center">
                <img src={Logo} alt="" className="mr-3 h-28" />
                <div className='rounded-xl p-2 shadow-lg border-1 border-gray-700 shadow-gray-700 ml-8 mobile:ml-2'> <label className='text-white font-bold text-2xl' htmlFor="">ADMINISTRATION</label></div>
                <div className='absolute right-3 tablet-or-mobile:-right-8'>
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