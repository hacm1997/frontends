import styles from "./styles.module.css";
import {ModalScheduleButton} from "../../../modal/generalButton/calendar_btn";

export default function EndMaqPage() {

    return (
        <>
            <section className={styles.background}>
                <div className={styles.image} data-aos="fade-up"  data-aos-duration="2000">
                    <img width={310} height={270} alt="Peinados" title="Peinados" src="/images/content/artistics/component3/love-yourself.png"/>
                </div>
                <div className={styles.boton} data-aos="fade-up"  data-aos-duration="2000">
                    {/*<button className={styles.btn}>Agendar cita</button>*/}
                    <ModalScheduleButton className={styles.btn} text={"Agendar cita"} id="2 Artístico"/>
                </div>
            </section>
        </>
    )
}
