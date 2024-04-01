import { Swiper, SwiperSlide } from 'swiper/react'
import { SecondSlider } from '../../../InfoSliders/sliders'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Slider2 = () => {
  const sliderContent = SecondSlider.map((item,index) =>{
    const image = {
      backgroundImage : `url(${item.src})`
    }
    return(
      <SwiperSlide key={index}>
        <div style={image}  className='flex justify-center items-center'>
          <img className='' src={item.src} alt={item.alt} title={item.title}/>
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
              slidesPerView: 3,
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

export default Slider2