import styles from "./styles.module.css";
import Card from "./card/card";

export default function Categoria(props: any) {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.general}>
                    <div className={styles.title}>
                        <i className='bx bx-minus'></i>
                        <h2>Tipos de tornillos</h2>
                    </div>
                    <div className={styles.general_categoria}>
                        <Card img={'/images/productos/categoria/acero1.jpg'} alt={'tornillos'} title={'Acero 1'}/>
                        <Card img={'/images/productos/categoria/largos.jpg'} alt={'tornillos'} title={'Largos'}/>
                        <Card img={'/images/productos/categoria/cortos.jpg'} alt={'tornillos'} title={'Cortos'}/>
                        <Card img={'/images/productos/categoria/acero-inoxidable.jpg'} alt={'tornillos'}
                              title={'Acero inoxidable'}/>
                    </div>

                </div>

            </section>
            <div className={styles.apoyoGrafico}></div>
        </>
    )
}