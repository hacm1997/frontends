import styles from "./styles.module.css";
import Card_producto from "./card_producto/card_producto";
import Head from "next/head";
export default function Producto(props: any) {

  return (
    <>
      <div className={styles.productos}>
        <div className={styles.content}>
          <h3>Productos</h3>
        </div>
        <div className={styles.general_productos}>
          <Card_producto products={props.products} setListUpdate={props.setListUpdate} />
        </div>
      </div>
    </>
  );
}
