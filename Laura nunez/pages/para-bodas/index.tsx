import styles from "./styles.module.css";
import type { NextPage } from 'next'
import React, {lazy, Suspense, useEffect, useState} from "react";
import Layout from "../../business/container/general/layout/layout";
import Head from "next/head";
import PrincipalSection from "../../business/content/bodas/section1/principal";
import SecondSection from "../../business/content/bodas/section2/second";
import Steps from "../../business/content/bodas/section3/steps";
import AllForYou from "../../business/content/bodas/section4/for_you";
import GaleryWoman from "../../business/content/bodas/section5/galery";
import Testimonial from "../../business/content/bodas/section6/testimonial";
import FinalSection from "../../business/content/bodas/section7/final_section";
import useAnalyticsEventTracker from "../../service/analytics/useAnalyticsEventTracker";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/para-bodas", title: "Page: Bodas" });
const Artistic: NextPage = () => {

    const gaEventTracker = useAnalyticsEventTracker('Menu');
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <>
            <Layout title={"Bodas - Laura Nuñez | Prepárate para tu día especial"} description={"Prepárate para tu día especial con Laura Nuñez Makeup. Nuestro maquillaje creativo y versátil te ayudará a brillar en tu gran día."}>
                <PrincipalSection gaEventTracker={gaEventTracker} />
                <SecondSection />
                <Steps gaEventTracker={gaEventTracker}/>
                <AllForYou gaEventTracker={gaEventTracker}/>
                <GaleryWoman />
                <Testimonial />
                <FinalSection gaEventTracker={gaEventTracker}/>
            </Layout>
        </>
    )
}

export default Artistic
