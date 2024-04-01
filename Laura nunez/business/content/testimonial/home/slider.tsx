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
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import {dataTestiomonial} from "../../../../data_info/data";

SwiperCore.use([Autoplay]);
export default function TestimonialSliders(){
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

    const content =dataTestiomonial.map( (slider:any, index:any) => (

            <SwiperSlide key={index} className={styles.swiper} style={{backgroundColor: `df8640`}}>
                {/*<img src={slider.photo}/>*/}
                <div className={"container "} style={{backgroundColor: '#FFFFFF'}}>
                    <br/>
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
        <Swiper
            modules={[Pagination, A11y]}
            autoplay={{ delay:1800 }}
            className={styles.content_swiper}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                // when window width is >= 640px
                455: {
                    slidesPerView: 2,
                },
                640: {

                    slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                },

                995: {
                    slidesPerView: 3,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            { content }

        </Swiper>

        </>
    );
};
