import styles from './styles.module.css';
import CardEmpresa from "../../../../component/cards/cardEmpresa/cardEmpresa";
import home from "../../../../../locales/es/home.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import SwiperCore, { A11y, Autoplay } from "swiper";
import React from "react";

SwiperCore.use([Autoplay]);
export default function EmpresaQueConfian() {
    const data: any = home.allies;
    const content = data.data.map((obj: any, index: any) => (

        <SwiperSlide key={index} style={{ backgroundColor: `df8640` }}>
            <CardEmpresa data={obj}/>
        </SwiperSlide>

    ));

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h2>{data.title}</h2>
                    </div>
                    <div className={styles.cardGeneral}>
                        <Swiper
                            modules={[A11y]}
                            autoplay={{ delay: 2500 }}
                            loop={true}
                            className={styles.content_swiper}
                            spaceBetween={0}
                            slidesPerView={1}
                            breakpoints={{

                                800: {
                                    slidesPerView: 2,
                                },

                                995: {
                                    slidesPerView: 3,
                                },

                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {content}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
