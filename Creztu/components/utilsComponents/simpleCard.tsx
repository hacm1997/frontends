import React from 'react'

interface DinamicCardProps {
  title?: string
  subtitle?: string
  // eslint-disable-next-line no-undef
  text?: JSX.Element
  image?: string
  icon?: string
}

export const SimpleCard = ({title, subtitle, text, image, icon}: DinamicCardProps) => {
  return (
    <>
      <div className="w-full mt-10 mb-10 px-4 md:px-0 ">
        <div className='flex justify-center'>
          <img 
            src={image}
            alt='men'
            className='object-cover mr-40'
            width={300}
            height={300}
          />
        </div>
        <div className="mx-auto max-w-[800px] p-4 border-[1px] rounded-lg text-center shadow-[1px_5px_20px_0px_#EF5A0F] relative">
          <p className="not-italic font-bold text-3xl">
            {title}
          </p>
          <p className='text-regal-orange font-bold text-2xl sm:text-3xl'>{subtitle}</p>
          {text}
          <img src={icon} alt='icon' className='absolute top-[-4px] right-[-3px] hidden xs:block' width={100} height={100}/>
          
          <div className='relative pt-3'>
            <a
              href="#prices"
              title="shopHome"
              className="text-white text-base md:text-xl font-semibold"
            >
              <button className="w-[90%] md:w-[373px] p-2 rounded-3xl bg-[#EF5A0F]">
                Obtener oferta
              </button>
            </a>
            <img
              loading="lazy"
              src='/img/arrow.webp'
              alt='arrow'
              title='arrow'
              className="absolute top-5 left-[68%] md:top-6 md:left-[65%]"
            />
          </div>
          
        </div>
      </div>
    </>
  )
}