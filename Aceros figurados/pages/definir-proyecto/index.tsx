import type { NextPage } from 'next'
import Layout from "../../business/container/layout/layout";
import styles from './styles.module.css'
import PantallaForm from "../../business/container/views/definir-proyecto/formulario/pantallaForm";
import PilotajeForm from "../../business/container/views/definir-proyecto/formulario/pilotajeForm";
import CardSeleccion from "../../business/container/views/definir-proyecto/cardSeleccion/cardSeleccion";
import {useEffect, useState} from "react";
import axios from "axios";
import useAnalyticsEventTracker from "../../services/analytics/useAnalyticsEventTracker";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/definir-proyecto", title: "Definir proyecto" });
const Home: NextPage = (props: any) => {
    const gaEventTracker = useAnalyticsEventTracker('Definir-proyecto');
    const [pilotaje, setPilotaje] = useState('block');
    const [pantalla, setPantalla] = useState('none');

    const [pilotajeActive, setPilotajeActive] = useState('card_pilotaje_active');
    const [pantallaActive, setPantallaActive] = useState('card_pantalla');

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
        for(let d = 0;d < dataCol.length;d++){
            if(dpto.includes(dataCol[d]['departamento'])){

            }else{
                dpto.push(dataCol[d]['departamento']);
            }

        }
        const selectCity = async () =>{
            for(let m = 0;m < dataCol.length;m++){
                if(dataCol[m]["departamento"] === selectDpto){
                    //console.log("hola mundo xd")
                    city.push(dataCol[m]["municipio"]);
                }
            }
        }
        selectCity()
    }
    getDptos()
    if(selectDpto === "Bolívar"){
        city.unshift("Cartagena")
    }
    //getDptos();
    //console.log("cities => ", city);
    //console.log("select dpto => ", selectDpto);

    const handleSelect = () => {
        if (pilotaje === 'block') {
            setPilotaje('none');
            setPantalla('block');
            setPilotajeActive('card_pilotaje');
            setPantallaActive('card_pantalla_active');
        } else {
            setPilotaje('block');
            setPantalla('none');
            setPilotajeActive('card_pilotaje_active');
            setPantallaActive('card_pantalla');
        }

    }

    //console.log("dpto selected => ", selectDpto);
    //console.log(pilotajeActive)
    //console.log(pantallaActive)

    const displayNone = {
        display: `${pilotaje}`
    }
    const displayBlock = {
        display: `${pantalla}`
    }

    const pilotajeActiveStyle = {
        display: `${pilotajeActive}`
    }

    const pantallaActiveStyle = {
        display: `${pantallaActive}`
    }

    useEffect(()=>{
        getDataColombia();
    }, []);

    return (
        <>
            <Layout>
                <div className={styles.section}>

                    <div className={styles.card_general}>
                        <div className={styles.title}>

                            <h1>Seleccione su servicio</h1>
                            <hr className={styles.hr} />
                        </div>
                        <CardSeleccion handleSelect={handleSelect} pilotaje={pilotajeActiveStyle.display}
                            pantalla={pantallaActiveStyle.display} />
                    </div>
                    <div style={displayNone}>
                        <PantallaForm setSelectDpto={setSelectDpto} dpto={dpto} city={city} gaEventTracker={gaEventTracker} />
                    </div>

                    <div style={displayBlock}>
                        <PilotajeForm setSelectDpto={setSelectDpto} dpto={dpto} city={city} gaEventTracker={gaEventTracker} />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home
