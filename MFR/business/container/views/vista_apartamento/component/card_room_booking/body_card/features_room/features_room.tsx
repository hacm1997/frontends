import styles from "./styles.module.css";
import * as React from "react";
import {useState} from "react";

export default function FeaturesRoom({data, chars, translate, lang}:any) {
    const [showMore, setShowMore] = useState(true);
    // console.log('data => ', data)

    const characteristics = (code: string) => {
        return chars.filter(((char: any) => char.code === code)).map((obj: any) => obj.value)
    }
    const getExtraChars = (code: string) => {
        return(
            chars.filter(((char:any) => char.code === code)).map((obj:any, index:any) => {
                if(code === 'wifi' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/wifi.png"} alt="wifi" title="Wifi"/> {translate('amenities.wifi')}</p></div>)
                }
                if(code === 'view_sea' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/vista-al-mar.png"} alt="mar" title ="Mar"/> {translate('amenities.view_sea')}</p></div>)
                }
                if(code === 'parking' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/parqueadero.png"} alt="parqueadero" title="Parqueadero"/> {translate('amenities.parking')}</p></div>)
                }
                if(code === 'pool' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/picsina.png"} alt="piscina" title="Piscina"/> {translate('amenities.pool')}</p></div>)
                }
                if(code === 'kitchen' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/comidas.png"} alt="cocina" title="Cocina"/> {translate('amenities.cooking')}</p></div>)
                }
                if(code === 'access_beach' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/playa.png"} alt="accesso a playa" title="Acceso a la playa"/> {translate('amenities.access_beach')}</p></div>)
                }
                if(code === 'air_conditioning' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/aire-acondicionado.png"} alt="aire acondicionado" title="Aire acondicionado"/> {translate('amenities.air')}</p></div>)
                }
                if(code === 'washer' && obj.value === "1"){
                    return(<div key={index}><p><img width={20} height={20} src={"/images/icono-caracteristicas/lavadora.png"} alt="Lavadora" title="Lavadora y secadora"/> {translate('amenities.washer')}</p></div>)
                }
                if(code === 'tv' && obj.value === "1"){
                    return(<div key={index}><p><i className='bx bx-tv' style={{fontSize: '22px', color: '#8C15E4'}}></i> {translate('amenities.tv')}</p></div>)
                }
                if(code === 'heater' && obj.value === "1"){
                    return(<div key={index}><p><i className='bx bx-shower' style={{fontSize: '22px', color: '#8C15E4'}}></i> {translate('amenities.heater')}</p></div>)
                }
                if(code === 'jacuzzi' && obj.value === "1"){
                    return(<div key={index}><p><i className='bx bx-water' style={{fontSize: '22px', color: '#8C15E4'}}></i> {translate('amenities.jacuzzi')}</p></div>)
                }
                if(code === 'gym' && obj.value === "1"){
                    return(<div key={index}><p><i className='bx bx-dumbbell' style={{fontSize: '22px', color: '#8C15E4'}}></i> {translate('amenities.gym')}</p></div>)
                }
            })
        )

    }
    const content = (

        <div className={styles.content}>
            <div>
                <p 
                dangerouslySetInnerHTML={
                    { __html: lang === 'en' ? characteristics('description_english').toString().replace(/\./g, ".<br/>") :
                    data?.description?.replace(/\./g, ".<br/>") }
                }>
                </p>
            </div>

            <hr className={styles.hr}/>

            <div className={styles.info_habitacion}>
                <div >
                    <i className='bx bx-bed'></i>
                </div>
                <div className={styles.descripcion}>
                    <span><strong>{translate('info.up_to')} {Number(characteristics("capacity_adults"))+Number(characteristics("capacity_kids"))} {translate('info.people')}</strong></span>
                    {/*<span>{characteristics("capacity_adults")} Adultos - {characteristics("capacity_kids")} Niños</span>*/}
                    <span>{characteristics("bedrooms")} {translate('amenities.bedroom')}</span>
                    <span>{characteristics("beds")} {translate('amenities.bed')}</span>
                    {Number(characteristics("sofa_bed")) > 0 ? <span>{characteristics("sofa_bed")} {translate('amenities.sofa_bed')}</span> : null}
                </div>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.title_caracteristicas}>
                <h2>{translate('amenities.title')}</h2>
            </div>
            <div className={styles.caracteristicas_habitacion}>

                {getExtraChars('wifi')}
                {getExtraChars('view_sea')}
                {getExtraChars('parking')}
                {getExtraChars('pool')}
                {getExtraChars('kitchen')}
                {getExtraChars('access_beach')}
                {getExtraChars('air_conditioning')}
                {getExtraChars('washer')}
                {getExtraChars('tv')}
                {getExtraChars('heater')}
                {getExtraChars('jacuzzi')}
                {getExtraChars('gym')}

            </div>
        </div>

    )
    return(
        <>
            {content}
        </>
    );
}
