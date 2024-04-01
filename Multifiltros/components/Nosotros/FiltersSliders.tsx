import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

interface Props {
  slider: { id: number, title: string; src: string; alt: string }[];
  initialSlide: number
}

export const FiltersSliders = ({ slider, initialSlide }: Props) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper w-10/12 sm:w-11/12"
        initialSlide={initialSlide}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {slider.map(({ id, alt, src, title }) => (
          <SwiperSlide
            key={id}
            className="flex content-center items-center mb-8 bg-cover bg-center"
          >
            <div className='relative'>
              <img
                className="block w-full h-full object-cover rounded-xl shadow-xl"
                title={title}
                src={src}
                alt={alt}
              />
              {/* <p className='text-white absolute bottom-4 left-4'>{title}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
