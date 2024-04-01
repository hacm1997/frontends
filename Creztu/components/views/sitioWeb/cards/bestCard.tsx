import React from 'react'

export const BestCard = () => {
  return (
    <div className="w-full mt-10 mb-10 px-4 md:px-0 ">
      <div className="mx-auto max-w-[600px] p-4 border-[1px] rounded-lg text-center shadow-[1px_5px_20px_0px_#EF5A0F] relative">
        <p className="not-italic font-semibold text-xl sm:text-2xl md:text-3xl">
          El mejor diseño de Latinoamérica
        </p>
        <div className='relative pt-3'>
          <a
            href="#prices"
            title="shopHome"
            className="text-white text-base md:text-xl font-semibold"
          >
            <button className="w-[90%] md:w-[373px] p-2 rounded-3xl bg-[#EF5A0F]">
              Obtener
            </button>
          </a>
          <img
            loading="lazy"
            src="/img/sitioWeb/arrow.webp"
            alt="arrow"
            title="arrow"
            className="absolute top-5 left-[68%] md:top-6 md:left-[65%]"
          />
        </div>
        {/* <img 
          src="/img/ecommerce/woman-with-laptop-jumping-Photoroom 1.png" 
          alt="women"
          className="absolute top-[22px] right-[-184px] hidden 1xl:block"
          width={300}
          height={300}
        /> */}
      </div>
    </div>
  )
}
