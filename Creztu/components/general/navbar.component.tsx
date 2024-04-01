import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'

const Navbar = () => {
  const [isClick, setisClick] = useState(false)
  const toggleNavbar = () => {
    setisClick(!isClick)
  }
  return (
    <nav className='fixed bg-white h-20 w-[100%] z-50'>
      <div className='max-w-full sm:px-6 lg:px-8 '>
        <div className='flex items-center justify-between h-16 pt-10 '>
          <div className='flex items-center'>
            <div className='flex-shrink-0 cursor-pointer'>
              <Link title='home' href="/">
                <img src="/img/CrezTu_logo.webp" alt="crezTu_logo" className='md:pl-7 pl-5' />
              </Link>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="/">Inicio</Link></li>
              <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="#unlockPower">Beneficios</Link></li>
              <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="#boost">Precios</Link></li>
              <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="https://api.whatsapp.com/send/?phone=573245450191" target="_blank">Contacto</Link></li>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className='ml-4 flex items-center space-x-4'> 
              <Link title='' href="https://accounts.creztu.com/">
                <button className='border-2 border-slate-950	w-44 h-10 rounded-full mr-5 font-semibold' >Iniciar Sesión</button>
              </Link>
              <Link title='' href="https://accounts.creztu.com/#/signup">
                <button className='bg-[--color-primary] w-44 h-10 rounded-full text-white font-semibold' >Regístrate</button>
              </Link>
            </div>
          </div>
          <div className='lg:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-[--color-primary] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={toggleNavbar}
            >
              { isClick ? (                
                <IoCloseSharp className='h-9 w-10 mr-5' />
              ) : (
                <HiOutlineMenu className='h-9 w-10 mr-5' /> 
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className='lg:hidden bg-white'>
          <div className='px-2 pt-5 pb-3 spa-y-1 sm:px-3 '>
            <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="">  Inicio</Link></li>
            <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="">Beneficios</Link></li>
            <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="">Precios</Link></li>
            <li className='hover:bg-[--color-primary] hover:text-white rounded-lg p-2 list-none text-xl'><Link title='' href="">Contacto</Link></li>
          </div>
          <div className=''>
            <div className='ml-4 flex justify-around mx-auto items-center space-x-4 pb-5'>
              <Link title='' href="https://accounts.creztu.com/">
                <button className='border-2 border-slate-950	w-[40%] h-10 rounded-full mr-2 font-semibold'>Iniciar Sesión</button>
              </Link>
              <Link title='' href="https://accounts.creztu.com/#/signup">
                <button className='bg-[--color-primary] w-[40%] h-10 rounded-full text-white font-semibold' >Regístrate</button>
              </Link>
            </div>
          </div>
        </div>
        
      )}
    </nav>
  )
}

export default Navbar