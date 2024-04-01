import styles from "./styles.module.css";
import Formulario from "./formulario/formulario";
import Producto from "./producto/producto";
import { useCookies } from "react-cookie";
import { Head } from "next/document";
import {useState} from "react";
export default function Cotizar(props: any) {
    const [cookies, setCookie, removeCookie] = useCookies();
    console.log("props.products => ",cookies);
    console.log("props.products.Copy => ",cookies.productsCopy);
    const [listUpsate, setListUpdate] = useState<any>([])
  return (
    <>
      <div className={styles.apoyoGrafico}></div>
      <section className={styles.section}>
        <div className={styles.form}>
          <Formulario products={listUpsate} />
        </div>
        <Producto productsCopy={cookies.productscopy} products={cookies.products} setListUpdate={setListUpdate} />
      </section>
    </>
  );
}
