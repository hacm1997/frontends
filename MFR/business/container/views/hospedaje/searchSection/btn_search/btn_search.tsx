import styles from './styles.module.css';
import * as React from "react";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import { getAllResourcesFilter, googleAuthToken } from '../../../../../../service/api/api';
import { useRouter } from 'next/router';

export default function BtnSearch({data, selectedPrice, type, adults, kids, hijoAPadre, translate, lang, getDollar, currency, gaEventTracker, date_start, date_end, setLinkQuery, setNameBuilding}:any) {

    const [click, setClick] = useState(false);
    // const [status, setStatus] = useState(0);
    const [resultsFound, setResultsFound] = useState(false);

    const [list, setList] = useState<any>();
    const router = useRouter();
    const [building, setBuilding] = useState('');
    const queryBuilding = router.query.building;

    // let updateList = data
    const loading = () => {
        Swal.fire({
            title: lang === 'en' ? 'Searching...' : 'Buscando...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
            Swal.showLoading();
            },
        })
    }

    const applyFilter = async () => {
        setResultsFound(true);
        loading();
        gaEventTracker('Clic botón filtro')

        await getAllResourcesFilter(date_start, date_end, kids, adults, building).then((res:any) => {
            setResultsFound(false)
            hijoAPadre(res.data.data)
            Swal.close();
            if(res.data.data.length === 0){
                Swal.fire(
                {
                    title: 'No se encontraron resultados',
                    icon: 'info',
                    confirmButtonText: 'OK'
                })
            }
        }).catch((err) => {
            console.log(err)
            Swal.close();
            Swal.fire(
            {
                title: 'No se encontraron resultados',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        })
    };

    const BtnClick = () => {
        applyFilter();
        setClick(true);
    }
    //btnToFilter(data);
    useEffect(() => {
        if(click){
            googleAuthToken().then(( res ) => {
                console.log("success");
            }).catch(( err ) => {
                console.log(err);
            })
            BtnClick();
        }else{
            hijoAPadre(data)
        }
    }, [click, data]);

    useEffect(() => {
        if(router.asPath.includes('building')){
            if(router.query.building !== undefined){
                setBuilding(queryBuilding as string)
                setNameBuilding(queryBuilding as string)
            }
        }
    },[router.query.building])

    useEffect(() => {
        if(building !== ''){
            setLinkQuery(true);
        }
        applyFilter();
    }, [building])

    return (
        <>
            <button onClick={applyFilter} className={styles.btn_buscar}>{translate('filter.button')}</button>
        </>
    )
}
