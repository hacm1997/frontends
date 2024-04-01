import styles from "./styles.module.css";
import {ModalScheduleButton} from "../../modal/generalButton/calendar_btn";
import Image from "next/image";

export default function YearExp() {

    return (
        <>
            <section>
                <div className={styles.background} data-aos="fade-up"  data-aos-duration="1000">
                    <div className="row">
                        <div className={"col-md-6 "+styles.section1}>
                            <div className="row">
                                <div className={"col-md-2"}></div>

                                <div className={"col-md-4 "+styles.love_club_img} data-aos="zoom-in" >
                                    <Image width={188} height={185} alt="colores-maquillaje" title="colores-maquillaje" src="/images/content/home/second_component/love-self-club.png" />
                                </div>

                                <div className={"col-md-5 "+styles.row2}>
                                    <p className={styles.years_plus}>5+</p>
                                    <p className={styles.years_decrip}>
                                        Años de experiencia<br/>certificada
                                    </p>
                                    <div className={styles.descriptionP}>
                                        <p className={styles.description}>
                                        Tengo 5 años certificando mi experiencia con maquilladores
                                        nacionales e internacionales, explorando la versatilidad y
                                        poder de este arte, plasmándolo en mi trabajo.
                                        </p>
                                    </div>

                                    <div className={styles.btn_ag_display}>
                                        <ModalScheduleButton className={styles.btn_ag} text={"Agendar cita"} id="1"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={"col-md-4 "+styles.section2} title="Maquillaje-colores-artísticos" data-aos="zoom-in" data-aos-duration="2000">

                        </div>
                        <div className={"col-md-2 "}>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
