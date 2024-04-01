import type {NextPage} from 'next'
import Index from "./home";
import Layout from "../business/container/general/layout/layout";
import Head from "next/head";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/", title: "Page: Inicio" });
const Home: NextPage = () => {

    return (
        <Layout title={"Laura Nuñez | Convertimos el maquillaje en arte"}
                description={"Deja que Laura Nuñez y su equipo de mujeres apasionadas resalten tu identidad única con el arte del maquillaje. Realza tu belleza en Cartagena, Colombia con soluciones de maquillaje personalizadas."}>
            <Head>
            </Head>
            <Index/>
        </Layout>
    )
}

export default Home
