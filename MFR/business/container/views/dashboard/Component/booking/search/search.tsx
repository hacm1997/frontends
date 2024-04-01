import styles from "./styles.module.css";

export default function SearchBooking(props: any) {

    const handleChange = (e:any) => {
        // console.log("search => ",e.target.value)
        props.setSearch(e.target.value);
        filter(e.target.value);
    }

    const filter=(finishSearch:any)=>{
        const result=props.dataJson.filter((element:any)=>{
            const detailBooked = JSON.parse(element._props.bookingDetails);
            console.log('detailBooked => ', detailBooked)
            if(element){
                if(element?._props?.resource?.code.toString().toLowerCase().includes(finishSearch.toLowerCase())
                    || element?._props?.booker?._id.toString().toLowerCase().includes(finishSearch.toLowerCase())
                    || element?._props?.booker?._cellphone.toString().toLowerCase().includes(finishSearch.toLowerCase())
                    || element?._props?.code.toString().toLowerCase().includes(finishSearch.toLowerCase())
                    || element?._props?.date_to.toString().toLowerCase().includes(finishSearch.toLowerCase())
                    || detailBooked.price >= (Number(finishSearch))
                    || detailBooked.dni.toString().toLowerCase().includes(finishSearch.toLowerCase())){
                    return element;
                }
            }
        })
        props.setDataFilter(result);
    }

    return (
        <>
            <div className={styles.note}>
                <p>Nota: Búsqueda por fecha = (año-mes-día)</p>
            </div>
            <div className={styles.search}>
                <div className={styles.search_input}>
                    <input onChange={handleChange} value={props.search} placeholder="Búsqueda por Código de reserva, Cédula, Fecha y precio mayor que..."/>
                    <button><i className='bx bx-search'></i></button>
                </div>
            </div>
        </>
    )
}
