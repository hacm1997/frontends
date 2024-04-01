import styles from "./styles.module.css";
import * as React from "react";
import Title from "../title/title";
import Location from "./location/location";
import Share from "./share/share";
import BtnBooking from "../btn_booking/btn_booking";
import Stars from "./stars/stars";
import {useEffect, useState} from "react";
import Filtro from "../../../../../../../content/filtros/filtro_type1_2/filtro_type1_2";
import Link from "next/link";
import { useCookies } from "react-cookie";

export default function BodyCopy({chars, data, translate, lang}:any) {
    const [cookies, setCookie] = useCookies();
    const [link, setLink] = useState('')

    //console.log(data)
    const characteristics = (code: string) => {

        return chars.filter(((char: any) => char.code === code)).map((obj: any) => obj.value)

    }
    const content = (

        <div className={styles.descripcion}>
            <div>
                <Title title={data.name} />
                {/*<p>{data.owner}</p>*/}
            </div>
            <div className={styles.content}>
                <Stars ratio={`${data.rating} (${data.rating_count})`} />
                <Location loc={characteristics("location")} />
                {/*char*/}
                <Share text={translate('section1.share')}/>
            </div>
        </div>

    )

    const setUrl = (building:string) => {
        const link_to_back: string = lang === 'es' ? `/?building=${building}#apartamento` : `/en?building=${building}#apartamento`
        setLink(link_to_back)
    }

    useEffect(() => {
        setUrl(characteristics('building').toString())
    }, [characteristics('building')])

    return(
        <>
            <div className={styles.content_1}>

                {content}
               
                <div className={styles.buttonsGroup}>
                    <div>

                    <a href={link}><button  name="ver-mas" className={styles.verMas}>{translate('section1.buttonSeeMore')} {characteristics('building')}</button></a> 
                    </div>
                    <BtnBooking
                        btn_text={translate('section1.button')}
                    />
                </div>

            </div>

        </>
    );
}
