import styles from "./styles.module.css";
import type { NextPage } from 'next'
import React, {useEffect, useState} from "react";
import Layout from "../../business/container/general/layout/layout";
import Head from "next/head";
import MakeUpsSpecials from "../../business/content/makeups/social/section1/section1";
import TipoMaquillajeSpecial from "../../business/content/makeups/social/section2/section2";
import EndMaqPage from "../../business/content/makeups/social/section3/section3";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/social", title: "Page: Maquillaje Social" });
const Special: NextPage = () => {

    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <>
            <Layout title={"Maquillaje Social | Laura Nuñez"} description={"Deja que tu belleza prevalezca con la mejor maquilladora de Cartagena, Laura Nuñez. Disfruta de una aventura de creatividad y versatilidad con un maquillaje diseñado especialmente para ti."}>
                <MakeUpsSpecials />
                <TipoMaquillajeSpecial />
                <EndMaqPage />
            </Layout>
        </>
    )
}

export default Special
