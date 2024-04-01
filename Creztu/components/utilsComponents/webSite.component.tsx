import React, { useState } from 'react'
import { InformativeModal } from './informativeModal'
import { BestCard } from '../views/sitioWeb/cards/bestCard'
import styles from './webSite.module.css'

export interface ModalInterface {
  title1: string,
  // eslint-disable-next-line no-undef
  description1: JSX.Element,
  icon1: string,
  image1: string,
  image1Movil: string,
  title2: string,
  // eslint-disable-next-line no-undef
  description2: JSX.Element,
  icon2: string,
  image2: string,
  image2Movil: string,
}

interface Props {
  title?: string
  // eslint-disable-next-line no-undef
  subtitle?: JSX.Element
  image?: string
  imageMovil?: string
  informativeModal?: ModalInterface
}

export const WebSite = ({image, imageMovil, title, subtitle, informativeModal}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  
  return (
    <div className='mt-8'>
      <p 
        className={`${styles.title} text-center text-2xl sm:text-3xl md:text-7xl font-semibold mx-4 pb-2`}
      >
        {title}
      </p>

      {subtitle}

      <div className='w-full flex justify-center px-8 mt-4'>
        <img src={image} alt='start-now' className='bg-cover hidden sm:block'/>
        <img src={imageMovil} alt='start-now' className='bg-cover block sm:hidden'/>
      </div>

      <div className='flex justify-center'>
        <button 
          className='flex gap-2 justify-center items-center border-[1px] rounded-3xl p-1 sm:p-2 mt-4 
          shadow-[-1px_4px_20px_2px_#EF5A0F] text-regal-orange font-bold text-sm sm:text-xl' 
          onClick={handleOpenModal}
        >
         Sumérgete en la experiencia y la conversión
          <strong className='w-[30px] h-[30px] text-[25px] text-white bg-[#FB8501] rounded-full flex justify-center items-center'>+</strong>
        </button>
        <InformativeModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Título del Modal"
          text="Texto del Modal. Puedes ingresar información dinámica aquí."
          images={['url_de_imagen_1', 'url_de_imagen_2']}
          informativeModal={informativeModal}
        >
        </InformativeModal>
      </div>
      <div>
        <BestCard/>
      </div>
    </div>
  )
}
