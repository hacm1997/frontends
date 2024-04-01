import styles from './styles.module.css'
import CardProceso from "../../../../component/cards/cardProceso/cardProceso";
import useTranslation from "next-translate/useTranslation";
export default function PersonalizaProceso(props:any) {
    const { t, lang } = useTranslation('pantalla-barrete');
    const stepProcess = t<any>("customizeProcess.steps", {},{returnObjects: true});

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>{t("customizeProcess.title")}</h2>
                        <p>{t("customizeProcess.content")}</p>
                    </div>
                    <div className={styles.cardGeneral}>
                        {
                            stepProcess.map((e:any, i:any ) => (
                                <CardProceso steps={e.step} imgSteps={e.stepIcon} index={i} key={i} />
                            ))

                        }
                    </div>

                    <div className={styles.boton}>
                        <a title="Button" className={styles.btn_personaliza} href={t("header:nav.item.button.url")} target="_blank" rel="noreferrer">Personalizar ahora</a>
                    </div>
                </div>
            </section>
        </>
    )
}
