import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import {getAllBooking} from "../../../../../../service/api/api";
import ListBooking from "./listBooking/list_booking";
import SearchBooking from "./search/search";
import Pagination from "../../../../../content/pagination/pagination";

export default function Booking() {
    const [dataBooking, setDataBooking] = useState([]);
    const [search, setSearch] = useState("");
    const [dataFilter, setDataFilter] = useState<any>(dataBooking);
    const [itemOffset, setItemOffset] = useState(0);
    const [cardPerPage, setCardPerPage] = useState(8);

    const getBooking = () => {
        getAllBooking()
            .then((response: any) => {
                const filteredBookings = response.data.data.filter((booking:any) => booking._props.bookingDetails.includes('creationDate'));
                setDataBooking(filteredBookings)
            })

            .catch((e: Error) => {
                console.log(e);
        });
    };

    // console.log("data filter => ",dataFilter)

    useEffect(()=>{
        setDataFilter(dataBooking)
    }, [dataBooking])
    // console.log(dataBooking)
    useEffect(()=>{
        getBooking();
    }, []);

    const pageCount = Math.ceil( dataFilter.length / cardPerPage); //divide boats / boast per page

    const changePage = ({selected}: { selected: any }) => { /*selected or change page*/
        setItemOffset(selected);
    };

    return (
        <>
            <section className={styles.section}>
                <div className={styles.abrir}>
                    <SearchBooking earch={search} setSearch={setSearch} dataJson={dataBooking} setDataFilter={setDataFilter}/>
                </div>

                <div className={styles.general_apartamentos}>
                    <ListBooking data={dataFilter} cardPerPage={cardPerPage} itemOffset={itemOffset}/>
                </div>

                <Pagination
                    pageCount={pageCount}
                    changePage={changePage}
                />

            </section>
        </>
    )
}
