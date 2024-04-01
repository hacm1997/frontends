import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const Oportunity = () => {
  return (
    <>
      <div className='text-center pt-10'>
        <div className='flex justify-center'>
          <h2 className='w-[80%] pt-12 md:pt-24 text-xl md:text-5xl  font-bold text-center md:w-[90%]'><strong>Creztu</strong> la oportunidad de hacer crecer tu negocios con <strong>email marketing</strong> </h2>
        </div>
        <div className='flex justify-center'>
          <p className='w-[90%] h-[58px] pt-5 text-sm md:text-base lg:text-2xl  text-center font-medium md:w-[70%] lg:w-[50%] px-7'>Tu aliado para alcanzar el <strong>éxito</strong>  empresarial. Aprende cómo convertir oportunidades en clientes leales y ganancias sostenibles.</p>
        </div>
      </div>
      <div className='px-3 md:px-60 pt-16 md:pt-10 lg:pt-32'>
        <img className='hidden md:block' src="/img/oportunity/dashboard.webp" alt="dashboard" />
        <img className='block md:hidden' src="/img/oportunity/dashboard1.webp" alt="dashboard" />
      </div>
      <div className='flex justify-center pt-10 pb-16'>
        <Link title='' href="https://accounts.creztu.com/#/signup">
          <button id='button-go' className='flex bg-[--background-buttom] w-[276px] h-11 rounded-full text-white text-lg pl-16 pt-2' >Regístrate <RiArrowRightLine className='pl-3 w-9 h-9' /></button>
        </Link>
      </div>
    </>
  )
}

export default Oportunity