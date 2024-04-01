import { useEffect, useState } from "react";
import { googleAuthToken, updateResource } from "../../../../../../../../service/api/api";
import Swal from "sweetalert2";
import SpinnerView from "../../../../../../../content/spinner/spinner";
import { eventsToCalendar } from "../../../../../../../../service/googleCalendar";

export default function UnlockDate(props: any) {
    const [chars, setChars] = useState<any>({});
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

    console.log("dataEventDeleteGoogle => ", initUpdateData)
    const handleUnlock = async () => {
        setShowSpinner(true);
        const filteredDates = chars?.date_block?.filter((date: any) => date !== props.date);
        const deleteDateInDB= chars?.events?.filter((date: any) => date.date !== props.date);
        const deleteDateInGoogle = chars?.events?.filter((date: any) => date.date === props.date);
        // console.log('data filtered => ', props.date)
        // console.log('events filtered => ', deleteDateInDB)
        // console.log('events filtered google => ', deleteDateInGoogle[0].eventId)

        const dataEventDeleteGoogle = {
            id_google_calendar: props.idGoogleCalendar,
            start_date: props.date,
            end_date: props.date,
            resource_id: props.data.resource_id,
            data: initUpdateData,
            action: 'delete',
            eventId: deleteDateInGoogle[0]?.eventId
        }

        googleAuthToken().then(( res ) => {
            console.log('success');
        }).catch(( err ) => {
            console.log(err.response.data.message);
        })

        try {
            
            await eventsToCalendar(dataEventDeleteGoogle);
            // console.log('Result:', response);
        } catch (error) {
            console.log(error);
        }

        if (filteredDates) {
            chars.date_block = filteredDates;
            chars.events = deleteDateInDB;
            handleSubmit();
        }

    };

    const handleSubmit = () => {
        const data = initUpdateData
        setShowSpinner(true);
        updateResource(props.data.resource_id, data).then(res => {
            if (res.status === 200) {
                setShowSpinner(false);

                console.log("¡Success! code status: " + res.status);
                Swal.fire(
                  {
                      title: `Se ha desbloqueada la fecha ${props.date}`,
                      icon: 'success',
                      confirmButtonText: 'Aceptar'
                  }
                ).then((result) => {
                    if (result.isConfirmed) {
                        props.closeModal(false);
                        props.setStatusModal(false);
                        window.location.reload();
                    }
                });
            }
        }).catch(err => {
            console.log(err);
            setShowSpinner(false);
            Swal.fire(
                {
                    title: '!No se ha realizar la acción!',
                    text: 'Por favor intentelo nuevamente o más tarde',
                    icon: 'error'
                }
            )
            //window.location.reload();
        })
    }

    useEffect(() => {
        setChars(
            props.values
        );
    }, [props.values])

    return (
        <>
            {showSpinner ?
                <div id="spinner">
                    <SpinnerView/>
                </div>
                :
                <button onClick={handleUnlock}>Desbloquear</button>
            }
        </>
    )
}
