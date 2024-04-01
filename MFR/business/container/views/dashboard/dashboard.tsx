import Search from "./Component/apartamentos/search/search";
import Apartamentos from "./Component/apartamentos/apartamentos";
import AbrirModal from "./Component/modal/abrirModal/abrirModal";
import ModalAgregar from "./Component/modal/modalAgregar/modalAgregar";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import {allResources, useAllResources} from "../../../../service/api/api";
import Pagination from "../../../content/pagination/pagination";
import Image from "next/image";                                               
import { comparar } from "../../../../service/sortFunction";

export default function Dashboard() {
    const [dataReload, setDataReload] = useState<any>([])
    // const [dataJson, getAll] = useAllResources();
    const [dataJson, setDataJson] = useState<any>([]);
    const [search, setSearch] = useState("");
    const [dataFilter, setDataFilter] = useState<any>(dataJson);
    const [statusModal, setStatusModal] = useState<any>();

    const [cardPerPage, setCardPerPage] = useState(6);
    
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(()=>{
        setDataFilter(dataJson)
    }, [dataJson])

    useEffect(()=>{

        // getAll();
        allResources().then((res:any)=>{
            setDataJson(res.data.data)
        }).catch((err: Error)=>{
            console.log(err);
        })

    }, 
    [statusModal]);

    const PagesVisited = itemOffset * cardPerPage;

    const listDisplay = dataFilter.filter((it:any)=> it.status === 'Available' || it.status === 'Disabled').slice(PagesVisited, PagesVisited + cardPerPage)
        .map((aptos:any, index:any) =>(
            <Apartamentos 
                dataResources={[aptos]}
                key={index}
                setDataReload={setDataReload}
                setStatusModalUpdate={setStatusModal}
            />
        ))
    // console.log('data lenght => ', dataFilter.filter((it:any)=> it.status === 'Available'))
    const pageCount = Math.ceil( dataFilter.filter((it:any)=> it.status === 'Available' || it.status === 'Disabled').length / cardPerPage); //divide boats / boast per page

    const changePage = ({selected}: { selected: any }) => { /*selected or change page*/
        setItemOffset(selected);
    };

    
    
    

    return (
        <>
            <section className={styles.section}>
                <div className={styles.abrir}>
                    <AbrirModal setStatusModal={setStatusModal}/>
                    <Search search={search} setSearch={setSearch} dataJson={dataJson} setDataFilter={setDataFilter}/>
                </div>

                <div className={styles.general_apartamentos}>
                    {/* <Apartamentos
                        dataResources={dataFilter}
                        setDataReload={setDataReload}
                        setStatusModalUpdate={setStatusModal}
                    /> */}
                    {listDisplay}
                   
                </div>
                
                
                
                {/*<ModalAgregar/>*/}
                
            </section>
            <div className={styles.pagination}>
                    <div className="tramado_izquierda">
                        <Image width={517} height={55} src="/images/elemento-grafico-flechas.png" alt="Arrows" title="Arrows"/>
                    </div>
                    <Pagination
                        pageCount={pageCount}
                        changePage={changePage}
                    />
                    <div className={styles.tramado_derecha}>
                        <Image width={517} height={55} src="/images/elemento-grafico-flechas.png" alt="Arrows" title="Arrows"/>
                    </div>
                </div>
        </>
    )
}
