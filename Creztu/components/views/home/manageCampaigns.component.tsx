import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
const ManageCampaigns = () => {
 
  return (
    <>
      <div>
        <div className='pt-14 lg:pt-11 flex justify-center'>
          <h1 className="text-center w-[90%] md:w-[90%] lg:w-[990px] text-2xl pt-10 md:text-5xl lg:text-7xl font-bold"><strong>Creztu</strong><br />la fórmula personalizada del éxito en Email Marketing</h1>
        </div>
        <div className='flex justify-center pt-2 md:pt-5 lg:pt-11 mx-5'>
          <p className='w-[825px] lg:pt-4 text-sm md:text-base lg:text-2xl  text-center'>
          Gestiona tus campañas de correos masivos de manera automática, segura y altamente eficiente, experimentando un <strong>éxito</strong> sin igual en la era digital.
          </p>
        </div>
        <div className='flex justify-center pt-16 md:pt-5 lg:pt-5'>
          <Link title='' href="https://accounts.creztu.com/#/signup">
            <button id='button-go' className='flex bg-[--background-buttom] w-[276px] h-11 rounded-full text-white text-lg pl-16 pt-2' >Regístrate <RiArrowRightLine className='pl-3 w-9 h-9' /></button>
          </Link>
        </div>
        <div>
          <div className='flex mx-5 pt-14'>
            <img src="/img/manageCampaigns/encabezado.webp" className='' alt="encabezado"/>
          </div>
        </div>      
      </div>
    </>
  )

}
  
export default ManageCampaigns
