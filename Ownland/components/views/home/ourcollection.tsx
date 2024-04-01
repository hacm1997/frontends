import React from 'react'
import ButtonComponent from '../../button/button'
import SliderClothes from '../sweaper/sliderClothes'

const OurCollection = () => {
  return (
    <div className="lg:flex justify-center items-center gap-16 ">
      <div className='flex justify-center lg:w-[40%] pt-16 pb-8 lg:pt-[80px] lg:pb-[80px]'>
        <div className='lg:w-[55%]'>
          <h2 className='text-5xl lg:text-7xl italic lg:leading-[90px] text-[#041D33] text-center lg:text-start'>NUESTRAS PRENDAS</h2>
          
          <div className='pt-8 lg:pt-0  leading-[70px] text-center lg:text-start'>
            <p className='text-4xl font-black text-[#041D33] leading-relaxed'>Explora y elige tus favoritas en:</p>
            <div className=''><h2 className='text-[50px] lg:text-7xl  text-[#4900FC]'>Ownland</h2></div>
            
          </div>
          
          <div className='pt-[20px]  text-center lg:text-start px-3 lg:px-0'>
            <p className='text-base lg:w-[396px] font-medium '>
            Nos enorgullece diseñar prendas pensadas para
            potenciar tu rendimiento y comodidad en cada paso de tu proceso.
            </p>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <a className='flex flex-col items-center justify-center bg-[#4900FC] mt-4 text-[#041D33] text-base font-black w-40 h-10' 
              href="https://api.whatsapp.com/send?phone=573155514590&text=Hola!%F0%9F%98%80%20Me%20gustaria%20ver%20el%20catálogo%20%F0%9F%8E%BD%F0%9F%91%95" 
              target='_blank'
              title='contacto'>
              <p className='text-white '>VER CATÁLOGO</p>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:pt-[80px] lg:pb-[80px] pb-5" id='slider'>
        <SliderClothes />
      </div>
      
    </div>
  )
}

export default OurCollection