/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "./styles.module.css";


export default function Badge(props:any) {
    return(
        <>
            <a className="navbar-brand" href="/">
                <img className={styles.logo_mfr}
                      src={props.image}
                      alt="Logo | MFR" title="Inmobiliaria MFR"/>
            
            </a>
        </>
    );
}
