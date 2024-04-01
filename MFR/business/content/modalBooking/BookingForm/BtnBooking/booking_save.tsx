import styles from "./styles.module.css"
import React, {useContext, useEffect, useState} from "react";
import Link from "next/link";
import Moment from "moment";
import { getCalendarEvents, postBooking } from './../../../../../service/api/api';
import {Cookies} from "react-cookie";
import config from "../../../../../infrastructure/config";
import Swal from "sweetalert2";
import {EventAuthContext} from "../../../contexts/eventAuthContext";
import useTranslation from "next-translate/useTranslation";
import dayjs from "dayjs";

export default function SaveBooking(props: any) {
    const {t, lang} = useTranslation();
    const {getDollar} = useContext(EventAuthContext); //Precio del Dolar para convertir según currency
    const currentTime = Moment().local().format('THH:mm:ss')
    const currentDate = Moment().local()
    const dateStart = (Moment(props.dates[0],'DD/MM/YYYY').local().format('YYYY-MM-DD'))
    const dateEnd = (Moment(props.dates[1],'DD/MM/YYYY').local().format('YYYY-MM-DD'))
    const finalDateStart = dateStart+currentTime+".000Z"
    const finalDateEnd = dateEnd+currentTime+".000Z"
    const calendarGoogleID = props.idCalendarGoogle.toString()
    const calegarAirbnb = props.idCalendar
    const [googleEvetns, setGoogleEvents] = useState<any[]>([])
    const [airbnbEvetns, setAirbnbEvents] = useState<any[]>([])
    const [bookingStatus, setBookingStatus] = useState(false)
    const initSaveBooking = {
        tenant: config.TENANT as string,
        user: {
            dni: Date.now().toString().slice(3, 12),
            name: props.nameIn,
            email: props.emailIn,
            cellphone: props.phoneIn,
            details: {
                code: "comment",
                value: "comentario",
                dni: props.dniIn,
                description: props.descriptionIn
            }
        },
        booking: {
            status: process.env.NEXT_PUBLIC_PEND_STATUS as string,
            code: '',
            details: {
                name: props.titleIn,
                dni: props.dniIn,
                location: props.loc.toString(),
                time_cron: 4, //cron
                adults: props.adultosIn,
                kids: props.ninosIn,
                description: props.descriptionIn,
                // id_google_calendar: props.idCalendar,
                price: props.priceIn,
                api_key: config.API_KEY as string,
                calendar_id: calendarGoogleID,
                bracelet: props.bracelet ? props.bracelet : '',
                creationDate: currentDate.toISOString(),
            },
            resource_code: props.codeIn,
            start_date: finalDateStart,
            end_date: finalDateEnd
        }
    };
    const loading = () => {
        Swal.fire({
            title: 'Cargando...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
            Swal.showLoading();
            },
        })
    }
    const getBookings = async () => {
        await getCalendarEvents(props.accessToken, calendarGoogleID).then((res:any) => {
            if(res.data.items.length > 0){
                setGoogleEvents(res.data.items)
            }
        })
        await getCalendarEvents(props.accessToken, calegarAirbnb).then((res:any) => {
            if(res.data.items.length > 0){
                setAirbnbEvents(res.data.items)
            }
        })
    }
    // console.log("initSaveBooking => ", initSaveBooking)
    const bookignValidation = async () => {
        loading()
        const selectedStart = dayjs(finalDateStart, 'DD/MM/YYYY');
        const selectedEnd = dayjs(finalDateEnd, 'DD/MM/YYYY');
        if (airbnbEvetns.length > 0) {
            airbnbEvetns.some((item:any)=> {
                if(selectedStart && selectedEnd && dayjs(item.start?.date).endOf('day') >= selectedStart && dayjs(item.end?.date).endOf('day').add(-2, 'day') <= selectedEnd){
                    Swal.close()
                    setBookingStatus(true)
                }
            });
        }
        if (googleEvetns.length > 0) {
            googleEvetns.some((item:any)=> {
                if(selectedStart && selectedEnd && dayjs(item.start?.date).endOf('day') >= selectedStart && dayjs(item.end?.date).endOf('day').add(-2, 'day') <= selectedEnd){
                    Swal.close()
                    setBookingStatus(true)
                }
            });
        }
    }

    useEffect(() => {
        if(bookingStatus){
            Swal.fire(
            {
                title: 'Lo sentimos',
                text: `Las fechas ${finalDateStart} - ${finalDateEnd}, ya han sido reservadas`,
                icon: 'info',
                confirmButtonText: 'Seleccionar otra fecha'
            }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload()
                }
              });
            }
    }, [bookingStatus])

    const handleSubmit = async (ev:any) => {
        await bookignValidation()

        var dt = initSaveBooking;

        await postBooking(dt).then((res:any) => {
            if(res.status === 200){
                console.log("¡Success! code status: "+res.status);

                props.gaEventTracker('Realizó la reserva '+props.titleIn);
                const cookies = new Cookies();
                if (cookies.get('bookingCode') === undefined || cookies.get('db') === undefined) {
                    cookies.set('bookingCode', res.data.data.booking.code, {path: '/'});
                    cookies.set('codeResource', props.codeIn, {path: '/'});
                    cookies.set('userDni', props.dniIn, {path: '/'});
                    cookies.set('startDate', finalDateStart, {path: '/'});
                    cookies.set('endDate', finalDateEnd, {path: '/'});
                    cookies.set('nameUser', props.nameIn, {path: '/'});
                    cookies.set('emailUser', props.emailIn, {path: '/'});
                }

                Swal.fire(
                    {
                        title: `!${props.translate('form_submit.alert.fixed')}!`,
                        text: `${props.translate('form_submit.alert.fixed_msn')}`,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }
                ).then((result) => {
                    if (result.isConfirmed && lang === 'en') {
                        window.location.replace(`/en/payment?name=${props.nameIn}&dni=${initSaveBooking.user.dni}&currency=USD`);
                    }else{
                        window.location.replace(`/payment?name=${props.nameIn}&dni=${initSaveBooking.user.dni}&currency=${props.currency}`);
                    }
                })
                window.setTimeout(function() {
                    if(lang === 'en'){
                        window.location.replace(`/en/payment?name=${props.nameIn}&dni=${initSaveBooking.user.dni}&currency=USD`);
                    }else{
                        window.location.replace(`/payment?name=${props.nameIn}&dni=${initSaveBooking.user.dni}&currency=${props.currency}`);
                    }

                }, 7000);
            }
        }).catch((err:any) => {
            console.log(err);

            Swal.fire(
                {
                    title: `!${props.translate('form_submit.alert.error')}!`,
                    text: `${props.translate('form_submit.alert.error_msn')}`,
                    icon: 'error'
                }
            )

        })
        // console.log(dt);
        ev.preventDefault();

    };

    useEffect(() => {
        getBookings()
    }, [props.accessToken])

    return (
        <>

            <div className={styles.btn_save}>
                <button onClick={handleSubmit}>{props.translate('section1.button')}</button>
            </div>

        </>
    )
}
