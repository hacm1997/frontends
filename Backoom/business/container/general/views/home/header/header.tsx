import styles from "./styles.module.css";
import Content from "./content/content";
import { Swiper, SwiperSlide } from "swiper/react";
import inicio from "../../../../../../services/inicio.json"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Header() {
    const header = inicio.header;

    return (
        <>
            <section className={styles.section} title="background-header-sitio-web-backoom">
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {header.map((e, i) => (
                        <SwiperSlide key={i}>
                            <div className={styles.header}>
                                <Content content={e.content} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}
