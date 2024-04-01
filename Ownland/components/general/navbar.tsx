import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import ButtonComponent from '../button/button'

const Navbar = () => {
  const [isClick, setisClick] = useState(false)
  const toggleNavbar = () => {
    
    setisClick(!isClick)
  }
  return (
    <nav className='fixed bg-white h-24 w-[100%] z-50'>
      <div className='max-w-full sm:px-6 lg:px-8 '>
        <div className='flex items-center justify-between h-16 pt-10 '>
          <div className='flex items-center'>
            <div className='flex-shrink-0 cursor-pointer'>
              <Link title='home' href="/">
                <img src="/logo.png" alt="logo" title='logo' className='md:pl-7 pl-6' />
              </Link>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <li className='hover:bg-[#4900FC] hover:text-white rounded-lg p-2 list-none text-lg font-black text-[#041D33]'><Link href="/"><a title='inicio'>INICIO</a></Link></li>
              <li className='hover:bg-[#4900FC] hover:text-white rounded-lg p-2 list-none text-lg font-black text-[#041D33]'><Link href="#formulario"><a title='formulario'>SOBRE NOSOTROS</a></Link></li>
              <li className='hover:bg-[#4900FC] hover:text-white rounded-lg p-2 list-none text-lg font-black text-[#041D33]'><Link href="#slider"><a title='colecciones'>COLECCIONES</a></Link></li>
              {/* <li className='  list-none text-xl'><Link title='' href=""><input className='pl-2' type="text" placeholder='Buscar'/></Link></li> */}
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className='ml-4 flex items-center space-x-4 text-[#4900FC]'> 
            
              <a className='bg-[#4900FC29]   p-3 rounded-2xl cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300 '>
                <div className='flex justify-center'>

                  <img src="/images/truck.png" alt="rastrear" title='rastrear' />
                </div>
                
              </a>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=573155514590&text=Hola!%F0%9F%98%80%20Me%20gustaria%20contactarme%20con%20ustedes%20%F0%9F%8E%BD%F0%9F%91%95' className='bg-[#4900FC29] p-3 rounded-2xl cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300 '>
                <div className='flex justify-center'>

                  <img src="/images/chat.png" alt="contacto" title='contacto' />
                </div>
                
              </a>
           
              
            </div>
          </div>

          <div className='lg:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-[--color-primary] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={toggleNavbar}
            >
              { isClick ? (                
                <IoCloseSharp className='h-9 w-10 mr-5 mb-3' />
              ) : (
                <HiOutlineMenu className='h-9 w-10 mr-5 mb-3' /> 
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className='lg:hidden bg-white'>
          <div className='px-2 pt-5 pb-3 spa-y-1 sm:px-3 '>
            <li className='hover:bg-[#4900FC] hover:text-white rounded-lg p-2 list-none text-lg'><Link title='inicio' href="/">INICIO</Link></li>
            <li className='hover:bg-[#4900FC] hover:text-white rounded-lg p-2 list-none text-lg'><Link title='formulario' href="#formulario">SOBRE NOSOTROS</Link></li>
            <li className='hover:bg-[#4900FC] hover:text-white rounded-lg p-2 list-none text-lg'><Link title='colecciones' href="#slider">COLECCIONES</Link></li>
            
          </div>
          <div className='flex justify-start gap-10 pl-3 pb-2'>
            
            <a className='bg-[#4900FC29]   p-3 rounded-2xl cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300 '>
              <div className='flex justify-center'>

                <img src="/images/truck.png" alt="rastrear" title='rastrear' />
              </div>
                
            </a>
            <a target='_blank' href='https://api.whatsapp.com/send?phone=573155514590&text=Hola!%F0%9F%98%80%20Me%20gustaria%20contactarme%20con%20ustedes%20%F0%9F%8E%BD%F0%9F%91%95' className='bg-[#4900FC29] p-3 rounded-2xl cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300 '>
              <div className='flex justify-center'>

                <img src="/images/chat.png" alt="contacto" title='contacto' />
              </div>
                
            </a>
            
          </div>
        </div>
        
      )}
    </nav>
  )
}


export default Navbar