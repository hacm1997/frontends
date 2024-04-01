/* eslint-disable @next/next/no-img-element */
import styles from "./allies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import SwiperCore, {
  Swiper as SwiperType,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper";
import React from "react";

SwiperCore.use([Autoplay, Navigation]);
export default function AlliesComponent(){

    const swiperRef = React.useRef<SwiperType>();

    return(
        <>
            <div className="pb-10">
                <div className="flex justify-center pt-10 pb-10">
                    <h4 className={"text-white text-3xl font-black "+styles.title}>Conoce nuestros clientes:</h4>
                </div>

                <div className={"flex justify-center gap-4 "+styles.allies}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    autoplay={{ delay: 3000 }}
                    onBeforeInit={(swiper:any) => {
                        swiperRef.current = swiper;
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
                    <SwiperSlide>
                        <img src="/images/allies/kru-logo.webp" alt="KRU_LOGO" title="KRU360"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/allies/logo-beamar-01.webp" alt="LOGO BEAMAR" title="BEAMAR"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/allies/sibla-logo.webp" alt="SIBLA" title="SIBLA"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/allies/wyer-logo-01.webp" alt="WYER" title="WYER"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/allies/logo-kauale.webp" alt="Kauale_Logo" title="Kauale"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/allies/sereman-logo.webp" alt="Sereman" title="Sereman"/>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
