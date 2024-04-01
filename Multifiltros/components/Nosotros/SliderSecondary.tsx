import { SecondSlider } from '../../InfoSliders/sliders'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export const SliderSecondary = () => {
  return (
    <>
      <div className="text-red-500 text-center text-2xl lg:text-5xl font-extrabold leading-[50px] my-4 md:my-12 self-start max-md:max-w-full max-md:leading-10">
        <span className="text-blue-950">Marcas aliadas de multi</span>
        <span className="text-red-500">filtros</span>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-8/12"
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {SecondSlider.map(({ id, alt, src, title }) => (
          <SwiperSlide key={id} className="flex content-center items-center mb-8">
            <img
              className="block w-full h-full object-cover"
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
