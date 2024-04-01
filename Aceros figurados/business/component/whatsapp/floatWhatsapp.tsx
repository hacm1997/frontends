import styles from "./styles.module.css";
import useAnalyticsEventTracker from "../../../services/analytics/useAnalyticsEventTracker";

export default function FloatWhatsapp() {
    const gaEventTracker = useAnalyticsEventTracker('Wsp');

    const analytic = () => {
        gaEventTracker('clic whatsapp flotante')
    }
    return (
        <>
            <a
                href="https://api.whatsapp.com/send?phone=573146385078&text=%C2%A1Hola%20Aceros Figuradps!%F0%9F%94%A9%20Vengo%20tu%20sitio%20web,%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20productos.%20"
                target="_blank"
                rel="noreferrer"
                title="Whatsapp"
                className={styles.float}
                onClick={analytic}
            >
                <i className='bx bxl-whatsapp'></i>
            </a>
        </>
    )
}
