import styles from "./styles.module.css";
import VideoPlayer from "../../videoPlayer/video";
import {useState} from "react";

export default function PrincipalSection(props:any) {
    const [newShow, setNewShow] = useState(false);
    const btn_click = () => {
        props.gaEventTracker('Clic ver vídeo - Bodas')
        setNewShow(true);
    }
    const hijoAPadre = (datoshijo:any) => {
        setNewShow(datoshijo);
    }
    return (
        <>
            <section>
                <div className={"row"}>
                    <div className={"col-md-5 "+styles.principal_image} title="Maquillaje-para-Novias" data-aos="fade-up"  data-aos-duration="1000">

                    </div>
                    <div className={"col-md-4 "+styles.texts} data-aos="fade-up"  data-aos-duration="2000">
                        <div className={styles.title}>
                            <h1>
                                Soy especialista en hacer <br/>
                                que te veas radiante en tu<br/>
                                día soñado
                            </h1>
                        </div>
                        <div className={styles.description}>
                            <p>
                                Siéntete segura de ti misma en el día más especial, te ayudaré a lucir radiante.
                            </p>
                        </div>
                        <div className={styles.btn_video}>
                            <button type="button" onClick={btn_click}>
                                Ver vídeo <i className='bx bxs-right-arrow bx-xs bx-flashing'></i>
                            </button>
                        </div>
                    </div>
                    <div className={"col-md-3 d-flex align-items-end "+styles.col3} data-aos="fade-up"  data-aos-duration="3000">
                        <div className={styles.beauty_img} title="fondo-logo-beauty">
                            <img width={300} height={200} src="/images/content/bodas/section1/logo-beauty.png" alt="beauty" title="beauty"/>
                        </div>
                    </div>
                </div>
            </section>
            <VideoPlayer newShow={newShow} hijoAPadre={hijoAPadre}/>
        </>
    )
}
