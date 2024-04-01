import React from 'react'
import { GlassIcon } from '../../public/icons/utilsIcons/glassIcon'

export const UnknownProduct = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <p className='text-blue-custom text-3xl lg:text-5xl not-italic font-extrabold mt-8 mx-4 text-center lg:text-start'>
        No hay <span className='text-red-custom'>productos</span> que coincidan con tu búsqueda
      </p>
      <div className='flex flex-col lg:flex lg:flex-row justify-center items-center mt-16
      gap-8 lg:gap-8 bg-[#F2F4FE] lg:px-20 lg:pt-16 lg:pb-28 max-w-[1000px] px-8'>
        <div className='mt-4 lg:mt-0 max-w-[140px] max-h-[140px]'>
          <GlassIcon/>
        </div>
        <div>
          {/* <p className='text-[#353535] text-xl font-normal not-italic text-center lg:text-start'>
            <span className='font-bold'>Navega por las categorías</span> para encontrar un producto similar
          </p> */}
          <ul className='text-[#353535]'>
            <li> • <span className='font-bold'>Revisa</span> la ortografía de la palabra.</li>
            <li> • Utiliza palabras <span className='font-bold'>más genéricas</span> o menos palabras.</li>
            <li> • <span className='font-bold'>Navega por las categorías</span> para encontrar un producto similar</li>
          </ul>
          <p className='text-[#353535] mb-11 lg:mb-0 text-xl font-normal not-italic mt-8 text-center lg:text-start'>
          Si en estas opciones no encuentras el producto que necesitas, escribamos en el botón 
          de <span className='font-bold'>WhatsAPP</span> o en la opción <span className='text-red-custom font-bold'>enviar mensaje</span> y 
          decirnos que producto o servicio solicitas.
          </p>
        </div>
      </div>
    </div>
  )
}
