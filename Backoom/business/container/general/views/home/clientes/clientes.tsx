import styles from "./styles.module.css";
import Card_cliente from "./card_cliente/card_cliente";
import inicio from "../../../../../../services/inicio.json"
import {Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Swiper as SwiperType, Pagination, Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";

SwiperCore.use([Autoplay, Navigation]);
export default function Clientes() {
    const title = inicio.clients.clientTitle;
    const clientes = inicio.clients.clientImg;
    const swiperRef = React.useRef<SwiperType>();

    return (
        <>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h2>{title}</h2>

                </div>
                <div className={styles.general_cliente}>
                    <Swiper
                        spaceBetween={10}
                        autoplay={{ delay: 1000 }}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={
                            {
                                1920: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                }
                            }
                        }
                        modules={[Pagination]}

                    >
                        {
                            clientes.map((clientImg: any, index: any) => (
                                <SwiperSlide key={index}> <Card_cliente img={clientImg.urlImg} alt={clientImg.altImg} key={index} index={index}/></SwiperSlide>
                            ))

                        }
                    </Swiper>

                </div>
            </section>
        </>
    )
}
