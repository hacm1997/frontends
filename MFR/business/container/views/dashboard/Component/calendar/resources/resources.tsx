import styles from "./styles.module.css"
import {useEffect, useState} from "react";
import {allResources, googleAuthToken} from "../../../../../../../service/api/api";
import Pagination from "../../../../../../content/paginationCalendar/pagination";
import { comparar } from "../../../../../../../service/sortFunction";

export default function Resources(props:any) {
    const [dataJson, setDataJson] = useState<any>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [cardPerPage, setCardPerPage] = useState(8);
    const [itemOffset, setItemOffset] = useState(0);
    const [showBtnCalendars, setShowBtnCalendars] = useState(false);
    useEffect(()=>{

        allResources().then((res:any)=>{
            console.log("res dataJson => ", 200)
            setDataJson(res.data.data)
        }).catch((err: Error)=>{
            console.log(err);
        })

    }, [props.statusModal]);

    const PagesVisited = itemOffset * cardPerPage;

    const listDisplay = dataJson.filter((it:any)=> it.status === 'Available' || it.status === 'Disabled').slice(PagesVisited, PagesVisited + cardPerPage)
        .map((item:any, index:any) =>(
            <ul key={index} className={`${styles.list_resources} ${index === activeIndex ? styles.active : ''}`}>
            <li onClick={() => {
                props.setResourceCode(item.resource_id);
                setActiveIndex(index);
                props.setDataDpto(item);
                setShowBtnCalendars(true);
                googleAuthToken().then(( res ) => {
                    console.log('tokes success')
                }).catch(( err ) => {
                    console.log(err.response.data.message);
                })
            }}>
                {item.name}
            </li>
        </ul>
        ))
    // console.log('data lenght => ', dataFilter.filter((it:any)=> it.status === 'Available'))
    const pageCount = Math.ceil( dataJson.filter((it:any)=> it.status === 'Available' || it.status === 'Disabled').length / cardPerPage); //divide boats / boast per page
    const changePage = ({selected}: { selected: any }) => { /*selected or change page*/
        setItemOffset(selected);
    };

    return(
        <>
            <div>
                <div style={{display: 'block'}}>
                    <h5 >Apartamentos</h5>
                    <Pagination
                        pageCount={pageCount}
                        changePage={changePage}
                    />
                </div>
                <hr style={{border: "1px solid #8c15e4"}}/>
                <div className={styles.resources_content}>
                    {listDisplay}
                    {showBtnCalendars ? 
                    <div className={styles.section_btn}>
                        <button className={props.showGoogleCalendar ? styles.btn_calendar : styles.btn_calendar_active} onClick={() => props.setShowGoogleCalendar(false)}>MFR</button>
                        <button className={props.showGoogleCalendar ? styles.btn_calendar_active : styles.btn_calendar} onClick={() => props.setShowGoogleCalendar(true)}>Externos</button>
                    </div>
                : null}
                </div>
            </div>
        </>
    )
}
