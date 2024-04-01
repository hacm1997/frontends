import styles from "./styles.module.css";

export default function SecondSection() {

    return (
        <>
            <section className={styles.secondBanner}>
                <div className={"row"}>
                    <div className={"col-md-1"}></div>
                    <div className={"col-md-3 "+styles.back1} data-aos="fade-up"  data-aos-duration="2000">
                        <div className={styles.logo} title="fondo-logo-self-love-club" >
                            <img width={200} height={150} src="/images/content/bodas/section2/self-love-club-3.png" alt="self-love-club" title="self-love-club"/>
                        </div>
                    </div>
                    <div className={"col-md-2 "+styles.content_imgBoda} data-aos="zoom-in"  data-aos-duration="2000">
                        <div className={styles.img_boda}>
                            <img width={370} height={520} src="/images/content/bodas/section2/camila_nott.jpg" alt="Base-de-maquillaje" title="Base-de-maquillaje"/>
                        </div>
                    </div>
                    <div className={"col-md "+styles.back2} data-aos="fade-up"  data-aos-duration="2000">
                        <div className={styles.text} title="Experiencias" >
                            <p>
                                Cada experiencia contigo es para nosotros un momento para la creatividad,
                                pero sobre todo, para conocerte a ti y resaltar tu belleza en cada una
                                de las etapas de tu vida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
