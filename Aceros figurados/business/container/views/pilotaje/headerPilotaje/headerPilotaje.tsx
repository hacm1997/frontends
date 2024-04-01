import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";

export default function HeaderPilotaje() {
    const { t, lang } = useTranslation('home');
    return (
        <>
            <div className={styles.header} style={{backgroundImage: `url(${t("Header.image")})`}} title="Principal">
                <div className={styles.general}>
                    <div className={styles.content}>
                        <span>Somos expertos en</span>
                        <h1>{t("Header.title")}</h1>
                        <p>{t("Header.content")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
