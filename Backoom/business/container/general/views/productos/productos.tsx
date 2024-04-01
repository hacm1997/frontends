import styles from "./styles.module.css";
import Seach from "./seach/seach";
import Card_producto from "./card_producto/card_producto";
import Categoria from "./categoria/categoria";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Productos(props: any) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.general_productos}>
          <div className={styles.seach}>
            <Seach />
          </div>
          <div className={styles.title}>
            <i className="bx bx-minus"></i>
            <h2>Más demandados</h2>
          </div>
          <div className={styles.productos}>
            <Swiper
              breakpoints={{
                301: {
                  slidesPerView: 2,
                },
                790: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={20}
              pagination={true}
              modules={[Pagination, Autoplay]}
              className={styles.mySwiper}
            >
              <SwiperSlide>
                <Card_producto />
              </SwiperSlide>
              {/*<SwiperSlide><Card_producto/></SwiperSlide>
                            <SwiperSlide><Card_producto/></SwiperSlide>
                            <SwiperSlide><Card_producto/></SwiperSlide>
                            <SwiperSlide><Card_producto/></SwiperSlide>
                            <SwiperSlide><Card_producto/></SwiperSlide>*/}
            </Swiper>
          </div>
        </div>
      </section>

      <Categoria />
    </>
  );
}
