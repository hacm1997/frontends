import styles from "./styles.module.css";
import Formulario from "./formulario/formulario";
import inicio from "../../../../../../services/inicio.json"

export default function Contacto() {
    const contacto = inicio.contacto;

    return (
        <>
            <section className={styles.section} title={contacto.containterTitle}>
                <Formulario
                  contact={contacto}
                />
            </section>
        </>
    )
}
