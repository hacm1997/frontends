import styles from "./styles.module.css";

export default function AllForYou(props:any) {
    const wsp_bodas = "https://api.whatsapp.com/send?phone=573126243074&text=Hola%20Lau%F0%9F%92%96,%20estuve%20revisando%20navegando%20tu%20sitio%20web,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20contigo";

    const openWsp = () => {
        props.gaEventTracker('boda agenda tu café conmigo 2')
        window.open(wsp_bodas, '_blank', 'noopener,noreferrer');
    }
    return (
        <>
            <section>
                <div className={"row "+styles.principal} title="Sección-para-ti">
                    <div className={"col-md-4 "+styles.content1} data-aos="fade-up" data-aos-duration="2000">
                        <div className={styles.photo}>
                            <img width={420} height={560} src="/images/content/bodas/section4/foto-boda1.JPG" alt="Maquillaje-para-vestido" title="Maquillaje-para-vestido"/>
                        </div>
                        <div className={styles.cont_responsive}>
                            <div className={styles.conten_boda1}>
                                <div className={styles.description} title="Contenido-Laura-Nuñez">
                                    <p>
                                        En Laura Núñez encontraremos el tono de maquillaje ideal
                                        para tu piel y su estilo. Siéntete segura, hermosa e inigualable
                                        caminando hacia al altar.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={"col-md-4 "+styles.content2} data-aos="fade-up" data-aos-duration="2000">
                        <div className={styles.conten_boda2}>
                            <div className={styles.contentCol2}>
                                <h3 className={styles.title}>
                                    Me encargaré de hacerte lucir hermosa en el día más importante de la vida de una mujer, con una piel suave y natural
                                </h3>
                                <p className={styles.description2}>
                                    En este día tú eres lo más importante y quiero que te sientas como tal.
                                </p>
                                <ul className={styles.list}>
                                    <li>Prueba de peinado y maquillaje en el estudio. </li>
                                    <li>Caja sorpresa exclusiva para novias.</li>
                                    <li>Maquillaje y peinado el día de la boda.</li>
                                    <li>Domicilio dentro del perímetro urbano.</li>
                                </ul>
                                <div className={styles.btn}>
                                    <button onClick={openWsp}>Agenda tu café conmigo</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.photo} data-aos="fade-up" data-aos-duration="2000">
                            <img width={420} height={560} src="/images/content/bodas/section4/foto-boda-2.jpg" alt="Maquilla" title="Maquilla"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
