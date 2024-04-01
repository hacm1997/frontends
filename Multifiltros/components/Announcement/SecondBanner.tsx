import React from 'react'

export const SecondBanner = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 bg-violet-50'>
      <div className='mt-14 mb-16 px-4'>
        <p className='text-blue-custom text-center lg:text-start text-xs lg:text-base not-italic font-semibold pb-4 lg:pl-8'>Nos mantenemos innovando para brindarte lo mejor</p>
        <p className='text-blue-custom text-center lg:text-start text-3xl lg:text-5xl not-italic font-bold'>
          <span className='text-red-custom'>|</span>Novedades en nuestros <span className='text-red-custom'>productos y <span className='lg:ml-4 1xl:ml-0'>servicios</span></span>
        </p>
      </div>
      <img className='bg-cover sm:w-6/12 mb-16' src='/images/banners/Banner2.webp' alt='Second Banner'/>
      <button className='bg-red-custom text-white text-base not-italic font-bold px-10 py-3 rounded-xl shadow-[3px_10px_16px_0px_#EB4648] mb-16'>Conoce mas</button>
    </div>
  )
}
