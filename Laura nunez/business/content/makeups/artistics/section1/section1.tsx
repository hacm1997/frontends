import styles from "./styles.module.css";
import {ModalScheduleButton} from "../../../modal/generalButton/calendar_btn";

export default function MakeUps() {

    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className="row">
                        <div className={"col-md-10 "+styles.background} title="Maquillaje-artístico" data-aos="fade-up"  data-aos-duration="2000">
                            <div className="row">
                                <div className={"col-md-8"}></div>
                                <div className={"col-md-3 "+styles.parrafs}>
                                    <div className={styles.title}>
                                        <h1>Makeups artísticos<br/>
                                            para ocasiones especiales</h1>
                                    </div>
                                    <div className={styles.description}>
                                        <p>Resalta tu belleza y crea un efecto especial o dramático en tu rostro.
                                            Permítete usar colores llamativos para crear un look único en tu rostro.
                                            Utiliza este tipo de maquillajes en teatro, fotografía y/o vídeo especiales.
                                        </p>
                                    </div>

                                    {/*<button>Agendar cita</button>*/}
                                    <ModalScheduleButton className={""} text={"Agendar cita"} id="1 Artístico"/>
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
