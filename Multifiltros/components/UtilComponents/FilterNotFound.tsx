import React from 'react'
import { MultiArrowDown } from '../../public/icons/utilsIcons/multiArrowDown'
import { Adviser } from '../../public/icons/utilsIcons/adviser'

export const FilterNotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <p className='text-red-custom text-5xl lg:text-7xl not-italic font-bold'>¡Oops!</p>
      <p className='text-blue-custom text-3xl lg:text-5xl not-italic font-extrabold mt-8 mx-4'>
      No encontramos tu <span className='text-red-custom'>filtro</span>,no te preocupes 
      </p>
      <div className='flex flex-col justify-center items-center mt-16
        gap-8 lg:gap-8 lg:px-20 lg:pt-16 lg:pb-28 max-w-[1000px] px-8'>
        <div className='mt-4 lg:mt-0 flex justify-center items-center gap-4'>
          <MultiArrowDown/>
          <Adviser/>
          <MultiArrowDown/>
        </div>
        <div className='lg:mt-7'>
          <p className='text-blue-custom text-xl font-extrabold not-italic text-center max-w-2xl'>
          No sabes que <span className='text-red-custom'>filtro</span> elegir o no 
          encuentras el tuyo? Nosotros te lo personalizamos <span className='text-red-custom'>a tu 
          medida</span> haz <button className='bg-red-custom text-white px-8 rounded-lg h-8 underline'>click aqui</button> y te asesoraremos
          </p>
        </div>
      </div>
    </div>
  )
}
