import type {NextPage} from 'next'
import Layout from "../../business/container/general/layout/layout";

import Vista_disponibles from "../../business/container/views/vista_disponibles/vista_disponibles";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import TitleHeader from '../../business/container/views/hospedaje/header/title_header/title_header';
import Soon from '../../business/container/views/comprar_apartamento/soon/soon';
import BannerFrase from '../../business/content/banner_frase/banner_frase';
import { BannerSale } from '../../business/container/views/comprar_apartamento/bannerSale/BannerSale';
import { useState } from 'react';


const Home: NextPage = () => {
    const {t,lang}=useTranslation("buy")
    const [disable, setDisable] = useState(false);
    return (
        <>
            <Layout>
                <Head>
                    <title> {t('pageTitle')} | Inmobiliaria MFR</title>
                </Head>
                <h1 style={{display: 'none'}}>apto cartagena por días</h1>
                <BannerSale/>
                {disable ? 
                    <Soon />
                :
                    <Vista_disponibles setDisable={setDisable}/>
                }
            
            </Layout>
        </>
    )
}

export default Home
