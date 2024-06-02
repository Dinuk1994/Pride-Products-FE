import Navbar from '../common/ComponentNavbar'
import ComponentCarousel from '../atoms/Carousel'
import SearchBar from '../organism/SearchBar'
import ComponentFooter from '../common/ComponentFooter'
import { Button } from "flowbite-react";
import CartElement from '../atoms/CartElement'
import { useState, useRef, useEffect } from 'react'
import { ComponentLogin } from '../organism/Login'
import CardCollection from '../organism/CardCollection';
import Register from '../organism/Register';

const HomeTemplate = () => {
  const [visibleLogin, setVisibleLogin] = useState(false)
  const [visibleRegister, setVisibleRegister] = useState(false)
  const loginRef = useRef(null)
  const registerRef = useRef(null)

  const handleVisibleLogin = () => {
    setVisibleLogin(!visibleLogin)
  }

  const handleVisibleRegister = () => {
    setVisibleRegister(!visibleRegister)
  }

  const handleClickOutsideRegister = (event) => {
    if (registerRef.current && !registerRef.current.contains(event.target)) {
      setVisibleRegister(false)
    }
  }

  const handleClickOutsideLogin = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      setVisibleLogin(false)
    }
  }

  useEffect(() => {
    if (visibleLogin) {
      document.addEventListener('mousedown', handleClickOutsideLogin)
    } else {
      document.removeEventListener('mousedown', handleClickOutsideLogin)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideLogin)
    }
  }, [visibleLogin])

  useEffect(() => {
    if (visibleRegister) {
      document.addEventListener('mousedown', handleClickOutsideRegister)
    } else {
      document.removeEventListener('mousedown', handleClickOutsideRegister)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideRegister)
    }
  }, [visibleRegister])

  return (
    <div className='bg-slate-600'>
      <div>
        <Navbar />
        <Button outline gradientDuoTone="greenToBlue" className="absolute top-9 right-[400px] font-bold ml-60 mobile:ml-5 tablet-or-mobile:top-32 tablet-or-mobile:right-56" onClick={() => { handleVisibleLogin() }}>Login</Button>
        <Button outline gradientDuoTone="greenToBlue" className="absolute top-9 right-[300px] font-bold mobile:-ml-25 tablet-or-mobile:top-32 tablet-or-mobile:right-28" onClick={() => { handleVisibleRegister() }}>Register</Button>
        <CartElement />
        <ComponentCarousel />
        <SearchBar />
        <CardCollection />
        <CardCollection />
        <ComponentFooter />
      </div>
      {visibleLogin && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10 overflow-'>
          <div ref={loginRef}>
            <ComponentLogin />
          </div>
        </div>
      )}
      {visibleRegister && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10'>
          <div ref={registerRef}>
            <Register />
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeTemplate
