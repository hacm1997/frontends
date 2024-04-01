import styles from './styles.module.css'
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from 'next/router';
import useAnalyticsEventTracker from "../../../services/analytics/useAnalyticsEventTracker";

export default function Navbar() {
    const { t, lang } = useTranslation('header');
    const gaEventTracker = useAnalyticsEventTracker('Inicio');

    const router = useRouter();

    const style0 = {
        color: router.asPath === "/" ? "#e5c265" : "white",
        fontSize: "16px",
        textDecoration: "none",
    };

    const style1 = {
        color: router.asPath === "/pantalla-barrete" ? "#e5c265" : "white",
        fontSize: "16px",
        textDecoration: "none",
    };

    // const style1_2 = {
    //     color: router.asPath === "/pantalla-pantalla-barrete" ? "#e5c265" : "white",
    //     fontSize: "16px",
    //     textDecoration: "none",
    // };

    const style2 = {
        color: router.asPath === "/definir-proyecto" ? "#e5c265" : "white",
        fontSize: "16px",
        textDecoration: "none",
    };

    const [icon, setIcon] = React.useState("bx bx-menu-alt-right");
    const [menu, setMenu] = React.useState(styles.menu);


    const handleMenu = () => {
        if (icon === "bx bx-menu-alt-right") {
            setIcon("bx bx-menu-alt-left");
            setMenu(styles.menuActive);
        } else {
            setIcon("bx bx-menu-alt-right");
            setMenu(styles.menu);
        }
    }

    const analytic = (name:string) =>{
        gaEventTracker(`Clic Menu ${name}`);
    }

    return (
        <>
            <nav>
                <div className={styles.general}>
                    <div className={styles.logo}>
                        <Link href="/" title="Aceros Figurados">
                            <a title="Aceros Figurados"><img src="/images/logo-aceros-figurados.png" alt="Logo" title="Aceros Figurados"/></a>
                        </Link>
                    </div>

                    <div className={menu}>
                        <ul>
                            <li style={style0} title={t("nav.item.home.name")}><Link href={t("nav.item.home.url")} title={t("nav.item.home.name")}><a onClick={() => analytic(t("nav.item.home.name"))} title={t("nav.item.home.name")}>{t("nav.item.home.name")}</a></Link></li>
                            <li style={style1} title={t("nav.item.pantallaBarrete.name")}><Link href={t("nav.item.pantallaBarrete.url")} title={t("nav.item.pantallaBarrete.name")}><a onClick={() => analytic(t("nav.item.pantallaBarrete.name"))} title={t("nav.item.pantallaBarrete.name")}>{t("nav.item.pantallaBarrete.name")}</a></Link></li>
                            <li style={style2} title={t("nav.item.project.name")}><Link href={t("nav.item.project.url")} title={t("nav.item.project.name")}><a onClick={() => analytic(t("nav.item.project.name"))} title={t("nav.item.project.name")}>{t("nav.item.project.name")}</a></Link></li>
                        </ul>

                    </div>
                    <div className={styles.boton}>
                        <Link href={t("nav.item.button.url")} title={t("nav.item.button.name")}>
                            <a target="_blank" title={t("nav.item.button.name")} onClick={() => analytic(t("nav.item.button.name"))}>{t("nav.item.button.name")}</a>
                        </Link>
                    </div>
                    <div onClick={handleMenu} className={styles.botonMovil}>
                        <a title="movil"><i className={icon}></i></a>
                    </div>
                </div>
            </nav>
        </>
    )
}
