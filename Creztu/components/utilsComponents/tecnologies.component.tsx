import React from 'react'
import styles from './tecnologies.module.css'

interface Props {
  principalTitle?: string
  title1?: string,
  // eslint-disable-next-line no-undef
  description1?: JSX.Element
  title2?: string
  // eslint-disable-next-line no-undef
  description2?: JSX.Element
  image?: string
}

export const Tecnologies = ({principalTitle, title1, title2, description1, description2, image}: Props) => {
  return (
    <div className='mt-10' data-aos="fade-right"
      data-aos-duration={'700'}>
      <div className='flex justify-center'>
        <p
          className={`${styles.title} md:max-w-[55%] 2xl:max-w-[40%] text-3xl sm:text-6xl font-bold not-italic text-center mx-4 pb-6`}
        >
          {principalTitle}
        </p>

      </div>
      <div className='flex flex-col xl:flex-row justify-center items-center'>
        <div 
          className='flex flex-col items-center justify-center text-center px-2 md:px-0 md:text-start md:w-6/12 xl:w-3/12 mt-4 xl:mt-0 gap-4'
        >
          <p className='text-regal-orange font-semibold not-italic text-2xl'>
            {title1}
          </p>
          {description1}

          <p className='text-regal-orange font-semibold not-italic text-2xl mt-4'>
            {title2}
          </p>
          {description2}
        </div>
        <img src={image} alt='tecnologies'/>
      </div>
      <div className='flex justify-center mt-10'>
        <a href='#prices' title='Prices'>
          <button className='rounded-3xl bg-black text-white py-1 px-16 not-italic text-xl'>
            Comprar ahora
          </button>
        </a>
      </div>
    </div>
  )
}
