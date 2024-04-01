import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import common from "../../../services/common.json";
import styles from "./styles.module.css";
import Layout from "../../../business/container/general/layout/layout";
import Banner from "../../../business/container/general/views/productos/banner/banner";
import Tipo from "../../../business/container/general/views/productos/tipo/tipo";
import products from "../../../services/productos.json";
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";

function Home() {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [productos, setProductos] = useState([products]);
    const [defineType, setDefineType] = useState("");
    const [showChild, setShowChild] = useState(false);
    const [itemOffset, setItemOffset] = useState(0);
    const [closedCart, setClosedCart] = useState(true);

    const endOffset = itemOffset + 8;

    const navbar = common.navbar;
    const apiProductos: any = products;
    const typeVerify = cookies.title || "";
    const {
        query: {tipe},
    } = router;

    const style0 = {
        color: router.asPath === navbar.productos.types.abrazaderas ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.abrazaderas ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",

    };
    const style01 = {
        color: router.asPath === navbar.productos.types.clavos ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.clavos ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",

    };
    const style1 = {
        color: router.asPath === navbar.productos.types.tornillos ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.tornillos ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",

    };
    const style2 = {
        color:
            router.asPath === navbar.productos.types.tuercas ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.tuercas ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };
    const style3 = {
        color:
            router.asPath === navbar.productos.types.arandelas ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.arandelas ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };
    const style4 = {
        color:
            router.asPath === navbar.productos.types.manual
                ? "#ffffff"
                : "black",
        border: router.asPath === navbar.productos.types.manual ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };
    const style5 = {
        color:
            router.asPath === navbar.productos.types.varillas ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.varillas ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };
    const style6 = {
        color:
            router.asPath === navbar.productos.types.bristol ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.bristol ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };
    const style7 = {
        color:
            router.asPath === navbar.productos.types.guasas
                ? "#ffffff"
                : "black",
        border: router.asPath === navbar.productos.types.guasas ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };
    const style8 = {
        color:
            router.asPath === navbar.productos.types.anclajes ? "#ffffff" : "black",
        border: router.asPath === navbar.productos.types.anclajes ? "solid 1px #ffffff" : " solid 1px black",

        fontSize: "14px",
        cursor: "pointer",
    };
    const style9 = {
        color:
            router.asPath === navbar.productos.types.metalicos
                ? "#ffffff"
                : "black",
        border: router.asPath === navbar.productos.types.metalicos ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };
    const style10 = {
        color:
            router.asPath === navbar.productos.types.tornilleria
                ? "#ffffff"
                : "black",
        border: router.asPath === navbar.productos.types.tornilleria ? "solid 1px #ffffff" : " solid 1px black",
        fontSize: "14px",
        cursor: "pointer",
    };

    useEffect(() => {
        if (tipe) {
            // @ts-ignore
            setDefineType(tipe);
        } else {
            setDefineType(typeVerify);
        }

        switch (defineType) {
            case "abrazaderas":
                setProductos(apiProductos.abrazaderas.items);
                break;
            case "clavos":
                setProductos(apiProductos.clavos.items);
                break;
            case "tornillos":
                setProductos(apiProductos.tornillos.items);
                break;
            case "tornilleria":
            setProductos(apiProductos.tornilleria.items);
            break;
            case "tuercas":
                setProductos(apiProductos.tuercas.items);
                break;
            case "arandelas":
                setProductos(apiProductos.arandelas.items);
                break;
            case "manual":
                setProductos(apiProductos.manual.items);
                break;
            case "varillas":
                setProductos(apiProductos.varillas.items);
                break;
            case "bristol":
                setProductos(apiProductos.bristol.items);
                break;
            case "aceroinoxidable":
                setProductos(apiProductos.aceroinoxidable.items);
                break;
            case "anclajes":
                setProductos(apiProductos.anclajes.items);
                break;
            case "metalicos":
                setProductos(apiProductos.metalicos.items);
                break;
            case "guasas":
                setProductos(apiProductos.guasas.items);
                break;
        }

        setShowChild(true);
    });

    if (!showChild) {
        return null;
    }
    const cardPerPage = 8;
    const PagesVisited = itemOffset * cardPerPage;
    let currentItems = productos.slice(PagesVisited, PagesVisited + cardPerPage);

    return (
        <>
            <Layout setClosedCart={setClosedCart}>
                <Head>
                    <title>Productos - Backoom</title>
                    <meta name="description" content="Tipos de productos - Backoom" />
                </Head>
                <Banner>
                    <h1>Tornillos industriales</h1>
                    <nav className={styles.nav}>
                        <Link href={navbar.productos.types.abrazaderas} title="Abrazaderas">
                           <p
                                style={style0}
                                className={
                                    router.pathname == navbar.productos.types.abrazaderas
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Abrazaderas
                           </p>
                        </Link>
                        <Link href={navbar.productos.types.arandelas} title="Arandelas">
                            <p
                                style={style3}
                                className={
                                    router.pathname == navbar.productos.types.arandelas
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Arandelas
                            </p>
                        </Link>
                        <Link href={navbar.productos.types.clavos} title="Clavos">
                           <p
                                style={style01}
                                className={
                                    router.pathname == navbar.productos.types.clavos
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Clavos
                           </p>
                        </Link>
                        <Link href={navbar.productos.types.tornillos} title="Tornillos">
                            <p
                                style={style1}
                                className={
                                    router.pathname == navbar.productos.types.tornillos
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Tornillos
                            </p>
                        </Link>
                        <Link href={navbar.productos.types.tuercas} title="Tuercas">
                            <p
                                style={style2}
                                className={
                                   router.pathname == navbar.productos.types.tuercas
                                       ? "active"
                                        : "non-active"
                                }
                            >
                                Tuercas
                            </p>
                        </Link>
                        <Link href={navbar.productos.types.manual} title="Herramienta manual">
                            <p
                                style={style4}
                                className={
                                    router.pathname == navbar.productos.types.manual
                                       ? "active"
                                        : "non-active"
                                }
                            >
                                Herramienta manual
                            </p>
                        </Link>
                        {/* <Link href={navbar.productos.types.industrialliviana} title="Tornillería industrial liviana">
                            <p
                                style={style4}
                                className={
                                    router.pathname == navbar.productos.types.industrialliviana
                                       ? "active"
                                        : "non-active"
                                }
                            >
                                Tornillería industrial liviana
                            </p>
                        </Link> */}
                        <Link href={navbar.productos.types.anclajes} title="Anclajes">
                            <p
                                style={style8}
                                className={
                                    router.pathname == navbar.productos.types.anclajes
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Anclajes
                            </p>
                        </Link>
                        <Link href={navbar.productos.types.tornilleria} title="Tornilleria">
                            <p
                                style={style10}
                                className={
                                    router.pathname == navbar.productos.types.tornilleria
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Tornilleria
                            </p>
                        </Link>
                        <Link href={navbar.productos.types.metalicos} title="Metalicos">
                            <p
                                style={style9}
                                className={
                                    router.pathname == navbar.productos.types.metalicos
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Empaques metálicos
                            </p>
                        </Link>
                        <Link href={navbar.productos.types.guasas} title="Guasas">
                            <p
                                style={style7}
                                className={
                                    router.pathname == navbar.productos.types.guasas
                                        ? "active"
                                        : "non-active"
                                }
                            >
                                Guasas
                            </p>
                        </Link>
                    </nav>
                </Banner>
                <Tipo
                    closedCart={closedCart}
                    setClosedCart={setClosedCart}
                    itemOffset={itemOffset}
                    itemsPerPage={cardPerPage}
                    setItemOffset={setItemOffset}
                    currentItems={currentItems}
                    productos={productos}
                />
            </Layout>
        </>
    );
}

export default Home;
