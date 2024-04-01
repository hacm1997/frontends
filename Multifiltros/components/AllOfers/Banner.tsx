import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const BANNER = [
  {
    id: 1,
    image: '/images/allOfers/Banner.png',
    alt: 'Banner',
  },
  // {
  //   id: 2,
  //   image: '/images/allOfers/Banner.png',
  //   alt: 'Banner',
  // },
  // {
  //   id: 3,
  //   image: '/images/allOfers/Banner.png',
  //   alt: 'Banner',
  // },
]

export const Banner = () => {
  return (
    <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        autoplay={{
          delay: 5000
        }}
        
        className="mySwiper w-full mx-8"
        id='#FeaturedProducts'
      >
        {BANNER.map(({id, image, alt}) => (
          <SwiperSlide key={id} className='flex content-center items-center mb-28'>
            <img 
              src={image} 
              alt={alt}
              className='max-h-[442px] w-full object-cover bg-center'
            />
           
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  )
}
