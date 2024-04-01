import styles from "./styles.module.css";

export default function GaleryWoman() {

    return (
        <>
            <section>
                <div className={styles.grid_background} title="galeria-novias" data-aos="fade-up" data-aos-duration="2000">
                    <div className={styles.self_logo}>
                        <img width={300} height={100} src="/images/content/bodas/section5/self-love.png" alt="self-love" title="elf-love"/>
                    </div>
                </div>
                <div className={"row "+styles.images} data-aos="fade-up" data-aos-duration="2000">
                    <div className={"col-md-4"} >
                        <div className={styles.women1}>
                            <img width={380} height={570} src="/images/content/bodas/section5/woman2.JPG" alt="Vestido-de-novia" title="Vestido-de-novia"/>
                        </div>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={styles.women2}>
                            <img width={300} height={400} src="/images/content/bodas/section5/woman1.JPG" alt="Flores-para-novia" title="Flores-para-novia"/>
                        </div>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={styles.women3}>
                            <img width={380} height={570} src="/images/content/bodas/section5/woman3.JPG" alt="Maquillaje-de-rosa" title="Maquillaje-de-rosa"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
