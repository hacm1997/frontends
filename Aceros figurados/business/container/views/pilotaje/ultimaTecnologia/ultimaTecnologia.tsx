import styles from './styles.module.css'
import ApoyoGrafico from "../../../../component/apoyoGrafico/apoyoGrafico";
import CardMaquina from "../../../../component/cards/cardMaquina/cardMaquina";
import useTranslation from "next-translate/useTranslation";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, A11y} from "swiper";

SwiperCore.use([Autoplay]);
export default function UltimaTecnologia(props:any) {

    const {t, lang} = useTranslation('home');

    const machines_item = t<any>("machines.list", {}, {returnObjects: true});
    const analytic = () =>{
        props.gaEventTracker(`Clic Agendar cita`);
    }
    const machines = machines_item?.map((item: any, index: number) => {
        return (
            <SwiperSlide key={index}>
                <CardMaquina img={item.machine} title={item.title} content={item.content} alt={item.alt}/>
            </SwiperSlide>
        )
    })
    return (
        <>
            <section className={styles.section}>
                <div className={styles.apoyoGrafico}>
                    <ApoyoGrafico img="/images/apoyo-grafico-rectangulo-linea.png"/>
                </div>
                <div className={styles.general_1}>

                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h2>{t("latestTechnology.title")}<span> {t("latestTechnology.titleSpan")}</span></h2>
                        </div>
                        <div className={styles.description}>
                            <p>{t("latestTechnology.content")}</p>
                            <a onClick={analytic} href={t("header:nav.item.button.url")} target="_blank" title="booking" rel="noreferrer">Agendar cita</a>
                        </div>
                    </div>
                    <div className={styles.maquina} style={{backgroundImage:`url(${t("imageSecond")})`}} title="Banner">

                    </div>
                </div>
                <Swiper
                    modules={[A11y]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className={styles.swiper}
                    slidesPerView={1}
                    breakpoints={{
                        800: {
                            slidesPerView: 1,
                        },

                        995: {
                            slidesPerView: 3,
                        },

                        1024: {
                            slidesPerView: 4,
                        }
                    }}
                    spaceBetween={0}
                >
                    <div className={styles.general_2}>

                            <div className={styles.cardMaquina}>
                                {
                                    machines
                                }
                            </div>

                    </div>
                </Swiper>
            </section>
        </>
    )
}
