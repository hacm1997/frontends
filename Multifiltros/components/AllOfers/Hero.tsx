import React from 'react'
import { GridCategories } from '../Categories/GridCategories'
import { ALLOFERS } from '../../data/allOfers'

export const Hero = () => {
  return (
    <div className='text-center mt-6 flex flex-col justify-center items-center'>
      <h2 className='text-blue-custom text-3xl lg:text-5xl not-italic font-bold'>Nuestras <span className='text-red-custom'>ofertas imperdible</span></h2>
      <p className='text-[#353535] text-2xl not-italic font-normal'>!Encuentra precios increíbles cada dia¡</p>
      <div className='mt-6 grid grid-cols-2 gap-4 mx-auto sm:gap-4 sm:inline-grid md:grid-cols-3 justify-center items-center'>
        <GridCategories items={ALLOFERS} />
      </div>
    </div>
  )
}
