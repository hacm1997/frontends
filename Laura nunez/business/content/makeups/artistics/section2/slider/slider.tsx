import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useEffect, useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import {imagesMaquillaje} from "../../../../../../data_info/data";
import {getBindingIdentifiers} from "@babel/types";

SwiperCore.use([Autoplay]);
let selectMaquillaje: any[] = [];

const SliderMaquillaje : React.FC<{types:string, hidden:boolean}> = ({types, hidden}) => {

    const result = imagesMaquillaje.filter((obj) => {
        if(types === "Halloween"){
            //setContentTwo(true);
            return obj.tipo === 'Halloween';
        }else if(types === "Fiestas temáticas") {
            //setContentTwo(false);
            return obj.tipo === 'Fiestas temáticas';
        }else if(types === "Halloween3"){
            //setContentTwo(false);
            return obj.tipo === 'Halloween3';
        }else {
            //setContentTwo(false);
            return imagesMaquillaje;
        }
        //console.log(selectMaquillaje);
    });
    selectMaquillaje = result;


    return (
        <>
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

                { selectMaquillaje.map( slider => (
                <SwiperSlide key={slider.id} className={styles.swiper} style={{backgroundColor: `FFFFFF`}}>
                    {hidden ? (
                            <div>
                                <div className={"row " + styles.row1}>
                                    <div className={"col-md-4 " + styles.img1}>
                                        <img width={350} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img1}/>
                                    </div>
                                    <div className={"col-md-4 " + styles.img1}>
                                        <img width={350} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img3}/>
                                    </div>
                                    <div className={"col-md-4 " + styles.img1}>
                                        <img width={350} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img2}/>
                                    </div>
                                </div>

                                <div className={"row " + styles.row2}>
                                    <div className={"col-md-8 " + styles.img3}>
                                        <img width={735} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img5}/>
                                    </div>
                                    <div className={"col-md-4 " + styles.img4}>
                                        <img width={365} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img4}/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                        <div>
                            <div className={"row " + styles.row1}>
                                <div className={"col-md-4 " + styles.img1}>
                                    <img width={350} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img1}/>
                                </div>
                                <div className={"col-md-8 " + styles.img2_1}>
                                    <img width={750} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img2}/>
                                </div>
                            </div>

                            <div className={"row " + styles.row2}>
                                <div className={"col-md-8 " + styles.img3}>
                                    <img width={735} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img3}/>
                                </div>
                                <div className={"col-md-4 " + styles.img4}>
                                    <img width={365} height={450} alt="Maquillaje-artístico" title="Maquillaje-artístico" src={slider.img4}/>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
export default SliderMaquillaje;
