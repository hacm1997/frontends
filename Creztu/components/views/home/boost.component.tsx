import React from 'react'

const Boost = () => {
  return (
    <>
        
      <div className='md:pt-28 flex justify-center' id='boost'>
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold w-[80%] lg:w-[1373px] lg:h-[72px]"><strong>La manera</strong> en que Creztu impulsa tu negocio </h2>
      </div>
      
      <div className='flex justify-center text-center pt-2 md:pt-3 lg:pt-5 pb-3'>
        <p className='text-sm md:text-base lg:text-2xl w-[90%] lg:w-[825px] h-[58px]'>¡Dale un impulso turbo a tu negocio con <strong>Creztu</strong> y ahorra un increíble <br /><strong>50%</strong> en los primeros <strong>6 meses!</strong></p>
      </div>

      <div className='bg-[#FEF8F5] lg:px-40 py-20 flex justify-around'>
        <div className='bg-[#fff] w-11/12 lg:w-full md:h-40 lg:h-64 rounded-3xl'>
          <div className='flex justify-around items-center'>
            <div>
              <img className='w-24 lg:w-full pl-2 md:pl-0 pt-1 md:pt-5' src="/img/boost/Layer_1.webp" alt="Layer_1" />
            </div>
            <div className='text-center'>
              <h3 className='text-sm md:text-3xl lg:text-5xl'><strong>¡Ahorra</strong> enviando correos!</h3>
              <p className='text-xs md:text-xl lg:text-3xl'>Cada mensaje que envíes a tan a sólo <strong>$10 pesos.</strong></p>
            </div>
            <div className=''>
              <img className='w-24 pr-2 lg:w-full md:pr-0' src="/img/boost/Layer_2.webp" alt="Layer_2" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Boost