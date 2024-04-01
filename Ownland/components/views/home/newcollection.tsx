import React, { useState } from 'react'
import ButtonComponent from '../../button/button'
import { PrincipalSlider } from '../../../dataInfo/sliders'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Newcollection = () => {
  const [activeSlider] = useState(1)

  const sliderContent = PrincipalSlider.map((item,index) =>{
    const image = {
      backgroundImage : `url(${item.image})`
    }
    return(

      
      <SwiperSlide key={index}>
        <div
          style={image} 
          className='md:pt-7 lg:pt-0 sm:flex items-center justify-center gap-20 lg:gap-72 2xl:gap-[600px] 3xl:gap-[700px] md:pl-0 bg-no-repeat bg-contain lg:h-[100vh]'
        >
          <aside className='pt-44  lg:pl-0 md:pt-80 '>
            <div className='flex flex-col items-center  lg:items-start'>
              
              <p className='text-[#041D33] mx-4 md:mx-0 text-center lg:text-start text-[20px] font-bold lg:w-[250px] pt-5 hidden md:block'>{item.text1}</p>
            </div>
          </aside>
          
          <aside className='pt-4 md:pt-80 lg:pt-32 xl:pt-64 2xl:pt-32 lg:pb-60 xl:pb-20 3xl:pb-14 lg:pl-56 xl:pl-60 2xl:pl-40  flex text-center '>
            <div >
              <p className=' hidden md:block first:block text-[#041D33] text-[20px] lg:text-[20px] 2xl:text-[50px] font-black lg:w-[200px] xl:w-[350px] 2xl:w-[400px] leading-tight text-center md:text-start md:pr-10 lg:pr-0'>{item.text2}</p>
            </div>
          </aside>

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
          modules={[Pagination, Navigation, Autoplay]}
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

export default Newcollection