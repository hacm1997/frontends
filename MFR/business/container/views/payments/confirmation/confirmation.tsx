import {useRouter} from "next/router";
import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import styles from "../styles.module.css";
import {useCookies} from "react-cookie";
import {createPayment, getPayment} from "../../../../../service/api/api";
import {formatNumber} from "../../../../../service/service";
import config from "../../../../../infrastructure/config";
import {EventAuthContext} from "../../../../content/contexts/eventAuthContext";
import NotifierEmailBooked from "../../../../../service/notifier";
import useTranslation from "next-translate/useTranslation";
import moment from "moment";

export default function ConfirmationPage(props:any) {
    const {t, lang} = useTranslation('confirmation');
    const router = useRouter();
    const {getDollar} = useContext(EventAuthContext);
    const [dataEpayco, setDataEpayco] = useState<Array<any>>([]);
    const [dataWompi, setDataWompi] = useState<any>();
    const [statusPay, setStatusPay] = useState('');
    const [nameButton, setNameButton] = useState<any>(t('btn_end'));
    const [displayBtn, setDisplayBtn] = useState(true);
    const [displayAlert, setDisplayAlert] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies();
    const [method, setMethod] = useState('');
    const [urlWompi, setUrlWompi] = useState('')
    const [factureData, setFactureData] = useState({
        reference: '',
        booking_code: '',
        status: '',
        details: {},
        total: '',
    });
    const search = router.query.id;

    useEffect(() => {
        setUrlWompi(`${process.env.NEXT_PUBLIC_WOMPI_CONSULT as string}/${search}`)
    }, [search])

    const dataPayment = {
        tenant: config.TENANT as string,
        bookingCode: cookies.bookingCode,
        resourceCode: cookies.codeResource,
        userDni: cookies.userDni,
        method: method,
        startDate: cookies.startDate,
        endDate: cookies.endDate,
        facture: {
            reference: factureData.reference,
            booking_code: factureData.booking_code,
            status: factureData.status,
            details: factureData.details,
            total: parseInt(factureData.total)
        }
    }

    const refResponse = () => {
        if(urlWompi !== undefined){
            axios
                .get(urlWompi)
                .then(function (response) {
                    setDataEpayco([response.data.data])
                    setDataWompi(response.data.data)
    
                    setMethod(response.data.data.payment_method_type);
                    if(response.data.data.status === process.env.NEXT_PUBLIC_APPROVED_STATUS as string) {
                        setFactureData({
                            ...factureData,
                            reference: `${search}`,
                            booking_code: cookies.bookingCode,
                            status: process.env.NEXT_PUBLIC_PAID_STATUS as string,
                            details: {dateTransaction: response.data.data.finalized_at, wompiResponse: response.data.data.status_message, id_facture: response.data.data.id, method:response.data.data.payment_method_type, status:response.data.data.status, name:cookies.nameUser, reference: response.data.data.reference, wompiUrl: process.env.NEXT_PUBLIC_WOMPI_CONSULT as string},
                            total: (response.data.data.amount_in_cents / 100).toString()
                        })
                        setStatusPay('paid');
                        setNameButton(t('btn_end'));
                        setDisplayBtn(true);
                    }else if(response.data.data.status === process.env.NEXT_PUBLIC_PENDING_STATUS as string){
    
                        setFactureData({
                            ...factureData,
                            reference: `${search}`,
                            booking_code: cookies.bookingCode,
                            status: process.env.NEXT_PUBLIC_PEND_STATUS as string,
                            details: {dateTransaction: response.data.data.finalized_at, wompiResponse: response.data.data.status_message, id_facture: response.data.data.id, method:response.data.data.payment_method_type, status:response.data.data.status, name:cookies.nameUser, reference: response.data.data.reference, wompiUrl: process.env.NEXT_PUBLIC_WOMPI_CONSULT as string},
                            total: (response.data.data.amount_in_cents / 100).toString()
                        })
                        setStatusPay('pending');
                        setNameButton(t('btn_end'));
                        setDisplayBtn(true);
                    }else{
                        setFactureData({
                            ...factureData,
                            reference: `${search}`,
                            booking_code: cookies.bookingCode,
                            status: process.env.NEXT_PUBLIC_CANCEL_STATUS as string,
                            details: {dateTransaction: response.data.data.finalized_at, wompiResponse: response.data.data.status_message, id_facture: response.data.data.id, method:response.data.data.payment_method_type, status:response.data.data.status, name:cookies.nameUser, reference: response.data.data.reference, wompiUrl: process.env.NEXT_PUBLIC_WOMPI_CONSULT as string},
                            total: (response.data.data.amount_in_cents / 100).toString()
                        })
                        setNameButton(t('bnt_again'));
                        setDisplayBtn(false);
                    }
    
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    const savePayment = async () => {
        await getPayment(cookies.bookingCode as string).then(async (res:any) => {
            if(res.data?.facture.status === process.env.NEXT_PUBLIC_PAID_STATUS as string || res.data?.facture.status === process.env.NEXT_PUBLIC_CANCEL_STATUS as string){
                console.log('está compra ya fué procesada')
            }else{
                await createPayment(dataPayment).then((res:any) => {
                    console.log("sending data...");
                    if(res.status === 200){
                        console.log("¡Payment Success!");
                        NotifierEmailBooked(dataPayment, search, cookies.bookingCode, cookies.emailUser, t);
                    }else{
                        console.log("Error! payment no fixed!")
                    }
                }).catch(function (e){
                    NotifierEmailBooked(dataPayment, search, cookies.bookingCode, cookies.emailUser, t);
                    console.log(e)
                });
            }
        }).catch(async error => {
            await createPayment(dataPayment).then((res:any) => {
                console.log("sending data...");
                if(res.status === 200){
                    console.log("¡Payment Success!");
                    NotifierEmailBooked(dataPayment, search, cookies.bookingCode, cookies.emailUser, t);
                }else{
                    console.log("Error! payment no fixed!")
                }
            }).catch(function (e){
                NotifierEmailBooked(dataPayment, search, cookies.bookingCode, cookies.emailUser, t);
                console.log(e)
            });
            console.log(error)
        })
    }

    const finish = () => {
        if(statusPay === "paid" || statusPay === "pending"){
            props.gaEventTracker('Finalizó pago apto: '+dataPayment.resourceCode)
            removeCookie('bookingCode')
            removeCookie('codeResource')
            removeCookie('userDni')
            window.location.replace('/')
        }else{
            window.location.replace(`/payment?name=${cookies.nameUser}&dni=${cookies.userDni}`);
        }
    }

    const out = () => {
        setDisplayAlert(false);
    }
    const out_end = () => {
        props.gaEventTracker('Finalizó pago apto: '+dataPayment.resourceCode)
        removeCookie('bookingCode');
        removeCookie('codeResource');
        removeCookie('userDni');
        window.location.replace('/');
    }

    useEffect(() => {
        refResponse();
    }, [urlWompi]);

    useEffect(()=>{
        if(dataPayment.method){
            savePayment()
        }
    });

    const print = () =>{
        props.gaEventTracker('Descargó recibo: '+dataPayment.resourceCode)
        window.print() 
    }

    const reload = () =>{
        window.location.href = window.location.href;
    }

    return (
        <>
            
            <div className={styles.title_confirmation}>
                <p>{t('summary')}</p>
            </div>

            {dataWompi ? 
                <div className={styles.containerConfirm}>
                    <div>
                        <div className={styles.contentConfirm}>
                            <div className={styles.detailsConfirm}>

                                <div>
                                    <p># {t('reference')}</p>
                                </div>
                                <div>
                                    <strong>{dataWompi?.reference}</strong>
                                </div>

                                <div>
                                    <p>{t('facture')}</p>
                                </div>
                                <div>
                                    <strong>{search}</strong>
                                </div>

                                <div>
                                    <p>{t('date')}</p>
                                </div>
                                <div>
                                    <strong>{moment(dataWompi?.finalized_at).format('dddd DD MMM YYYY hh:mm a')}</strong>
                                </div>

                                <div>
                                    <p>{t('commerce')}</p>
                                </div>
                                <div>
                                    <strong>Inmobiliaria MFR</strong>
                                </div>

                                <div>
                                    <p>{t('product')}</p>
                                </div>
                                <div>
                                    <strong>{dataPayment.resourceCode.toUpperCase()}</strong>
                                </div>

                                <div>
                                    <p>{t('total')}</p>
                                </div>
                                <div>
                                    <strong>${formatNumber(dataWompi?.amount_in_cents / 100)} COP</strong>
                                </div>

                                <div>
                                    <p>{t('method')}</p>
                                </div>
                                <div>
                                    <strong>{dataWompi?.payment_method_type}</strong>
                                </div>

                                <div>
                                    <p>{t('status')}</p>
                                </div>
                                <div>
                                    {dataWompi.status === "APPROVED" ?
                                        <strong style={{color:'green', fontWeight:'bold'}}>{t('list_status.accept')}</strong>
                                        :dataWompi.status === "DECLINED" || dataWompi.status === "ERROR" || dataWompi.status === "VOIDED"?
                                            <strong style={{color:'red', fontWeight:'bold'}}>{`${t('list_status.fail')}/${t('list_status.rejected')}`}</strong>
                                            :<strong style={{color:'yellow', fontWeight:'bold'}}>{t('list_status.pending')}</strong>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            : null}


            <div className={styles.btn_confirmation}>
                <button onClick={finish}>{nameButton}</button>
                <button onClick={print}>{t('download')}</button>
                <button hidden={displayBtn} onClick={out}>Salir</button>
            </div>
            <hr/>
            <div className={styles.btn_confirmation2}>
                <div>
                    <p style={{textAlign: "center", fontWeight:"bold", width: "400px"}}>
                        {t('msn_info')}
                    </p>
                    <div className={styles.aling_btn}>
                        <button type="button" onClick={reload}>{t('reload')}</button>
                    </div>
                </div>
            </div>

            <div className="alert alert-warning" role="alert" hidden={displayAlert}>
                <p style={{textAlign: 'center'}}>
                    {t('alert1')}<br/>
                    {t('alert1_1')}
                </p>
                <button onClick={out_end} type="button">{t('finish')}</button>
            </div>

        </>
    )
}
