import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";

export default function TypePilot() {
    const {t, lang} = useTranslation('home');
    const typesPilot = t<any>("types.list", {}, {returnObjects: true});

    const content = typesPilot.map((item:any, index:number) => (
        <div key={index} className={item.title === 'Pilotaje Kelly' ? styles.typeList : styles.typeList2}>
            <h3 style={{color: item.title === 'Pilotaje Kelly' ? '#ffffff' : '#ffffff'}}>{item.title}</h3>

            <div className={item.title === 'Pilotaje Kelly' ? styles.description : styles.description2}>
                <p>{item.description}</p>
            </div>
        </div>
    ))

    return(
        <>
            <div className={styles.principalContent}>
                <h2>{t("types.title")}</h2>

                <div className={styles.content}>
                    {content}
                </div>
            </div>
        </>
    )
}
