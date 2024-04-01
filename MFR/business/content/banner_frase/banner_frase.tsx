import styles from "./styles.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, A11y } from "swiper";
import useTranslation from "next-translate/useTranslation";

export default function BannerFrase() {
    const {t, lang} = useTranslation("buy");
    const banners = t<any>("banner", {}, { returnObjects: true });

    return (
        <>
            {/* <div className={styles.general}>
                {children}
            </div> */}
            <Swiper
                modules={[A11y, Navigation, Pagination]}
                autoplay={{
                    delay: 5000,
                
                }}
                className={styles.swiper}
                slidesPerView={1}
                spaceBetween={500}
                freeMode={true}
                pagination={{ clickable:true,}}
            >
                {
                    banners.map((item:any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className={styles.section} style={{backgroundImage: `url(${item.img})`}}>
                                
                            </div>
                        </SwiperSlide>
                    ))
                }

                
                        
            </Swiper>

        </>
    )
}