import styles from "./styles.module.css";
import {ModalScheduleButton} from "../../../modal/generalButton/calendar_btn";

export default function MakeUpsSpecials() {

    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className="row">
                        <div className={"col-md-10 "+styles.background} title="Maquillaje" data-aos="fade-up"  data-aos-duration="2000">
                            <div className="row">
                                <div className={"col-md-6"}></div>
                                <div className={"col-md-3 "+styles.parrafs}>
                                    <div className={styles.title}>
                                        <h1>Makeups sociales<br/>
                                            para ocasiones especiales</h1>
                                    </div>
                                    <div className={styles.description}>
                                        <p>Luce hermosa, llena de seguridad y atractiva
                                            en tus eventos sociales o reuniones profesionales.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        {/*<button>Agendar cita</button>*/}
                                        <ModalScheduleButton className={""} text={"Agendar cita"} id="1 Social"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={"col-md-2 "+styles.vertical_cartel} data-aos="fade-up"  data-aos-duration="2000">
                            <img height={600} width={200} alt="self-love-club" title="self-love-club" src="/images/content/artistics/component1/self-love-club.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
