import styles from './styles.module.css'
import FormContacto from "./form_contacto/form_contacto";
import FormPersonalizar from "./form_personalizar/form_personalizar";
import { useState } from 'react';

export default function Producto({ producto }: any) {
  const [enableArea, setEnableArea] = useState(true);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.general}>
          <FormContacto enableArea={enableArea} setEnableArea={setEnableArea} />
          <FormPersonalizar producto={producto} enableArea={enableArea} setEnableArea={setEnableArea} />
        </div>
      </section>
    </>
  )
}