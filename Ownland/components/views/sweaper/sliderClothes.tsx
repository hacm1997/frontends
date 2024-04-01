import React, { useState } from 'react'
import ButtonComponent from '../../button/button'
import { PrincipalSlider, SecondSlider } from '../../../dataInfo/sliders'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const SliderClothes = () => {
  const [activeSlider] = useState(1)

  const sliderContent = SecondSlider.map((item,index) =>{
    return(

      
      <SwiperSlide key={index}>
        <div className='flex justify-center'>
          <img className='lg:w-7/12 lg:h-7/12' src={item.image} alt={item.alt} title={item.title}/>
        </div>
      
      </SwiperSlide>
    )

  })

  
  return (
  
    <div>
      <div className='hidden lg:block'>

        <Swiper
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            995: {
              slidesPerView: 1,
              spaceBetween: 15,
            }
          }}
        >
          {sliderContent}
        </Swiper> 
      </div>

      <div className="pt-8 lg:hidden">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
          }}
        >
          {sliderContent}
        </Swiper>
      </div>
      
    </div>
  )
  
}

export default SliderClothes