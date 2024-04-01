import styles from "./styles.module.css";
import CardProducto from "./card_producto/card_produto";
import Banner_herramienta from "./banner_herramienta/banner_herramienta";
import inicio from "../../../../../../services/inicio.json";

export default function Productos() {
  const title = inicio.products.title;
  const productos = inicio.products.items;
  const bannerHerramienta = inicio.products.toolsBanner;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.general}>
          <div className={styles.producto_general}>
            {productos.map((e: any, index: any) => {
              return <CardProducto content={e} key={index} index={index} />;
            })}
          </div>
          <Banner_herramienta content={bannerHerramienta} />
        </div>
      </section>
    </>
  );
}
