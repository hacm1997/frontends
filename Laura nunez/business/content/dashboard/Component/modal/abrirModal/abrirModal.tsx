import styles from "./styles.module.css";
import Modal from "react-bootstrap/Modal";
import CreateApto from "../form/form";
import React from "react";

export default function OpenModal(){
    const [newShow, setNewShow] = React.useState(false)

    const btn_click = () => {
        setNewShow(true);
    }
    const closeModal = (dataChild:any) => {
        setNewShow(dataChild);
    }
    return(
        <>
            <button type="button" className={styles.btn_abrir} onClick={btn_click}>
                <i className='bx bx-plus'></i>
            </button>
            {newShow ?
                <Modal size={"lg"} show={true}>
                    <Modal.Body>
                        <div className={styles.modal_body}>
                            <CreateApto closeModal={closeModal} />
                        </div>
                    </Modal.Body>
                </Modal>
            :null}
        </>
    )
}
