
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react"
import Logo from '../assets/Images/logo.png'
import { Button } from "flowbite-react";
import CartElement from "../atoms/CartElement";

export default function ComponentNavbar() {
  return (
    <div>
      <Navbar fluid rounded className="bg-#BACD92 -mt-3">
        <Navbar.Brand>
          <img src={Logo} className="mr-3 h-28" alt="Logo" />

        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar className="w-40" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header className="bg-gray-500">
              <span className="block text-lg">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active className="text-lg font-semibold text-white ml-52">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-semibold text-white ">About</Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-semibold text-white">Services</Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-semibold text-white">Contact</Navbar.Link>
        </Navbar.Collapse>

        <Button outline gradientDuoTone="greenToBlue" className="font-bold ml-60 mobile:ml-5">Login</Button>
        <Button outline gradientDuoTone="greenToBlue" className="font-bold mobile:-ml-25">Register</Button>
        <CartElement/>
      </Navbar>
    </div>
  );
}
