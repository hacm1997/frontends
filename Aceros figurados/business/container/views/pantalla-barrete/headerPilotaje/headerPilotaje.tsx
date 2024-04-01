import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, A11y} from "swiper";

SwiperCore.use([Autoplay]);
export default function HeaderPilotaje() {
    const { t, lang } = useTranslation('pantalla-barrete');
    const headerObject = t<any>("Header", {}, {returnObjects: true});

    const contentHead = headerObject?.map((item: any, index: number) => (
        <SwiperSlide key={index}>
            <div className={styles.header} style={{backgroundImage:`url(${item.background})`}} title={item.title}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <span>Somos expertos en</span>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        )
    )
    return (
        <>
            <Swiper
                modules={[A11y]}
                autoplay={{ delay: 10000 }}
                className={styles.swiper}
                slidesPerView={1}
                spaceBetween={0}
            >
                {contentHead}
            </Swiper>
        </>
    )
}
