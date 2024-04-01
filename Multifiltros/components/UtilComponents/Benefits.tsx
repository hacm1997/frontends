import React from 'react'
import { BENEFITS } from '../../data/Benefits'
import { BenefitsCards } from './BenefitsCards'

export const Benefits = () => {
  const redirect = () =>{
    window.open('https://api.whatsapp.com/send/?phone=573004332067', '_blank')
  }
  return (
    <>
      <div className='mt-4'>
        <div className='lg:mt-7 flex flex-col justify-center items-center gap-8'>
          <p className='text-blue-custom text-xl font-extrabold not-italic text-center max-w-2xl'>
          No sabes que <span className='text-red-custom'>filtro</span> elegir o no 
          encuentras el tuyo? Nosotros te lo personalizamos <span className='text-red-custom'>a tu 
          medida</span> haz <button onClick={redirect} className='bg-red-custom text-white px-8 rounded-lg h-8 underline'>click aqui</button> y te asesoraremos
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center pt-16 pb-36 w-full '>
        <p className='text-red-custom text-3xl lg:text-5xl not-italic font-bold pb-11 text-center'>Beneficios de comprar con nosotros</p>
        <div className='grid grid-cols-1 sm:gird sm:grid-cols-2 gap-4 1xl:gap-0 1xl:flex pb-11 justify-center items-center border-[1px] rounded-lg py-8
      shadow-[3px_10px_16px_0px_#EB4648]'>
          {
            BENEFITS.map((item) =>( 
              <BenefitsCards title={item.title} text={item.text} icon={item.icon} id={item.id} key={item.id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
