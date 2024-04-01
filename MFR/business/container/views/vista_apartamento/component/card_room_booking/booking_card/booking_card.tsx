import styles from './styles.module.css';
import * as React from "react";
import Price from "./price/price";
import Stars from "./stars/stars";
import Form from "./form_booking_card/form/form";
import {formatNumber} from "../../../../../../../service/service";
import {useContext, useEffect, useState} from "react";
import {EventAuthContext} from "../../../../../../content/contexts/eventAuthContext";

export default function BookingCard({data, chars, dataApto, translate, lang, gaEventTracker}:any) {
    const {currency, setCurrency, getDollar} = useContext(EventAuthContext);
    const [adultsCount, setAdultsCount] = useState(1);

    const handlerCurrency = (event:any) => {
        const value = event.target.value
        setCurrency(value)
    }
    const characteristics = (code: string) => {

        return chars.filter(((char: any) => char.code === code)).map((obj: any) => obj.value)

    }
    const [dates, setDates] = useState([])
    const [price, setPrice] = useState('')
    const [bracelet, setBracelet] = useState('')
    const [braceletPrice, setbraceletPrice]= useState(null)
    const getNubmerDays = (dataChild:any) => {
        setDates(dataChild);
    }

    const [realPrice, setRealPrice] = useState(price);

    const [pricingCaculated, setPricingCaculated] = useState(formatNumber(characteristics("price")))
    const [priceCleanlines, setPriceCleanlines] = useState(0);

    const content = (

        <div className={styles.formulario}>
            <div className={styles.card} id='booking'>
                <div className={styles.content}>
                    <Price translate={translate} setRealPrice={setRealPrice}
                           price={Number(pricingCaculated) !== 0 ? Number(pricingCaculated): characteristics("price")}
                           defaultPrice={price} noBlanckPrice={characteristics("price")}
                           lang={lang}
                           cleanliness={priceCleanlines !== 0 ? priceCleanlines : characteristics("cleanliness")}
                           bracelet={bracelet}
                           braceletPrice={braceletPrice}
                    />
                    {lang === 'es' ?
                        <select className={styles.currency} onChange={handlerCurrency}>
                            <option value="COP" selected={currency === 'COP' || lang === 'es'}>COP</option>
                            <option value="USD" selected={currency === 'USD' || lang === 'en'}>USD</option>
                        </select>
                    :null}
                    {/*<Stars ratio={data.rating}/>*/}
                </div>
                {/*<div>
                    <label>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                        <strong>{currency === 'USD' || lang === 'en' ? 'Ticket Bracelet' : 'Incluir Manilla'} (${currency === 'USD' || lang === 'en' ? Math.round(Number(formatNumber(characteristics("bracelet")))/Number(getDollar)*1000): formatNumber(characteristics("bracelet"))}):</strong>
                    </label>
                </div>*/}
                <Form
                    date_block={characteristics("date_block")[0]}
                    lang={lang}
                    translate={translate}
                    price={Number(pricingCaculated)}
                    priceNormal={formatNumber(characteristics("price"))}
                    priceCouple={formatNumber(characteristics("price_couple"))}
                    bedrooms={formatNumber(characteristics("bedrooms"))}
                    seassons={characteristics("priceBySeasson")[0]}
                    ratio={"4.5"}
                    chars={characteristics}
                    anticipation_days={Number(characteristics("anticipation_days"))}
                    data={data}
                    loc={characteristics("location")}
                    idCalendar={characteristics("id_calendar").toString()}
                    idCalendarGoogle={characteristics("id_calendar_g")}
                    getNubmerDays={getNubmerDays}
                    dataApto={dataApto}
                    gaEventTracker={gaEventTracker}
                    bracelet={characteristics("bracelet").toString()}
                    bracelet_info={characteristics("bracelet_info").toString()}
                    setAdultsCount={setAdultsCount}
                    setPricingCaculated={setPricingCaculated}
                    setPriceCleanlines={setPriceCleanlines}
                    cleanlinessBase={characteristics("cleanliness")}
                    setbraceletPrice={setbraceletPrice}
                    braceletPrice={braceletPrice}
                />
            </div>
        </div>

    )

    return(
        <>
            {content}
        </>
    );
}
