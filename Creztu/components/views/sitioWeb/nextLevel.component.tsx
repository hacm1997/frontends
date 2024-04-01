import React, { useEffect, useState } from 'react'
import { Dropdown } from '../../utilsComponents/dropdown'

export const NextLevel = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(0)
  
  const options = [
    {
      title: 'Crea un blog',
      content: (
        <div>
          <p className='not-italic font-normal text-[#7D8184]'>
          Descubre <span className='text-[#EF5A0F] font-bold'>Creztu</span>, la plataforma que hace que la 
          creación de contenido para tu <span className='font-bold text-black'>blog</span> sea más <span className='font-bold text-black'>fácil y rápida</span> que nunca. 
          ¡Automatiza tu proceso y deja que la <span className='font-bold text-[#EF5A0F]'>magia suceda!</span>
          </p>
        </div>
      ),
      titleClassName: 'text-black font-bold',
      contentClassName: '', 
      image: '/img/sitioWeb/crea-tu-blog.png'
    },
    {
      title: 'Edita el blog',
      content: (
        <div>
          <p className='not-italic font-normal text-[#7D8184]'>
          Crear contenido para <span className='text-[#EF5A0F] font-bold'>tu blog</span> es <span className='text-[#EF5A0F] font-bold'>rápido, simple y eficiente.</span> Olvídate del 
          estrés de ingresar manualmente tus posts de blog. 
            <span className='text-black font-bold'>¡Simplemente, escribe, sube y listo!</span> La automatización del futuro ha llegado
          </p>
        </div>
      ),
      titleClassName: 'text-black font-bold',
      contentClassName: '', 
      image: '/img/sitioWeb/edita-tu-blog.png'
    },
    {
      title: 'Compártelo en la web',
      content: (
        <div>
          <p className='not-italic font-normal text-[#7D8184]'>
          Cargamos tu contenido en tu <span className='text-[#EF5A0F] font-bold'>sitio web</span> de <span className='text-black font-bold'>manera rápida y eficiente</span> en tiempo record. 
          </p>
        </div>
      ),
      titleClassName: 'text-black font-bold',
      contentClassName: '', 
      image: '/img/sitioWeb/compartelo.png'
    },
  ]

  const handleOptionOpen = (index: number | null) => {
    if (index !== null) {
      setOpenIndex(index)
    }
  }

  useEffect(() => {
    if (openIndex !== null) {
      setCurrentImageIndex(openIndex)
    }
  }, [openIndex])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [])

  return (
    <div className='mt-8 1xl:mt-56 flex flex-col justify-center items-center w-full'>
      <p 
        className='bg-gradient-to-r from-orange-400 via-violet-600 to-orange-400 bg-clip-text text-transparent
        text-center text-2xl sm:text-3xl md:text-5xl font-semibold mx-4 pb-2'
      >
        Eleva Tu Blog al Siguiente Nivel con Creztu
      </p>
      <p
        className='text-center text-orange-400 font-semibold text-xl sm:text-3xl sm:mt-8'
      >
        Mantén al tanto a tu usuarios en tu sitio web
      </p>
      <div className='mt-8 w-full'>
        <div className='bg-[#FEF8F5] max-w-[80%] flex flex-col md:flex-row mx-auto justify-center items-center gap-4 rounded-xl px-8'>
          <Dropdown options={options} onOptionOpen={handleOptionOpen} style='mt-4 lg:mt-0'/>
          <div className='mt-8'>
            {currentImageIndex !== null && (
              <>
                <img
                  src={options[currentImageIndex].image}
                  alt={`Imagen de la opción ${currentImageIndex + 1}`}
                  className='bg-cover'
                  // width={600}
                  // height={600}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
