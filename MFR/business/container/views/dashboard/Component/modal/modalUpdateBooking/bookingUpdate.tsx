import styles from "./styles.module.css";
import React, {useEffect, useState, useRef} from "react";
import {getBookingAvailable, putBooking} from "../../../../../../../service/api/api";
import Moment from "moment/moment";
import {updateBooking} from "../../../../../../../service/api/types";
import SaveUpdateBooking from "./btnUpdate/updateBook";
import { formatNumber } from "../../../../../../../service/service";

Moment.locale("es");
export default function UpdateBooking(props:any) {
    //const now = Moment.utc().local().add(1, 'day');
    //const currentDate = now.toJSON();
    const [user, setUser] = useState({
        name: props.data._props.booker._cellphone, dni: props.data._props.booker._id,
        email: props.data._props.booker._name, cellphone: props.data._props.booker._email,
        details: {}
    });
    const date_from_format = Moment(props.data._props.date_from).format('YYYY-MM-DD');
    const date_to_format = Moment(props.data._props.date_to).format('YYYY-MM-DD');

    const [booking, setBooking] = useState({
        status:'paid', code:props.data._props.code, details: {}, resource_code: props.data._props.resource.code,
        start_date: date_from_format, end_date: date_to_format
    });

    const btn_close = () =>{
        props.setNewShow(false);
    }

    return(
        <>
            <div className={styles.generalModal}>
                <div className={"row "+ styles.header_body}>
                    <div className={"col"}>
                        <h4>Detalles de la reserva</h4>
                    </div>
                    <div className={"col " +styles.close}>
                        <a title="Salir" onClick={btn_close}>
                            <i className='bx bx-x'></i>
                        </a>
                    </div>
                </div>

                <div>
                    <div className={styles.infoData +" form-group"}>
                        <label>Código de Apto:</label>
                        <strong>{props.data._props.resource.code}</strong>
                    </div>
                    <hr/>
                    <h5>Datos del Cliente</h5>
                    <div className={styles.infoData}>
                        <p>Nombre: </p>
                        <label><strong>{user.email ? user.email : null}</strong></label>
                    </div>
                    <div className={styles.infoData}>
                        <p>Cédula o id:</p>
                        <label><strong>{user.dni ? user.dni : null}</strong></label>
                    </div>
                    <div className={styles.infoData}>
                        <p>E-mail:</p>
                        <label><strong>{user.cellphone ? user.cellphone : null} </strong> </label>
                    </div>
                    <div className={styles.infoData}>
                        <p>Teléfono: </p>
                        <label><strong>{user.name ? user.name : null}</strong></label>
                    </div>
                    <hr className={styles.bodyHr}/>
                    <h5>Datos de la reserva</h5>
                    <div className={styles.infoData}>
                        <p>Fecha de llegada:</p>
                        <strong>{booking.start_date}</strong>
                    </div>
                    <div className={styles.infoData}>
                        <p>Fecha de salida:</p>
                        <strong>{booking.end_date}</strong>
                    </div>
                    <div className={styles.infoData}>
                        <p>Adultos:</p>
                        <strong>{props.adults}</strong>
                    </div>
                    <div className={styles.infoData}>
                        <p>Niños:</p>
                        <strong>{props.kids}</strong>
                    </div>
                    <div className={styles.infoData}>
                        <p>Total pagado:</p>
                        <strong>${formatNumber(props.price)}</strong>
                    </div>
                    <div className={styles.infoData}>
                        <label>Estado de reserva:</label>
                        <strong className={props.state === 'Pagado' ? styles.statusPaid : styles.statusCancel}>{props.state}</strong>
                    </div>
                    <br/>

                    <div className={styles.btnUpdate}>
                        <SaveUpdateBooking
                            user={user} booking={booking}
                            state={props.state}
                            code={props.data._props.code} resource_code={props.data._props.resource.code}
                            start_date={props.data._props.date_from}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
