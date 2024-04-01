import styles from "./styles.module.css";
import * as React from "react";
import {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import {useRouter} from "next/router";

export default function VideoPlayer(props:any) {
    const router = useRouter();
    const [video, setVideo] = useState('');

    useEffect(()=>{
        if(router.asPath === '/para-bodas'){
            setVideo('/videos/video_novias.mp4')
        }else{
            setVideo('/videos/video_home.mp4')
        }
    }, [])

    return(
        <>
            <Modal size={"lg"} show={props.newShow}>
                <Modal.Body>
                    <div className={styles.btn_close}>
                        <div>
                            <a type="button" onClick={() => props.hijoAPadre(false)} title="Cerrar"> <i className='bx bx-x-circle'></i></a>
                        </div>
                    </div>
                    <div className={styles.modal_body}>
                        <video
                            src={video}
                            width='100%'
                            height='100%'
                            autoPlay={true}
                            controls
                            title="presentación-Laura-Nuñez"
                        >

                        </video>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}
