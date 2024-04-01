import { AsideSlider } from '../../InfoSliders/sliders'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export const SliderAside = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full"
      >
        {AsideSlider.map(({ id, alt, src, title }) => (
          <SwiperSlide key={id} className="flex content-center items-center mb-8">
            <img
              className="block w-full h-full object-cover rounded-xl"
              title={title}
              src={src}
              alt={alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
