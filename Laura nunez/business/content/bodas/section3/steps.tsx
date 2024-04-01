import styles from "./styles.module.css";

export default function Steps(props:any) {
    const wsp_bodas = "https://api.whatsapp.com/send?phone=573126243074&text=Hola%20Lau%F0%9F%92%96,%20estuve%20revisando%20navegando%20tu%20sitio%20web,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20contigo";

    const openWsp = () => {
        props.gaEventTracker('boda agenda tu café conmigo 1')
        window.open(wsp_bodas, '_blank', 'noopener,noreferrer');
    }
    return (
        <>
            <section>
                <div className={"row "+styles.row1}>
                    <div className={"col-md-1"}></div>
                    <div className={"col-md-4"} data-aos="fade-up"  data-aos-duration="2000">
                        <div className={styles.title}>
                            <h2>
                                Así es el paso a paso<br/>
                                para  tu makeup
                            </h2>
                        </div>
                    </div>
                    <div className={"col-md-6"} data-aos="fade-up" data-aos-duration="2000">
                        <div className={styles.btn}>
                            <button onClick={openWsp}>Agenda tu café conmigo</button>
                        </div>
                    </div>
                </div>

                <div className={styles.steps}>
                    <div className={"row "+styles.steps_icons}>
                        <div className={"col-md-2 "+styles.columns} data-aos="fade-right" data-aos-duration="1000">

                            <div className={styles.circle}>
                                <div className={styles.number}>1</div>
                                <img width={40} height={40} src="/images/content/bodas/section3/step1.png" alt="café-con-novias" title="café-con-novias"/>
                            </div>
                            <p>
                                <strong>Primero un cafecito</strong> <br/>
                                Nada mejor que un cafecito para conocernos mejor y poder comprender
                                tus gustos, es el mejor día de tu vida y quiero que la realidad
                                supere tus sueños.
                            </p>
                            <div className={styles.vertical_line}>
                                <img src="/images/content/bodas/section3/vertical-line.png" alt="línea-vertical" title="línea-vertical"/>
                            </div>
                        </div>
                        <div className={"col-md-2 "+styles.columns} data-aos="fade-right" data-aos-duration="1500">
                            <div className={styles.circle}>
                                <div className={styles.number}>2</div>
                                <img width={40} height={40} src="/images/content/bodas/section3/step2.png" alt="Novias" title="Novias"/>
                            </div>
                            <p>
                                <strong>¿Qué tipo de novia eres?</strong> <br/>
                                Me permitiré conocer tu personalidad para darle un toque único y te haré destacar tu belleza en un maquillaje fabuloso.
                            </p>
                            <div className={styles.vertical_line}>
                                <img src="/images/content/bodas/section3/vertical-line.png" alt="línea-vertical" title="línea-vertical"/>
                            </div>
                        </div>
                        <div className={"col-md-2 "+styles.columns} data-aos="fade-right" data-aos-duration="2000">
                            <div className={styles.circle}>
                                <div className={styles.number}>3</div>
                                <img width={40} height={40} src="/images/content/bodas/section3/step3.png" alt="Vestido-de-novias" title="Vestido-de-novias"/>
                            </div>
                            <p>
                                <strong>Estilo con tu vestido</strong> <br/>
                                Combinaré el estilo del vestido con el uso de colores y tonos que van a complementar tus gustos, look y personalidad el día de tu boda.
                            </p>
                            <div className={styles.vertical_line}>
                                <img src="/images/content/bodas/section3/vertical-line.png" alt="línea-vertical" title="línea-vertical"/>
                            </div>
                        </div>

                        <div className={"col-md-2 "+styles.columns} data-aos="fade-right" data-aos-duration="2500">
                            <div className={styles.circle}>
                                <div className={styles.number}>4</div>
                                <img width={40} height={40} src="/images/content/bodas/section3/step4.png" alt="Maquillaje-de-novias" title="Maquillaje-de-novias"/>
                            </div>
                            <p>
                                <strong>Prueba de makeup</strong> <br/>
                                Realizaré una aplicación completa para asegurar colores y tonos adecuados para determinar
                                la mejor forma del maquillaje con el fin de lograr resultados excepcionales.
                            </p>
                            <div className={styles.vertical_line}>
                                <img src="/images/content/bodas/section3/vertical-line.png" alt="línea-vertical" title="línea-vertical"/>
                            </div>
                        </div>

                        <div className={"col-md-2 "+styles.columns} data-aos="fade-right" data-aos-duration="3000">
                            <div className={styles.circle}>
                                <div className={styles.number}>5</div>
                                <img width={40} height={40} src="/images/content/bodas/section3/step5.png" alt="Día-de-boda" title="Día-de-boda"/>
                            </div>
                            <p>
                                <strong>El gran día</strong> <br/>
                                Me encargaré de hacerte lucir hermosa en el día más importantes de la vida de una
                                mujer con una piel suave y natural.
                            </p>
                            <div className={styles.vertical_line}>
                                <img src="/images/content/bodas/section3/vertical-line.png" alt="línea-vertical" title="línea-vertical"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line_steps} data-aos="fade-up" data-aos-duration="1000">
                        <img src="/images/content/bodas/section3/horizontal-line_1.png" alt="línea-horizontal" title="línea-horizontal"/>
                    </div>
                </div>
            </section>
        </>
    )
}
