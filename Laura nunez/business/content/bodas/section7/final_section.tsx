import styles from "./styles.module.css";

export default function FinalSection(props:any) {
    const wsp_bodas = "https://api.whatsapp.com/send?phone=573126243074&text=Hola%20Lau%F0%9F%92%96,%20estuve%20revisando%20navegando%20tu%20sitio%20web,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20contigo";

    const openWsp = () => {
        props.gaEventTracker('boda agenda tu café conmigo 3')
        window.open(wsp_bodas, '_blank', 'noopener,noreferrer');
    }
    return (
        <>
            <section className={styles.principal} data-aos="fade-up" data-aos-duration="2000">
                <div className={styles.content_logo}>
                    <img width={300} height={220} alt="love-yourself-pink" title="love-yourself-pink" src="/images/content/bodas/section7/love-yourself-pink.png" />
                </div>
                <div className={styles.btn}>
                    <button onClick={openWsp}>Agenda tu café conmigo</button>
                </div>
            </section>
        </>
    )
}
