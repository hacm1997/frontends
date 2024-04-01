import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";
import useAnalyticsEventTracker from "../../../services/analytics/useAnalyticsEventTracker";

export default function Footer() {
    const gaEventTracker = useAnalyticsEventTracker('Footer');
    const {t, lang} = useTranslation('footer');
    const social_iten = t("social.item", {}, {returnObjects: true});

    const analytic = (name:string) =>{
        gaEventTracker(`Clic footer ${name}`);
    }
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.general}>
                    <div className={styles.content_1}>
                        <div className={styles.logo}>
                            <img src="/images/logo-aceros-figurados.png" alt="logo-aceros-figurados" title="Aceros Figurados"/>
                        </div>
                        <h2>{t("about.title")}</h2>
                        <p>{t("about.content")}</p>
                    </div>

                    <div className={styles.content_2}>
                        <h2>{t("contact.title")}</h2>
                        <div className={styles.infoUbi}>
                            <div className={styles.itenUbi}>
                                <a onClick={() => analytic('Google Maps')} href="https://goo.gl/maps/jiN3Jy5YNNjf7qpz7?coh=178571&entry=tt" target="_blank" title="Google Map Aceros" rel="noreferrer">
                                    <i className='bx bx-map'></i>
                                </a>
                                <div className={styles.info}>
                                    <p>{t("contact.direction")}</p>
                                </div>
                            </div>

                            <div className={styles.itenUbi}>
                                <i className='bx bx-phone'></i>
                                <div className={styles.info}>
                                    <p>{t("contact.phone")}</p>
                                </div>
                            </div>

                            <div className={styles.itenUbi}>
                                <i className='bx bx-time-five'></i>
                                <div className={styles.info}>
                                    <p>{t("schedule.title")}</p>
                                    <p>{t("schedule.content")}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.content_3}>
                        <h2>Redes sociales</h2>
                        <div className={styles.social}>
                            {// @ts-ignore
                                social_iten?.map((item: any, index: number) => {
                                    return (
                                        <a onClick={() => analytic(item.name)} key={index} href={item.link} target="_blank" title="Social Media" rel="noreferrer"> <i className={item.icon}></i></a>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
