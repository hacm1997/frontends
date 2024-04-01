import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import {imagesMaquillajeSpecial} from "../../../../../../data_info/data";

SwiperCore.use([Autoplay]);
let selectMaquillaje: any[] = [];

const SliderMaquillajeSpecial : React.FC<{types:string}> = ({types}) => {

    const result = imagesMaquillajeSpecial.filter((obj) => {
        if(types == "Noche"){
            return obj.tipo === 'Noche';
        }else if(types == "Dia") {
            return obj.tipo === 'Dia';
        }else if(types == "Dramatico"){
            return obj.tipo === 'Dramatico';
        }else {
            return imagesMaquillajeSpecial;
        }
        //console.log(selectMaquillaje);
    });
    selectMaquillaje = result;
    //console.log(selectMaquillaje)
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            //autoplay={{ delay:1800 }}
            style={{
                // @ts-ignore
                "--swiper-navigation-color": "#fff",
            }}
            className={styles.generalswiper}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                // when window width is >= 640px
                455: {
                    slidesPerView: 1,
                },
                640: {

                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 1,
                },

                995: {
                    slidesPerView: 1,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 1,
                },
            }}
        >

                <>
                    { selectMaquillaje.map( slider => (
                    <SwiperSlide key={slider.id} className={styles.swiper} style={{backgroundColor: `FFFFFF`}}>

                        <div className={"row "+styles.row1}>
                            <div className={"col-md-4 "+styles.img1}>
                                <img width={350} height={450} src={slider.img1} alt="Maquillaje-social" title="Maquillaje-social" />
                            </div>
                            <div className={"col-md-8 "+styles.img2}>
                                <img width={750} height={450} src={slider.img2} alt="Maquillaje-social" title="Maquillaje-social"/>
                            </div>
                        </div>

                        <div className={"row "+styles.row2}>
                            <div className={"col-md-8 "+styles.img3}>
                                <img width={735} height={450} src={slider.img3} alt="Maquillaje-social" title="Maquillaje-social"/>
                            </div>
                            <div className={"col-md-4 "+styles.img4}>
                                <img width={365} height={450} src={slider.img4} alt="Maquillaje-social" title="Maquillaje-social"/>
                            </div>
                        </div>

                    </SwiperSlide>
                    ))}
                </>


        </Swiper>
    );
};
export default SliderMaquillajeSpecial;
