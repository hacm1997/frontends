import Search from "./Component/appointments/search/search";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import OpenModal from "./Component/modal/abrirModal/abrirModal";
import {getAllResourcesAvailable} from "../../../service/api/api";
import Appointments from "./Component/appointments/appointments";
//import {useAllResources} from "../../../../service/api/api";

export default function Dashboard() {

    const [dataJson, setDataJson] = useState([]);

    function getResoruces() {
        getAllResourcesAvailable()
            .then((response: any) => {
                //console.log(response.data);
                setDataJson(
                    response.data.data[0],
                );
                console.log(response.data.data[0]);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
    useEffect(()=>{

        getResoruces();
        //setDataPrincipal(dataJson)
    }, []);

    return (
        <>
            <section className={styles.section}>
                <div className={styles.abrir}>
                    <OpenModal/>
                    <Search/>
                </div>

                <div className={styles.general_apartamentos}>
                    <Appointments dataJson={dataJson} />
                </div>

            </section>
        </>
    )
}
