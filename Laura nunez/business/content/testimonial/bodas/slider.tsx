import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import PrettyRating from "pretty-rating-react";
import {
    faHeart,
    faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import SwiperCore, { Swiper as SwiperType, Navigation, Pagination, A11y, Autoplay } from "swiper";
import { dataTestiomonialBodas } from "../../../../data_info/data";

SwiperCore.use([Autoplay, Navigation]);
export default function TestimonialSlidersBodas() {
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }

    const icon = {
        heart: {
            complete: faHeart,
            half: faHeartBroken,
            empty: farHeart,
        },
    };
    const colors = {
        heart: ['#FF4632', '#FF4632'],
    };
    const swiperRef = React.useRef<SwiperType>();

    const content = dataTestiomonialBodas.map((slider: any, index: any) => (

        <SwiperSlide key={index} className={styles.swiper} style={{ backgroundColor: `df8640` }}>

            <div className={"container "} style={{ backgroundColor: '#FFFFFF' }}>
                <br />
                <p className={styles.username}>{slider.username}</p>
                <p className={styles.descriptions}>
                    {'"'}{slider.description}{'"'}
                </p>
                <div className={styles.ratingHeart}>
                    <PrettyRating
                        max={5}
                        colors={colors.heart}
                        //@ts-ignore
                        icons={icon.heart}
                        value={slider.stars}
                    />
                </div>

            </div>

        </SwiperSlide>

    ));
    return (
        <>

            <div className={styles.general}>
                <div className={styles.grid}>
                    <div className={styles.content_slider}>
                        <div className={styles.prev_btn}>
                            <a type="button" onClick={() => swiperRef.current?.slidePrev()}><i className='bx bx-chevron-left'></i></a>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            autoplay={{ delay: 2500 }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            loop={true}
                            className={styles.content_swiper}
                            spaceBetween={50}
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
                        <div className={styles.next_btn}>
                            <a type="button" onClick={() => swiperRef.current?.slideNext()}><i className='bx bx-chevron-right'></i></a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
