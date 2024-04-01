import type {NextPage} from 'next'
import Layout from "../business/container/layout/layout";
import HeaderPilotaje from "../business/container/views/pilotaje/headerPilotaje/headerPilotaje";
import UltimaTecnologia from "../business/container/views/pilotaje/ultimaTecnologia/ultimaTecnologia";
import PersonalizaProceso from "../business/container/views/pilotaje/personalizaProceso/personalizaProceso";
import EmpresaQueConfian from "../business/container/views/pilotaje/empresasQueConfian/empresaQueConfian";
import FormPrincipal from "../business/component/forms/formPrincipal/formPrincipal";
import {useEffect, useState} from "react";
import TypePilot from "../business/container/views/pilotaje/typePilot/typePilot";
import useAnalyticsEventTracker from "../services/analytics/useAnalyticsEventTracker";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/", title: "Inicio" });
const Home: NextPage = () => {
    const [showChild, setShowChild] = useState(false);
    const gaEventTracker = useAnalyticsEventTracker('Inicio');
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <>
            {/* INDEX PAGE */}
            <Layout>
                <HeaderPilotaje />
                <TypePilot />
                <UltimaTecnologia gaEventTracker={gaEventTracker}/>
                <PersonalizaProceso gaEventTracker={gaEventTracker}/>
                <EmpresaQueConfian/>
                <FormPrincipal gaEventTracker={gaEventTracker}/>
            </Layout>
        </>
    )
}

export default Home
