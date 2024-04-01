import styles from "./styles.module.css";

export default function Banner_herramienta({content}:any) {
    const link_wsp = "https://wa.link/5yfdcc";
    return (
        <>
            <div className={styles.banner_herramienta}>
                <div className={styles.content}>
                    <h3>{content.bannerTitle}</h3>
                    <a href={link_wsp} title={content.bannerTitle} target="_blank">Cotizar</a>
                </div>

                <div className={styles.multimedia}>
                    <img src={content.imgUrl} alt={content.imgAlt} title={content.imgAlt}/>
                </div>
            </div>
        </>
    )
}
