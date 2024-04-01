import styles from './styles.module.css';
import Head from 'next/head';

export default function zz() {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" sizes="50x50" href="/images/favicon.png"/>
                <title>Acero Figurados S.A.S.</title>
            </Head>
            <section className={styles.section}>
                <div className={styles.subImagen}>
                    <div className={styles.general}>
                        <div className={styles.content_1}>
                            <div className={styles.carretera}>
                                <img src="/images/carretera.png" alt=""/>
                            </div>
                            <img className={styles.maquina} src="/images/maquinas.png" alt="Maquina"/>
                            <img className={styles.maquina_funcional} src="/images/maquina-funcional.png" alt=""/>
                            <img className={styles.gancho} src="/images/gancho.png" alt="Gancho"/>
                            <img className={styles.balla} src="/images/balla.png" alt="Balla"/>
                            <div className={styles.general_tractor}>
                                <img className={styles.tractor} src="/images/tractor.png" alt="Tractor"/>
                            </div>
                            <div className={styles.logo}>
                                <img src="/images/logo-acero-figurado.png" alt=""/>
                            </div>
                            <p>ESTA<span>M</span>OS EN CONSTRUCCIÓN</p>

                        </div>
                        <div className={styles.content_2}>
                            <h2> Puedes encontrarnos en:</h2>
                            <p><a href="https://www.linkedin.com/company/acerosfiguradossas/"><i
                                className='bx bxl-linkedin'></i>Aceros Figurados S.A.S.</a></p>
                            <p><a href="http://wa.me/573104770189"><i className='bx bxl-whatsapp'></i>(+57) 310 477 0189</a>
                            </p>
                            <p><a href="https://g.co/kgs/n8CTES"><i className='bx bx-map'></i>Cra. 8 #64 - 61,
                                Bogotá</a></p>
                            <p><a href="mailto:info@acerosfigurados.com"><i className='bx bx-envelope'></i>info@acerosfigurados.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}