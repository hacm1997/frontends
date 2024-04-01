import type {NextPage} from 'next'
import Layout from "../../business/container/layout/layout";
import HeaderPilotaje from "../../business/container/views/pantalla-barrete/headerPilotaje/headerPilotaje";
import UltimaTecnologia from "../../business/container/views/pantalla-barrete/ultimaTecnologia/ultimaTecnologia";
import PersonalizaProceso from "../../business/container/views/pantalla-barrete/personalizaProceso/personalizaProceso";
import EmpresaQueConfian from "../../business/container/views/pilotaje/empresasQueConfian/empresaQueConfian";
import FormPrincipal from "../../business/component/forms/formPrincipal/formPrincipal";
import {useEffect, useState} from "react";
import useAnalyticsEventTracker from "../../services/analytics/useAnalyticsEventTracker";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/pantalla-barrete", title: "Pantalla y Barrete" });
const Home: NextPage = () => {
    const gaEventTracker = useAnalyticsEventTracker('Pantalla-Barrete');
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    return (
        <>
            <Layout>
                <HeaderPilotaje />
                <UltimaTecnologia gaEventTracker={gaEventTracker}/>
                <PersonalizaProceso gaEventTracker={gaEventTracker}/>
                <EmpresaQueConfian/>
                <FormPrincipal gaEventTracker={gaEventTracker}/>
            </Layout>
        </>
    )
}

export default Home
