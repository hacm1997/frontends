import styles from "./styles.module.css";
import TestimonialSliders from "../../testimonial/home/slider";

export default function Opinios() {

    return (
        <>
            <section className={styles.background}>
                <div className={styles.title} data-aos="fade-up"  data-aos-duration="2000">
                    <h3>Tu opinión es mega<br/> importante para nosotros</h3>
                </div>

                <div className={styles.testiomonials} data-aos="fade-up"  data-aos-duration="2000">
                    <TestimonialSliders />
                </div>
            </section>
        </>
    )
}
