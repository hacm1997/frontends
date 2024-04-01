import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import SwiperCore, {Pagination, Autoplay, Navigation, A11y} from "swiper";
import React, {useState} from "react";

SwiperCore.use([Autoplay]);
export default function Topics(props:any) {

    //console.log(props)
    return (
        <div className={styles.posts} title="Más-entradas">
            <Swiper
                slidesPerView={1}
                autoplay={{ delay:3000 }}
                navigation={true}
                spaceBetween={20}
                modules={[Navigation, Pagination, A11y]}
                className={styles.mySwiper}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3
                    },
                }}
            >
                {props.props.map(({slug2, frontMatter2: {title, cover_image}}:any) => (

                    <SwiperSlide key={slug2}>
                        <div className={styles.banner}>
                            <img title={title} src={cover_image} alt="entradas-del-blog" />
                        </div>
                        <div className={"row"} title={title}>
                            <div className={"col-md-6"}>
                                <p className={styles.titles}>
                                    <ul>
                                        <li> <span>{title.substring(0, 16)}...</span> </li>
                                    </ul>
                                </p>
                            </div>
                            <div className={"col-md-6 "+styles.btn}>
                                <a type="button" href={`/blogs/blog-page/${slug2}`}>Leer más</a>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
