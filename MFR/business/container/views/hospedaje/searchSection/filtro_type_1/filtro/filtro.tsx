import styles from "./styles.module.css"
import 'antd/dist/reset.css';
import {DatePicker, ConfigProvider} from "antd";
import {useEffect, useState} from 'react';
import * as React from "react";
import useMouseUp from "../../../../../../../hooks/useMouseUp";
import BtnSearch from "../../btn_search/btn_search";
import esES from 'antd/lib/locale/es_ES';
import enEN from 'antd/lib/locale/en_US';
import Moment from "moment";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";

const { RangePicker } = DatePicker;
Moment.locale("es");

const options = [
    { id: 1, value: 'Vacaciones', label: 'Vacaciones' },
    { id: 2, value: 'Trabajo', label: 'Trabajo' }
]

const FiltroPrincipal: React.FC<{ min: any, max: any, rtl: boolean, data:any, hijoAPadre:any, translate:any, lang:any, getDollar:any, currency:any,gaEventTracker:any, setLinkQuery:any, setNameBuilding:any }> =
    ({ rtl, data, hijoAPadre, translate, lang, getDollar, currency, gaEventTracker, setLinkQuery, setNameBuilding }) => {
    const STEP_USD = Math.round(10000/getDollar);
    const MIN_USD = Math.round(22);
    const MAX_USD = Math.round(450);

    const [values, setValues] = React.useState([100000, 2000000]);
    const [valueUsd, setValuesUsd] = useState<any>();
    const [subMenuPrecio, setSubMenuPrecio] = useState(false);
    const [subMenuPersonas, setSubMenuPersonas] = useState(false);
    const refsubMenuPrecio = React.useRef<HTMLDivElement>(null);
    const refsubMenuPersonas = React.useRef<HTMLDivElement>(null);
    const [adultos, setAdultos] = useState(1);
    const [ninos, setNinos] = useState(0);
    const [type, setType] = useState('');
    const [date, setDate] = React.useState([]);

    const changeType = (e:any) => {
        setType(e.target.value);
    }

    const rangoPrecio = () => {
        setSubMenuPrecio(!subMenuPrecio);
    }
    const persona = () => {
        setSubMenuPersonas(!subMenuPersonas);
    }

    useMouseUp(refsubMenuPrecio, () => {
        setSubMenuPrecio(false);
    })
    useMouseUp(refsubMenuPersonas, () => {
        setSubMenuPersonas(false);
    })

    useEffect(()=>{
        setValuesUsd([MIN_USD, MAX_USD])
    }, [MIN_USD, MAX_USD])

    const getOnChange = (value:any, dateString:any) => {
        setDate(dateString);
        localStorage.setItem('checkIn', dateString[0])
        localStorage.setItem('checkOut', dateString[1])
    }

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().endOf('day');
    }

    useEffect(() => {
        localStorage.setItem('kids', ninos.toString())
        localStorage.setItem('adults', adultos.toString())
    }, [ninos, adultos])

    return (
        <>
            <div className={styles.general}>

                    <div className={styles.input_general}>
                        <div className={styles.input_group}>
                            <div>
                            <ConfigProvider locale={lang === 'es' ? esES: enEN}>
                                <RangePicker
                                    className={styles.fecha}
                                    format={'DD/MM/YYYY'}
                                    placeholder={['Check-in', 'Check-out']}
                                    onChange={getOnChange}
                                    disabledDate={disabledDate}
                                />
                            </ConfigProvider>
                            </div>

                            <div onClick={persona} className={styles.rango_precio}>
                                <i className={'bx bxs-user ' + styles.ico_use}></i> <p>{adultos} {translate('filter.adults')}{/*ninos} {translate('filter.kids')*/}</p>
                            </div>
                            {subMenuPersonas ? <div ref={refsubMenuPersonas} className={styles.sub_menu_persona}>
                                <div className={styles.adulto}>
                                    <p>{translate('filter.adults')}</p>
                                    <div className={styles.calculo}>
                                        <span onClick={() => setAdultos(adultos > 0 ? adultos - 1 : adultos)} className={styles.neg}>-</span>
                                        <span onClick={() => setAdultos(adultos + 1)} className={styles.mas}>+</span>
                                    </div>
                                </div>
                                <div className={styles.ninos} style={{display: 'none'}}>
                                    <p>{translate('filter.kids')}</p>
                                    <div className={styles.calculo}>
                                        <span onClick={() => setNinos(ninos > 0 ? ninos - 1 : ninos)} className={styles.neg}>-</span>
                                        <span onClick={() => setNinos(ninos + 1)} className={styles.mas}>+</span>
                                    </div>
                                </div>
                            </div> : null}
                            <div>

                            </div>
                        </div>
                        <BtnSearch
                            type={type}
                            selectedPrice={lang === 'en' || currency === 'USD' ? valueUsd : values}
                            adults={adultos}
                            kids={ninos}
                            data={data}
                            hijoAPadre={hijoAPadre}
                            translate={translate}
                            getDollar={getDollar}
                            lang={lang}
                            currency={currency}
                            gaEventTracker={gaEventTracker}
                            date_start={Moment(date[0],'DD/MM/YYYY').format('YYYY-MM-DD')}
                            date_end={Moment(date[1],'DD/MM/YYYY').format('YYYY-MM-DD')}
                            setLinkQuery={setLinkQuery}
                            setNameBuilding={setNameBuilding}
                        />
                    </div>
                {/*</form>*/}

            </div>
        </>
    )
}
export default FiltroPrincipal;
