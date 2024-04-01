import styles from "./styles.module.css";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Language(props:any) {
    const {t, lang} = useTranslation();
    return(
        <>
            <div className={styles.lenguaje_navbar}>
                <div className="btn-group">
                    <button className={"btn dropdown-toggle " + styles.btn_nav} type="button"
                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <a href={lang === 'es' ? "#" : '/'} title={lang === 'es' ? "Espñaol" : 'English'}>{lang === 'es' ? props.lang1 : props.lang2}</a>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href={lang === 'en' ? "/es" : '/en'} title={lang === 'es' ? "Español" : 'English'}>{ lang === 'en' ? props.lang1 : props.lang2}</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
