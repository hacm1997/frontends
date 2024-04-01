import styles from "./styles.module.css";
import type { NextPage } from 'next'
import Head from "next/head";
import QuienSoy from "../../business/content/home_page/section1/section1";
import YearExp from "../../business/content/home_page/section2/section2";
import MakeUpsHome from "../../business/content/home_page/section3/section3";
import Opinios from "../../business/content/home_page/section4/section4";
import useAnalyticsEventTracker from "../../service/analytics/useAnalyticsEventTracker";

const Index: NextPage = () => {
    const gaEventTracker = useAnalyticsEventTracker('Inicio');
    return (
        <>

            <QuienSoy gaEventTracker={gaEventTracker}/>
            <YearExp />
            <MakeUpsHome />
            <Opinios />
        </>
    )
}

export default Index
