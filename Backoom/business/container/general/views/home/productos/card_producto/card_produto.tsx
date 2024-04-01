import styles from "./styles.module.css";
import Content from "../content/content";

export default function CardProducto({ index, content }: any) {
  return (
    <>
      <div className={styles.card} key={index}>
        <div className={styles.multimedia}>
          <img src={content.img} alt={content.alt} title={content.alt}/>
          <div>
            <h3>{content.name}</h3>
          </div>
        </div>
        <div className={styles.content}>
          <Content
            title={content.name}
            description={content.description}
            urlRedirection={content.urlRedirect}
            key={index}
            index={index}
          />
        </div>
      </div>
    </>
  );
}
