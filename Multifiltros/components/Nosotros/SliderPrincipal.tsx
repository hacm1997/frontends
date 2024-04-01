import { PrincipalSlider } from '../../InfoSliders/sliders'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const SliderPrincipal = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-full h-full"
      id="slider-principal"
    >
      {PrincipalSlider.map(({ id, alt, src, title }) => (
        <SwiperSlide key={id} className="flex content-center items-center">
          <img
            className="block w-full h-full object-cover"
            title={title}
            src={src}
            alt={alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderPrincipal
