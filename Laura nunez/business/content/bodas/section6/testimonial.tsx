import styles from "./styles.module.css";
import TestimonialSlidersBodas from "../../testimonial/bodas/slider";

export default function Testimonial() {

    return (
        <>
            <section className={styles.background} title="Reseñas" >

                <div className={styles.title} data-aos="fade-up" data-aos-duration="2000">
                    <h4>Tu opinión es mega<br /> importante para nosotros</h4>
                </div>

                <div className={styles.testiomonials} data-aos="fade-up" data-aos-duration="2000">
                    <TestimonialSlidersBodas />
                </div>

            </section>
        </>
    )
}
