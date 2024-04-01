import styles from "./styles.module.css";
import * as React from "react";
import Share from "../share/share";

export default function Title(props:any) {
    return(
        <>
            <div className={styles.title}>
                <h4><img src="/images/elemento-grafico-flecha.png" alt=""/>{props.title}</h4>
                <Share href={props.href} translate={props.translate}/>
            </div>
        </>
    )
}
