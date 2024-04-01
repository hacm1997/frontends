import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useTranslation from 'next-translate/useTranslation'

export const BannerSale = () => {
  const {t, lang} = useTranslation("buy");
    const banners = t<any>("banner", {}, { returnObjects: true });
  const IMAGES = [
    {
      id:1,
      img: "/images/administracion/banner/banner-1.webp",
      alt: "Banner 1"
    },
    {
      id:2,
      img: "/images/administracion/banner2/banner-2.webp",
      alt: "Banner 2"
    },
    {
      id:3,
      img: "/images/administracion/banner2/banner-3.webp",
      alt: "Banner 3"
    }
  ]

  return (
    <div>
      <Swiper
          slidesPerView="auto"
          loop={true}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Pagination, Navigation]}
          autoplay={{
            delay: 5000
          }}
          >
          {banners.map((item: any) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt={item.title} style={{width: '100%'}}/>
              
            </SwiperSlide>
          ))}
        </Swiper> 
          </div>
  )
}
