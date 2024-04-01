import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Pagination, Grid } from "swiper";
import React, {useState} from "react";
import moment from "moment";


//Date Format
const day = 'D';
const month = 'MMMM';
const year = 'YYYY';
export default function BlogsPg(props:any) {
    //const [codeApi, setCodeApi] = useState([])
    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className:any) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    //console.log(props);

    return (
        <div className={styles.posts} title="Blog-Laura-Nuñez">
            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 1,
                    fill: 'row',
                }}
                spaceBetween={20}
                pagination={pagination}
                modules={[Grid, Pagination]}
                className={styles.mySwiper}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        grid: {rows:2}
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        grid: {rows:2}
                    },
                }}
            >
                {props.props.map(({slug, frontMatter: {id,title, description, date,cover_image}}:any) => (

                    <SwiperSlide key={slug}>

                        <p className={styles.dates}>
                            {moment(date).format(day) + `${" de "}` + moment(date).format(month) + `${" de "}` + moment(date).format(year)}
                        </p>
                        <div className={styles.banner}>
                            <img src={cover_image} />
                        </div>
                        <h2 className={styles.titles}>
                            <ul>
                                <li><span>{title}</span></li>
                            </ul>
                        </h2>
                        <div className={styles.description}>
                            <p>
                                {description.substring(0, 110)}
                                ...
                            </p>
                        </div>
                        <div className={styles.btn}>
                            <a type="button" href={`/blogs/blog-page/${slug}`}>Leer más</a>
                        </div>
                        <div className="swiper-pagination"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div>
                <a
                    type="button"
                    href="https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/calendar&response_type=code&access_type=offline&redirect_uri=http://localhost:3000/calendar&client_id=195653083011-914njotgrhl1hi96ddh1p3ubib7j3lfn.apps.googleusercontent.com"
                >
                    Get Code
                </a>
            </div> */}
        </div>
    )
}
