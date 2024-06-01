import Navbar from '../common/ComponentNavbar'
import ComponentCarousel from '../atoms/Carousel'
import SearchBar from '../organism/SearchBar'
import ComponentFooter from '../common/ComponentFooter'
import { Button } from "flowbite-react";
import CartElement from '../atoms/CartElement'
import { useState, useRef, useEffect } from 'react'
import { ComponentLogin } from '../organism/Login'
import CardCollection from '../organism/CardCollection';

const HomeTemplate = () => {
  const [visible, setVisible] = useState(false)
  const loginRef = useRef(null)

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      setVisible(false)
    }
  }

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible])

  return (
    <div className='bg-slate-600'>
      <div>
        <Navbar />
        <Button outline gradientDuoTone="greenToBlue" className="absolute top-9 right-[400px] font-bold ml-60 mobile:ml-5 tablet-or-mobile:top-32 tablet-or-mobile:right-56" onClick={() => { handleVisible() }}>Login</Button>
        <Button outline gradientDuoTone="greenToBlue" className="absolute top-9 right-[300px] font-bold mobile:-ml-25 tablet-or-mobile:top-32 tablet-or-mobile:right-28">Register</Button>
        <CartElement />
        <ComponentCarousel />
        <SearchBar />
        <CardCollection />
        <CardCollection />
        <ComponentFooter />
      </div>
      {visible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10'>
          <div ref={loginRef}>
            <ComponentLogin onClose={handleVisible} />
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeTemplate
