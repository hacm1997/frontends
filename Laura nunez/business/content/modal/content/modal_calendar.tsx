import styles from "./styles.module.css";
import {PopupModal, InlineWidget} from "react-calendly";
import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalCalendar (props:any) {
    const [showCalendly, setShowCalendly] = React.useState(true);
    const wsp_bodas = 'https://api.whatsapp.com/send?phone=573126243074&text=Para%20tus%20maquillajes%20grupales%20agenda%20tus%20citas%20a%20partir%20de%205%20cupos'

    const btnShowCalendy = () => {
        props.gaEventTracker('Cita común - reserva de cita')
        setShowCalendly(false);
    }

    const closeModal = () =>{
        props.setModalOpen(false);
        setShowCalendly(true);
    }

    const btnBack = () => {
        setShowCalendly(true);
    }

    const openBooking = () => {
        props.gaEventTracker('Clic cita grupal - wsp');
        window.open(wsp_bodas, '_blank', 'noopener,noreferrer');

    }

    return (

        <Modal size={"lg"} show={props.modalOpen} contentClassName={styles.modal} >
            <Modal.Body >
                <div className={styles.modal_content}>
                    <div className={styles.btn_close}>
                        <div className={"row"}>
                            <div className={"col-6 "+styles.back_icon}>
                                <a hidden={showCalendly ? true : false} onClick={btnBack} type="button" title="Atrás">
                                    <i className='bx bx-left-arrow-alt'></i>
                                </a>
                            </div>
                            <div className={"col-6 "+styles.close_modal}>
                                <a type="button" onClick={closeModal} title="Cerrar"> <i className='bx bx-x'></i></a>
                            </div>
                        </div>

                    </div>
                    <div className={styles.modal_body}>

                        <div className={"row "+styles.content_options} hidden={showCalendly ? false : true}>
                            <div className={"col-md-6 "+styles.btn_wsp}>
                                <div>
                                    <p>Para tus maquillajes grupales agenda tus citas a partir de 5 cupos.</p>
                                </div>
                                <div>
                                    <button type="button" onClick={openBooking}>Cita grupal</button>
                                </div>

                            </div>
                            <div className={"col-md-6 "+styles.btn_continue}>
                                <div>
                                    <p>Para cita individual</p>
                                </div>
                                <div>
                                    <button type="button" onClick={btnShowCalendy}>Cita común</button>
                                </div>
                            </div>
                        </div>

                        <div hidden={showCalendly}>
                            <InlineWidget url="https://calendly.com/laura-1564" iframeTitle="Calendly"/>
                        </div>

                    </div>
                </div>

            </Modal.Body>
        </Modal>

    )
};
