import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import SwiperCore, {
  Swiper as SwiperType,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from 'swiper'
import React from 'react'
SwiperCore.use([Autoplay, Navigation])
import styles  from './sliderNav.module.css'

interface Props {
  submenu?: string[]
}

const SliderNav = ({submenu}: Props) => {
  const swiperRef = React.useRef<SwiperType>()
  return(
    <>
      <div className={styles.nav}>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{ delay: 700 }}
          onBeforeInit={(swiper:any) => {
            swiperRef.current = swiper
          }}
          className={styles.content_swiper}
          loop={true}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            800: {
              slidesPerView: 1,
            },

            995: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {
            submenu.map((item:string, index:number) => (
              <SwiperSlide key={index}>
                <h3 className={styles.nav_li}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                  >
                    <path
                      d="M18.2992 0.308146L23.4197 13.3478L36.6516 17.9487L23.6119 23.0692L19.011 36.3011L13.8906 23.2614L0.658651 18.6605L13.6983 13.5401L18.2992 0.308146Z"
                      fill="url(#paint0_linear_1996_20078)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1996_20078"
                        x1="18.2992"
                        y1="0.308146"
                        x2="19.011"
                        y2="36.3011"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF5A0F" />
                        <stop offset="1" stopColor="#6F00F9" />
                      </linearGradient>
                    </defs>
                  </svg>{' '}
                  <a href="#e-commerce" title={item}>{item}</a>
                </h3>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    
    </>
  )
}
export default SliderNav