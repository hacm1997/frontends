import styles from "./styles.module.css";
import type { NextPage } from 'next'
import React, {useEffect, useState} from "react";
import Layout from "../../business/container/general/layout/layout";
import Head from "next/head";
import MakeUps from "../../business/content/makeups/artistics/section1/section1";
import TipoMaquillaje from "../../business/content/makeups/artistics/section2/section2";
import EndMaqPage from "../../business/content/makeups/artistics/section3/section3";
import useAnalyticsEventTracker from "../../service/analytics/useAnalyticsEventTracker";
import ReactGA from "react-ga4";

const Artistic: NextPage = () =>
{
    ReactGA.send({ hitType: "pageview", page: "/artisticos", title: "Page: Maquillaje Artístico" });

    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <>
            <Layout title={"Maquillaje Artístico | Laura Nuñez"} description={"Da rienda suelta a tu belleza interior con un maquillaje artístico creativo y personalizado realizado por mujeres apasionadas. Disfruta de la aventura de descubrir tu verdadera identidad."}>
                <MakeUps />
                <TipoMaquillaje />
                <EndMaqPage />
            </Layout>
        </>
    )
}

export default Artistic
