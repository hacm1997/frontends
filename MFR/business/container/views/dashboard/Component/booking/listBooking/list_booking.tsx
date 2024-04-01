import styles from "./styles.module.css";
import {useState} from "react";
import Moment from "moment";
import {formatNumber} from "../../../../../../../service/service";
import Modal from "react-bootstrap/Modal";
import * as React from "react";
import UpdateBooking from "../../modal/modalUpdateBooking/bookingUpdate";
import ModalFacture from "../detailFacture/modalFacture/modalFacture";

export default function ListBooking(props:any) {
    const [newShow, setNewShow] = useState(false);
    const [newShow2, setNewShow2] = useState(false);
    const [dataModal, setDataModal] = useState({
        state: '', booking_code: '', adults: 0, kids: 0, price: 0, item: []
    })
    const openModal = (status: string, code: string, adults: number, kids: number, price: number, item:any) => {
        setDataModal({
            state: status,
            booking_code: code,
            adults: adults,
            kids: kids,
            price: price,
            item: item
        })
        setNewShow(true);
    }
    const openModal2 = () => {
        setNewShow2(true);
    }
    // console.log("Datos de booking => ",props.data)
    const PagesVisited = props.itemOffset * props.cardPerPage;

    return (
        <>
                
            <div className={styles.grid_container}>

                {
                    props.data.slice(PagesVisited, PagesVisited + props.cardPerPage).map((item:any, index:any)=>{
                        const detailBooked = JSON.parse(item._props.bookingDetails);
                        const date_from_format = Moment(item._props.date_from).format('ddd DD MMMM YYYY');
                        const date_to_format = Moment(item._props.date_to).format('ddd DD MMMM YYYY');
                        return(
                            <div key={index} className={styles.list_booking}>
                                <a className={styles.editBtn} onClick={() => openModal(item._props.state, item._props.code, Number(detailBooked.adults), Number(detailBooked.kids), Number(detailBooked.price), item)}>Ver detalles</a> | <ModalFacture openModal2={openModal2} code={item._props.code} status={item._props.state} setNewShow2={setNewShow2} newShow2={newShow2} />
                                <h4>{item._props.resource.code}</h4>
                                <hr/>
                
                                <label><h5>Cliente:</h5></label>
                                <p><strong>Nombre: </strong> {item._props.booker._name}<br/>
                                <strong>Cédula: </strong> {detailBooked.dni}</p>
                
                                <label><h5>Datos de reserva:</h5></label>
                                <p><strong>Precio total: </strong>${formatNumber(detailBooked.price)}</p>
                                <p><strong>Adultos: </strong>{detailBooked.adults}<strong> Niños: </strong>{detailBooked.kids}</p>
                                <p><strong>Fechas: </strong>{date_from_format} /<br/> {date_to_format}</p>
                                <p><strong>Manilla: </strong>{detailBooked.bracelet ? `Si ($${formatNumber(detailBooked.bracelet)})` : 'No'}</p>
                                <p><strong>Estado: </strong> <a className={item._props.state === "paid" ? styles.success : styles.cancel}>{item._props.state === "paid" ? "Pagado" : "Cancelado"}</a></p>
                            </div>
                        )
                    })
                }

            </div>
            <Modal size={"lg"} show={newShow}>
                <Modal.Body>
                    <div className={styles.modal_body}>
                        <UpdateBooking
                            state={dataModal.state === "paid" ? "Pagado" : "Cancelado"}
                            booking_code={dataModal.booking_code}
                            data={dataModal.item}
                            adults={dataModal.adults}
                            kids={dataModal.kids}
                            price={dataModal.price}
                            setNewShow={setNewShow}
                        />
                    </div>
                </Modal.Body>
            </Modal>
            

        </>
    )
}
