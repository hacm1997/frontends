import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../../components/general/layout/layout.component";
import RightBannerComponent from "../../components/general/views/servicesRight/principalBanner/rightBanner.component";
import OurTeamComponent from "../../components/general/views/servicesRight/ourTeam/ourTeam.component";
import TeamComponent from "../../components/general/views/person-templates/our-team/ourTeam.component";
import OurServicesComponent from "../../components/general/views/servicesRight/ourServices/ourServices.component";
import ContactComponent from "../../components/general/views/servicesRight/contact/contact.component";
import FormServiceComponent from "../../components/general/views/servicesRight/form/form.component";
import axios from "axios";
import useAnalyticsEventTracker from "../../services/analytics/useAnalyticsEventTracker";


export default function Home() {
    const [titlePage, setTitlePage] = useState('');
    const router = useRouter();
    const {id}:any = router.query;
    const [service, setService] = useState('');
    const gaEventTracker = useAnalyticsEventTracker('Servicio empresas');

    useEffect(()=>{
        setService(id.toString());
    },[router.asPath])

    const colData = "https://www.datos.gov.co/resource/xdk5-pm3f.json";
    const [dataCol, setDataCol] = useState<Array<any>>([]);
    const [dpto, setDpto] = useState<Array<any>>([]);
    const city: any[] = [];
    const [selectDpto, setSelectDpto] = useState('');

    const getDataColombia = () => {
        axios.get(colData)
            .then(function (res) {
                    setDataCol(res.data)
                    //console.log("DATOS => ", res.data);
                }
            )
            .catch(function (error) {
                console.log(error);
            })
    }

    const getDptos = async () => {
        for (let d = 0; d < dataCol.length; d++) {
            if (dpto.includes(dataCol[d]['departamento'])) {

            } else {
                dpto.push(dataCol[d]['departamento']);
            }

        }
        const selectCity = async () => {
            for (let m = 0; m < dataCol.length; m++) {
                if (dataCol[m]["departamento"] === selectDpto) {
                    //console.log("hola mundo xd")
                    city.push(dataCol[m]["municipio"]);
                }
            }
        }
        selectCity()
    }
    getDptos()
    if (selectDpto === "Bolívar") {
        city.unshift("Cartagena")
    }

    useEffect(() => {
        getDataColombia();
    }, []);

    return (
        <>
            <>
                <Layout>
                    <Head>
                        <link rel="canonical" href={router.asPath}/>
                        <title>{titlePage} | Aboga</title>
                    </Head>
                    <RightBannerComponent service={service} setTitlePage={setTitlePage} typeService={'empresas'} gaEventTracker={gaEventTracker}/>
                    <OurTeamComponent service={service} setTitlePage={setTitlePage} typeService={'empresas'} gaEventTracker={gaEventTracker}/>
                    <TeamComponent />
                    <OurServicesComponent service={service} setTitlePage={setTitlePage} typeService={'empresas'} gaEventTracker={gaEventTracker}/>
                    <ContactComponent service={service} setTitlePage={setTitlePage} typeService={'empresas'} gaEventTracker={gaEventTracker}/>
                    
                    <FormServiceComponent service={service} setTitlePage={setTitlePage} setSelectDpto={setSelectDpto} dpto={dpto} city={city} typeService={'empresas'} gaEventTracker={gaEventTracker}/>
                </Layout>

            </>
        </>
    )
}
