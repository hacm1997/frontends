import {useEffect, useState} from "react";
import {googleAuthToken, updateResource} from "../../../../../../../../service/api/api";
import Swal from "sweetalert2";
import SpinnerView from "../../../../../../../content/spinner/spinner";
import styles from "../../../modal/update/form/btnSave/styles.module.css";
import { eventsToCalendar } from "../../../../../../../../service/googleCalendar";

export default function SaveBlock(props:any){
    const [chars, setChars] = useState<any>({});
    const [eventId, setEventId] = useState({date: '', eventId: ''});
    const [showSpinner, setShowSpinner] = useState(false);
    const initUpdateData = {
        code: props.data.resource_id,
        name: props.data.name,
        description: props.values.description,
        characteristics: chars,
        owner: props.data.owner,
        rating: props.data.rating,
        rating_count: 1,
        price: props.values.price,
        currency: props.data.currency,
        state: props.data.status
    }

    const dataEventGoogle = {
        id_google_calendar: props.idGoogleCalendar,
        start_date: props.date,
        end_date: props.date,
        resource_id: props.data.resource_id,
        data: initUpdateData,
        action: 'block'
    }
    // console.log('data event => ', dataEventGoogle)

    useEffect(()=>{
        setChars(
            props.values
        );
    }, [props.values])

    useEffect(()=>{
        if(props.dataPerBlock === ''){
            if (chars.date_block && props.dataPerBlock === ''){
                chars.date_block.push(props.date)
                // console.log("date => ", props.date);
                console.log("push")
            }else{
                console.log("no push")
            }
        }        
    }, [chars.date_block]);

    const handleSubmit = async (ev:any) => {
        setShowSpinner(true);
        googleAuthToken().then(( res ) => {
            console.log('success');
        }).catch(( err ) => {
            console.log(err.response.data.message);
        })
        try {
            const result = await eventsToCalendar(dataEventGoogle); // Esperar el resultado aquí
            // console.log('Result:', result);

            // Copia el estado actual de chars para evitar mutar el estado directamente
            const updatedChars = { ...chars };   

            if (updatedChars.event === undefined && (updatedChars.events?.length < 0 ||  updatedChars.events?.length === undefined)) {
                updatedChars.events = [{ date: props.date, eventId: result }];
            } else {
                updatedChars.events.push({ date: props.date, eventId: result });
            }

            const newInitSave = {
                code: props.data.resource_id,
                name: props.data.name,
                description: props.values.description,
                characteristics: updatedChars,
                owner: props.data.owner,
                rating: props.data.rating,
                rating_count: 1,
                price: props.values.price,
                currency: props.data.currency,
                state: props.data.status
            }
            console.log('new update after block => ', newInitSave)
            updateResourceBlock(newInitSave);
        } catch (error) {
            console.log(error);
        }
    }

    const updateResourceBlock = async (newInitSave: any) => {
        await updateResource(props.data.resource_id, newInitSave).then(res => {

            console.log("¡Success! code status: " + res.status);
            
            Swal.fire(
                {
                    title: 'Fecha bloqueada!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setShowSpinner(false);
                        props.closeModal(false);
                        props.setStatusModal(false);
                        window.location.reload();
                    }
                });
        }).catch(err => {
            console.log(err);
            if(eventId.eventId){

                Swal.fire(
                    {
                        title: '!No se ha podido realizar la acción!',
                        text: 'Por favor intentelo nuevamente o más tarde',
                        icon: 'error'
                    }
                )
            }
            //window.location.reload();
        })
    }

    return(
        <>
            {showSpinner ?
                <div id="spinner">
                    <SpinnerView/>
                </div>
                :
                <button onClick={handleSubmit} className={styles.btn}>Bloquear</button>
            }
        </>
    )
}
