import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const HEADQUARTERS = [
  {
    id: 1,
    title: 'Multifiltros Cartagena Principal',
    img: '/images/sedes/Serviteca.png',
    alt: 'Cartagena-serviteca',
    sede: '1',
    ciudad: 'Cartagena',
    direccion: 'Transversal 54 # 21J-119 9 Barrio El Bosque.',
    ubicacion: 'https://maps.app.goo.gl/wkKVXrhZAydAbexd7'
  },
  {
    id: 2,
    title: 'Multifiltros Cartagena serviteca',
    img: '/images/sedes/Serviteca.png',
    alt: 'Cartagena-serviteca',
    sede: '2',
    ciudad: 'Cartagena',
    direccion: 'Transversal 54 #21E-06 Barrio Bosque.',
    ubicacion: 'https://maps.app.goo.gl/9aMB5FBV2oxMvbeq7'
  },
  {
    id: 3,
    title: 'Multifiltros Barranquilla',
    img: '/images/sedes/Serviteca.png',
    alt: 'Cartagena-serviteca',
    sede: '3',
    ciudad: 'Barranquilla',
    direccion: 'Calle 42 #23 - 08 Esquina. Barrio Montes',
    ubicacion: 'https://maps.app.goo.gl/Q4L21jf7VUtBT5ep7'
  },
  {
    id: 4,
    title: 'Multifiltros Barranquilla la 41',
    img: '/images/sedes/Serviteca.png',
    alt: 'Carrera 41 #57-25 Barrio El Recreo',
    sede: '4',
    ciudad: 'Barranquilla',
    direccion: 'Carrera 41 #57-25 Barrio El Recreo',
    ubicacion: '/'
  },
  {
    id: 5,
    title: 'Multifiltros Barranquilla la 21',
    img: '/images/sedes/Serviteca.png',
    alt: 'Cartagena-serviteca',
    ciudad: 'Barranquilla',
    sede: '5',
    direccion: 'Calle 44 #21-33 Barrio San José',
    ubicacion: '/'
  },
]

export const Headquarters = () => {
  const [selectedSede, setSelectedSede] = useState<number>()
  const selectedSedeInfo = HEADQUARTERS.find(sede => sede.id === selectedSede)

  return (
    <div className='bg-[#FBFBFF] mt-28 flex flex-col justify-center items-center w-full'>

      <div className='mx-4'>
        <p className='text-red-custom text-xl not-italic font-medium pb-4 lg:pl-8'>
        Contamos con 5 diferentes sedes ubicadas en ciudades como <span className='text-blue-custom'>Cartagena</span> y  <span className='text-blue-custom'>Barranquilla</span>
        </p>
        <p className='text-blue-custom text-3xl lg:text-5xl not-italic font-bold'>
          <span className='text-red-custom'>|</span> Visítanos en nuestras 5 sedes de <span className='text-red-custom lg:ml-8 1xl:ml-0'>Multifiltros</span>
        </p>
      </div>

      <div className='w-full flex flex-col justify-center items-center mt-8'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            650: {
              slidesPerView:2
            },
            1024: {
              slidesPerView:3
            }
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-9/12"
          initialSlide={2}
          onSlideChange={(swiper) => setSelectedSede(swiper.activeIndex + 1)}
  
        >
          {HEADQUARTERS.map(({id, alt, img, title}) => (
            <SwiperSlide key={id} className="flex flex-col content-center items-center mb-8 bg-cover bg-center">
              <div className='relative'>
                <img
                  className="block w-full h-full object-cover rounded-xl shadow-xl "
                  title={title}
                  src={img}
                  alt={alt}
                />
                <p className='text-white absolute bottom-4 left-4'>{title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='relative text-center pb-4'>
          {selectedSedeInfo ? (
            <>
              <p className='text-blue-custom text-2xl font-bold not-italic'>Dirección: sede <span className='text-red-custom'>#{selectedSede}</span>, {selectedSedeInfo.ciudad}</p>
              <p className='text-[#353535] text-xl not-italic font-normal'>{selectedSedeInfo.direccion}</p>
              <a
                className='text-red-custom text-2xl not-italic font-semibold underline'
                href={selectedSedeInfo.ubicacion} target='_blank'>¿Como llegar?</a>
              {/* Agrega más campos según sea necesario */}
            </>
          ) : (
            <p>Información no disponible</p>
          )}
        </div>
      </div>
    </div>
  )
}
