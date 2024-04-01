import {useRouter} from "next/router";
import * as crypto from 'crypto';
import React, {useCallback, useContext, useEffect, useState, useRef} from 'react';
import { useEpayco } from 'react-epayco';
import {getBooking, getCalendarEvents, getResource} from "../../../../service/api/api";
import styles from "./styles.module.css"
import {useCookies} from "react-cookie";
import {formatNumber} from "../../../../service/service";
import config from "../../../../infrastructure/config";
import {EventAuthContext} from "../../../content/contexts/eventAuthContext";
import useTranslation from "next-translate/useTranslation";
import { createHash } from "crypto";
import { getEventsCalendar } from "../../../../service/googleCalendar";
import WompiCheckoutForm from "./wompi";

export default function Payments(props:any) {
    const router = useRouter();
    const {getDollar} = useContext(EventAuthContext);
    const [dataApto, setDataApto] = React.useState('');
    const [chars, setChars] = React.useState<any>([]);
    const [cookies, setCookie] = useCookies();
    const [booking, setBooking] = useState<any>([]);
    const {t, lang} = useTranslation('payment');
    const [referenceCode, setReferenceCode] = useState('')
    const [signature, setSignature] = useState('')
    const [events, setEvents] = useState<boolean | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const {
        query: { name, dni, currency },
    } = router as any

    const wsp_link = `https://api.whatsapp.com/send?phone=573012164363&text=Hola%20MFR.%0AMi%20nombre%20es%20${name}%20y%20vengo%20de%20su%20sitio%20web📲%0AEstoy%20interesado%20en%20reservar%20el%20apartamento%20${dataApto}431%2C%20y%20requiero%20información🙌`

    function getResoruceCode(code: string) {
        getResource(code)
            .then((response: any) => {
                setDataApto(
                    response.data.data[0].name,
                );
                setChars(response.data.data[0].characteristics)

            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    function getBookingDetail(code: string, startDate: string, dni: string){
        getBooking(code, startDate, dni)
            .then((response: any) => {
                setBooking(
                    JSON.parse(response.data.data[0]._props.bookingDetails),
                );
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
    
    const generarCodigoUnico = (longitud: number): string => {
        const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
        let codigo = '';
      
        for (let i = 0; i < longitud; i++) {
          const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
          codigo += caracterAleatorio;
        }
        
        return codigo;
    }

    async function generarFirma(datos: string): Promise<string> {
        const encondedText: Buffer = Buffer.from(datos, 'utf-8');
        const hashHex: string = createHash('sha256').update(encondedText).digest('hex');
        return hashHex; 
    }
    
    useEffect(() => {
        getResoruceCode(cookies.codeResource)
        // @ts-ignore
        getBookingDetail(cookies.bookingCode, cookies.startDate, dni)
        setReferenceCode(generarCodigoUnico(32))

    }, [dni]);

    useEffect(() => {

        const generateAndSetSignature = async () => {

            const _currency = currency ? currency.toUpperCase() : currency;
            const amountInCents = booking.price ? (Number(booking.price) * 100).toString() : (Number(booking.price) * 100).toString();
            const _referenceCode = referenceCode;
    
            const datosParaFirma = `${_referenceCode}${amountInCents.toString()}${_currency}${process.env.NEXT_PUBLIC_WOMPI_INTEGRITY as string}`;
            
            setSignature(await generarFirma(datosParaFirma));
        }
        generateAndSetSignature();
    }, [booking.price])

    const bookingExists = async() => {
        try {
            const result = await getEventsCalendar(chars, booking, cookies);
            setEvents(result || false);
        } catch (error) {
            console.error('Error al obtener eventos del calendario:', error);
            setEvents(false); // O establece el estado de acuerdo con el error
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await bookingExists()
        console.log(event)
    
        // Verifica si events es true antes de permitir el envío del formulario
        if (!events) {

          if (formRef.current) {
            formRef.current.submit();
          } else {
            console.error('No se puede acceder a formRef.current');
          }

          // Envía el formulario
        } else {
          alert('EL aparatamento ya sido reservado para las fechas seleccionadas');
        }
      };

    return (
        <>
        <section className={styles.content}>
            <div className={styles.title}>
                <p>{t('title')}</p>
            </div>

           
{/* tabla de muestra */}

<div className={styles.table+ " table"}>
                <table>
                    <thead>
                        
                        <div className={styles.row}>
                            <th className={styles.th}>{t('name_apto')}:</th>
                            <td className={styles.th}>{dataApto}</td>
                            <th className={styles.th}>{t('price')}:</th>
                            <td className={styles.th}>{formatNumber(booking.price)} {" "}{"COP"} {currency === 'USD' || lang === 'en' ? `/ ${Math.round(Number(booking.price)/Number(getDollar))} USD`: null}</td>
                            </div>
                        
                    </thead>
                    <tbody>
                    <div className={styles.row}>
                            <th className={styles.th}>{t('consumer_name')}:</th>
                            {/* @ts-ignore}*/}
                            <td className={styles.th}>{name}</td>
                            <th className={styles.th}>{t('dni')}:</th>
                            <td className={styles.th}>{booking.dni}</td>
                        </div>
                    </tbody>
                </table>
                
            </div>
            <div style={{display:"flex", justifyContent:"center"}} id="wompi-button-container">
            <WompiCheckoutForm currency={currency} price={booking.price} referenceCode={referenceCode} signature={signature} lang={lang} />
            </div>
        </section>
        <a
            href={wsp_link}
            target="_blank"
            rel="noreferrer"
            title="Whatsapp"
            className={styles.float}
        >
            {lang === 'es' ? 
                <div>
                    Quiero más <br /> información <br /> sobre este apartamento
                </div>
            :   <div>
                    I want more <br /> information <br/> about this apartment
                </div>
            }
        </a>

        </>
    )
}
