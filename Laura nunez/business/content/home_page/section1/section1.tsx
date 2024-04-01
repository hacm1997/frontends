import styles from "./styles.module.css";
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import VideoPlayer from "../../videoPlayer/video";
import Image from "next/image";

export default function QuienSoy(props:any) {
    const [newShow, setNewShow] = useState(false);
    const btn_click = () => {
        setNewShow(true);
        props.gaEventTracker("inicio: Botón Ver vídeo")
    }
    const hijoAPadre = (datoshijo:any) => {
        setNewShow(datoshijo);
    }

    return (
        <>
            <section>

                <div className={styles.container}>
                    <div className="row" >
                        <div className={"col-md-6 "+styles.section1} title="Laura-Nuñez" data-aos="fade-right"  data-aos-duration="2000">

                        </div>
                        <div className={"col-md-6 "+styles.section2} >

                            <div className="row" data-aos="fade-up"  data-aos-duration="1000">
                                <div className={"col-md-6 "+styles.col1}>
                                    <section className={styles.title_desc}>
                                        <p>¿Te preguntas<br/> quién soy?</p>
                                        <p>Soy maquilladora profesional, apasionada por este bello arte,
                                            tengo 5 años de experiencia en maquillaje social, novias y artístico.<br/>
                                            Quiero que te sientas hermosa, segura, confiada y logres reflejar
                                            esa mujer poderosa e imponente que hay en ti.<br/>
                                            El maquillaje es una forma de expresión y tu eres el mas bello lienzo.
                                        </p>
                                    </section>
                                    <section className={styles.btn_video}>
                                        <button type="button" onClick={btn_click}>
                                            Ver vídeo <i className='bx bxs-right-arrow bx-xs bx-flashing'></i>
                                        </button>
                                    </section>
                                    <section className={styles.img_love}>
                                        <Image width={269} height={210} alt="colores-artísticos" title="colores-artísticos" src="/images/content/home/first_component/love-yourself.png" />
                                    </section>
                                </div>
                                <div className={styles.icon_heart}>
                                    <Image width={118} height={114} alt="corazón-de-maquillaje" title="corazón-de-maquillaje" src="/images/content/home/first_component/icon-heart.png" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                    <VideoPlayer newShow={newShow} hijoAPadre={hijoAPadre}/>
            </section>
        </>
    )
}
