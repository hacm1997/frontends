import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../../components/general/layout/layout.component";
import FormServiceComponent from "../../components/general/views/servicesRight/form/form.component";
import axios from "axios";
import ReactGA from "react-ga4";
import useAnalyticsEventTracker from "../../services/analytics/useAnalyticsEventTracker";
import OurServicesComponent from "../../components/general/views/servicesRight/ourServices/ourServices.component";
import ProblemsComponent from "../../components/general/views/person-templates/problems/problems.component";
import { VulnerabilityComponent } from "../../components/general/views/person-templates/vulnerabilities/vulnerability.component";
import ReviewsComponent from "../../components/general/views/person-templates/reviews/reviews.component";
import BlogsComponent from "../../components/general/views/person-templates/blogs/blogs.component";
import TeamComponent from "../../components/general/views/person-templates/our-team/ourTeam.component";
import ProtectionStepsComponent from "../../components/general/views/person-templates/protection-steps/protection-steps.component";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Page: Servicio personas" });
    const { t, lang } = useTranslation(`services`);
    const [titlePage, setTitlePage] = useState('');
    const [category, setCategory] = useState('');
    const gaEventTracker = useAnalyticsEventTracker('Servicio personas');
    const router = useRouter();
    const {id}:any = router.query;
    // console.log("id => ",id)
    const [service, setService] = useState('');
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

    // console.log('categorias => ', category)

    return (
        <>
            <>
                <Layout>
                    <Head>
                        <link rel="canonical" href={router.asPath}/>
                        <title>{t(`personas.${service}.title`)} | Aboga</title>
                    </Head>
                    <ProblemsComponent service={service} setTitlePage={setTitlePage} typeService={'personas'} gaEventTracker={gaEventTracker} />
                    <div style={{background:"url('/images/servicios/our-services/background-blue.png')"}}>
                        <VulnerabilityComponent setCategory={setCategory} service={service} setTitlePage={setTitlePage} typeService={'personas'} gaEventTracker={gaEventTracker}/>
                    </div>
                    <ProtectionStepsComponent />
                    <ReviewsComponent />
                    <OurServicesComponent service={service} setTitlePage={setTitlePage} typeService={'personas'} gaEventTracker={gaEventTracker}/>
                    <TeamComponent />
                    <BlogsComponent category={category} titleService={t(`personas.${service}.title`)}/>
                    <FormServiceComponent service={service} setTitlePage={setTitlePage} setSelectDpto={setSelectDpto}
                    dpto={dpto} city={city} typeService={'personas'} gaEventTracker={gaEventTracker}
                    router={router}
                    />
                </Layout>

            </>
        </>
    )
}
