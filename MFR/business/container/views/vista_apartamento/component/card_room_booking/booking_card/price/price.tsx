import styles from "./styles.module.css";
import * as React from "react";
import {useContext, useEffect} from "react";
import {EventAuthContext} from "../../../../../../../content/contexts/eventAuthContext";
import {formatNumber} from "../../../../../../../../service/service";

export default function Price(props:any) {
    const {getDollar, currency} = useContext(EventAuthContext);

    useEffect(()=>{
        props.setRealPrice(currency === 'USD' ? `${Math.round(Number(props.defaultPrice !== 'NaN' ? props.defaultPrice :Number(props.noBlanckPrice))/Number(getDollar))}`: `${props.price}`)
    }, [currency])
    useEffect(()=>{
        props.setRealPrice(props.lang === 'en' ? `${Math.round(Number(props.defaultPrice !== 'NaN' ? props.defaultPrice :Number(props.noBlanckPrice))/Number(getDollar))}`: `${props.price}`)
    })

    return(
        <>
            <p>
                <span>{currency === 'USD' || props.lang === 'en' ? `${Math.round(Number(props.price !== 'NaN' ? props.price :Number(props.price))/Number(getDollar))} USD`: `${formatNumber(props.price).toString()} COP`}</span> / {props.lang === 'en' ? 'Night' : 'Noche'}<br/>
                <h5>{props.translate('form.night')}</h5>
                <strong style={{fontSize: '14px'}}>{currency === 'USD' || props.lang === 'en' ? 'Cleaning fee' : 'Tarifa de Aseo'}: {currency === 'USD' || props.lang === 'en' ? `$${Math.round(Number(props.cleanliness)/Number(getDollar))}` : (props.cleanliness ? `$${formatNumber(props.cleanliness)}` : ' A calcular')}</strong><br />
                <strong style={{fontSize: '14px'}}>{currency === 'USD' || props.lang === 'en' ? 'Bracelet' : 'Manillas'}: {currency === 'USD' || props.lang === 'en' ? `$${Math.round(Number(props.braceletPrice)/Number(getDollar))}` : (props.braceletPrice ? `$${formatNumber(props.braceletPrice)}` : ' A calcular')}</strong>
            </p>
        </>
    );
}
