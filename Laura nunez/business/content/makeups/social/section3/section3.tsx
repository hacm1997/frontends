import styles from "./styles.module.css";
import {ModalScheduleButton} from "../../../modal/generalButton/calendar_btn";

export default function EndMaqPage() {

    return (
        <>
            <section className={styles.background}>
                <div className={styles.image}>
                    <img width={310} height={270} src="/images/content/artistics/component3/love-yourself.png" alt="Peinados" title="Peinados"/>
                </div>
                <div className={styles.boton}>
                    {/*<button className={styles.btn}>Agendar cita</button>*/}
                    <ModalScheduleButton className={styles.btn} text={"Agendar cita"} id="2 Social"/>
                </div>
            </section>
        </>
    )
}
