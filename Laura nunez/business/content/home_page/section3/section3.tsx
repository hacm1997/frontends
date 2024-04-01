import styles from "./styles.module.css";
import Slider1 from "./slider1/after_before";
import Slider2 from "./slider2/after_before";
import {ModalScheduleButton} from "../../modal/generalButton/calendar_btn";
import Image from "next/image";

export default function MakeUpsHome() {

    return (
        <>
            <section data-aos="fade-up"  data-aos-duration="2000">
                <div className={styles.principal}>
                    <h1>Makeups que elevan tu belleza</h1>

                    <div className={"row "+styles.section3Pt1}>
                        <div className={"col-md-2"}></div>
                        <div className={"col-md-5"}>
                            <div className={styles.border1}>
                                <Image width={158} height={153} src="/images/content/home/third_component/borde1.png" alt="Marco-Superior" title="Marco-Superior" />
                            </div>
                            <Slider1/>
                        </div>
                        <div className={"col "+styles.section1_2} data-aos="fade-up"  data-aos-duration="2000">
                            <div className={styles.contentCol2}>
                                <p>
                                    ¿Quieres verte hermosa<br/> resaltando tus mejores rasgos?
                                </p>
                                <div>
                                    <ModalScheduleButton className={styles.btn} text={"Agendar cita"} id="2"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row "+styles.rowTwo}>
                        <div className={"col-md-2"}></div>
                        <div className={"col-md-4 "+styles.contentRow2} data-aos="fade-up"  data-aos-duration="2000">
                            <div className={styles.orientationCol1}>
                                <h2>
                                    Quiero ayudarte a destacar tu belleza, tu fuerza e imponencia de tu rostro.<br/>

                                </h2>
                            </div>

                            <div className={styles.buton}>
                                <ModalScheduleButton className={styles.btn} text={"Agendar cita"} id="3"/>
                            </div>

                            <div className={styles.kiss_img}>
                                <Image width={158} height={182} alt="Laura-Nuñez-Kiss" title="Laura-Nuñez-Kiss" src="/images/content/home/third_component/kiss.png" />
                            </div>

                        </div>
                        <div className={"col-md-5"}>
                            <div className={styles.sliderTwo}>
                                <Slider2 />
                            </div>
                           <div className={styles.border2}>
                               <Image width={158} height={152} src="/images/content/home/third_component/marco-inferior.png" alt="Marco-inferior" title="Marco-inferior"/>
                           </div>
                        </div>

                        <div className={"col-md-1"}></div>
                    </div>

                </div>
            </section>
        </>
    )
}
