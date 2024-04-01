import styles from "./footer.module.css";
import Link from "next/link";
import useAnalyticsEventTracker from "../../../../service/analytics/useAnalyticsEventTracker";

export default function Footer() {
    const gaEventTracker = useAnalyticsEventTracker('Footer');

    const analytic = (name:string) => {
        gaEventTracker(`Clic footer ${name}`)
    }
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.display}>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className={styles.footer_content +" col-md-2"}>
                            <div className={styles.aling_content1}>
                                <p className={styles.tituRedes}>
                                    <strong>Redes sociales</strong>
                                </p>
                                <div className={styles.rSocial}>

                                    <Link href="https://www.instagram.com/lauranunezmakeup/?next=%2F" passHref>
                                        <a target="_blank" onClick={() => analytic('Instagram')} className={styles.icoI} title="Instagram">
                                            <img width={50} height={50}
                                                 className={styles.ico + " hoverIcon rounded-circle"}
                                                 src="/images/footer/networks/instagram.png" alt="Instagram-Laura-Nuñez" title="Instagram"/>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/lauranunezmakeup" passHref>
                                        <a target="_blank" onClick={() => analytic('Facebook')} className={styles.icoF} title="Facebook">
                                            <img width={50} height={50}
                                                 className={styles.ico + " hoverIcon rounded-circle"}
                                                 src="/images/footer/networks/facebook.png" alt="Facebook-Laura-Nuñez" title="Facebook"/>
                                        </a>
                                    </Link>
                                    <Link href="https://www.tiktok.com/@lauranunezmakeup?_t=8XNgBJh5COT&_r=1" passHref>
                                        <a target="_blank" onClick={() => analytic('Tik-tok')} className={styles.icoT} title="Tik-tok">
                                            <img width={50} height={50}
                                                 className={styles.ico + " hoverIcon rounded-circle"}
                                                 src="/images/footer/networks/tik-tok.png" alt="Tik-Tok-Laura-Nuñez" title="Tik Tok"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.policy}>
                                    <Link href="/policy/Terminos y condiciones - Laura Nuñez.pdf" title="Términos y condiicones">
                                        <a target="_blank" onClick={() => analytic('Política tratamiento')} title="Política tratamiento"><p>Ver política de tratamiento <br/>y datos personales</p></a>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className={styles.logo_footer}>
                                <img width={290} height={79} className={styles.imgfooter} src="/images/logo/logo-blanco_1.png" alt="Logo-Laura-Nuñez" title="Logo-Laura-Nuñez"/>
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                        <div className={"col-md-3 align-self-end"}>
                            <p className={styles.tituContacto}>
                                <strong>Contacto</strong>
                            </p>
                            <div className={styles.icoCont_tel}>


                                <img
                                    width={50}
                                    height={50}
                                    className="rounded-circle"
                                    src="/images/footer/contact/phone.png"
                                    alt="teléfono-contacto"
                                    title="teléfono-contacto"
                                />
                                {" "}

                                <p className={styles.contenidoContacto}>

                                    &nbsp;&nbsp; (+57) 312 6243074
                                </p>
                            </div>

                            <div className={styles.icoCont_hours}>


                                <img
                                    width={50}
                                    height={50}
                                    className="rounded-circle"
                                    src="/images/footer/contact/hour.png"
                                    alt="horario-atención"
                                    title="horario-atención"
                                />
                                {" "}

                                <p className={styles.contenidoContacto}>
                                    &nbsp;&nbsp; Horario de atención
                                    <br/>
                                    &nbsp;&nbsp; Lunes a Viernes
                                    <br/>
                                    &nbsp;&nbsp; 8:00 am a 7:00 pm
                                </p>
                            </div>

                            <div className={styles.icoCont}>


                                <img
                                    width={50}
                                    height={50}
                                    className="rounded-circle"
                                    src="/images/footer/contact/email.png"
                                    alt="correo-electrónico"
                                    title="correo-electrónico"
                                />
                                {" "}

                                <p className={styles.contact_email}>
                                    &nbsp;&nbsp; laura@lauranunez.co
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br/>
                            <p className={styles.desarrollado}>
                                Desarrollado por{" "}
                                <Link
                                    href="https://kru360.com/?utm_source=Pagina+web&utm_medium=Clic&utm_campaign=mfr&utm_id=mfr"
                                    passHref>
                                    <a className={styles.kru}
                                       title="KRU"
                                       onClick={() => analytic('KRU')}
                                       target="_blank">
                                        KRU 🚀
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
