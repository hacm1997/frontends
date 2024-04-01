import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import {Scrollbar} from "swiper";

export default function Swipers({children}: any) {
    return (
        <>

            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {children}
            </Swiper>

        </>
    )
}