import React, {useContext, useEffect, useState} from "react";
import styles from "./styles.module.css";
import common from "../../../../services/common.json";
import Link from "next/link";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";
import {useGlobalContext} from "../../../content/context/global_var";

function Navbar({setClosedCart, closedCart}: any) {
    const router = useRouter();

    const [cookies, setCookie, removeCookie] = useCookies();
    const [state, setState] = useState<{ icon: any; menu: any }>({
        icon: "bx bx-menu-alt-right",
        menu: styles.menu,
    });
    const navbar = common.navbar;

    const homeBtnStyle = {
        color: router.asPath === "/" ? "#fff600" : "white",
        fontSize: "16px",
    };

    const productsBtnStyle = {
        color: router.asPath === "/productos" ? "#fff600" : "white",
        fontSize: "16px",
        cursor: "pointer",
    };

    const blogBtnStyle = {
        color: router.asPath === "/blog" ? "#fff600" : "#ffffff",
        fontSize: "16px",
        cursor: "pointer",
    };

    const priceBtnStyle = {
        color: router.asPath === "/cotizar" ? "#fff600" : "#ffffff",
        fontSize: "16px",
        cursor: "pointer",
    };

    const styleProducts = {
        color: router.asPath.lastIndexOf("servicios") === 1 ? "#fff600" : "#white",
    };
    const style = {
        color:
            router.asPath === "/servicios/esofagogastroduodenoscopia"
                ? "#fff600"
                : "#white",
    };

    const handleMenu = () => {
        const menu = styles.menu;
        const icon = "bx bx-menu-alt-right";
        menu !== state.menu
            ? setState({menu: menu, icon: icon})
            : setState({menu: styles.menuActive, icon: "bx bx-menu-alt-left"});
        icon !== state.icon
            ? setState({icon: icon, menu: menu})
            : setState({icon: "bx bx-menu-alt-left", menu: styles.menuActive});
    };

    const [market, setMarket] = useState([]);
    const {value, setValue} = useGlobalContext();

    useEffect(() => {
        setMarket(cookies.products);
    }, [cookies]);

    //console.log("GLOBAL COUNT MARKET => ",value);
    return (
        <>
            <nav>
                <div className={styles.general}>
                    <Link href={navbar.logo.url}>
                        <div className={styles.logo} title={navbar.logo.alt}>
                            <img src={navbar.logo.srcImg} alt={navbar.logo.alt} title={navbar.logo.alt}/>
                        </div>
                    </Link>

                    <div className={styles.boton}>
                        <a href={navbar.bookingBtn.url} target="_blank" title={navbar.bookingBtn.name}>
                            {navbar.bookingBtn.name}
                        </a>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
