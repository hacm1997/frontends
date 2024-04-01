import styles from './styles.module.css';
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {DatePicker, ConfigProvider} from "antd";
import useMouseUp from "../../../../../../../../../hooks/useMouseUp";
import BtnBooking from "../btn_booking/btn_booking";
import {RangePickerProps} from "antd/es/date-picker";
import 'dayjs/locale/es';
import { CronJob } from 'cron'
import dayjs, { Dayjs } from "dayjs";
import {
    getAccessToken,
    getAllBooking,
    getBookingAvailable,
    getCalendarEvents, getPricing, googleAuthConfig, googleAuthToken
} from "../../../../../../../../../service/api/api";
import esES from 'antd/lib/locale/es_ES';
import enEN from 'antd/lib/locale/en_US';
import Moment from "moment";
import {EventAuthContext} from "../../../../../../../../content/contexts/eventAuthContext";

const {RangePicker} = DatePicker;
Moment.locale("es");
export default function Form({date_block, chars, price, priceNormal, priceCouple, data, bedrooms, getNubmerDays, setPriceCleanlines, cleanlinessBase,
    loc, idCalendar, translate, lang, gaEventTracker, idCalendarGoogle, bracelet, anticipation_days, setAdultsCount, setPricingCaculated, seassons, setbraceletPrice, braceletPrice}:any) {
    const {currency, setCurrency} = useContext(EventAuthContext);
    const [date, setDate] = React.useState<string[]>([]);
    const [resource, setResource] = useState()
    const [viewButton, setViewButton] = useState(false);
    const [enableButton, setEnableButton] = useState(false);
    const [enableDates, setEnableDates] = useState(false);
    const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
    const [isDefaultDate, setIsDefaultDate] = useState(false)
    const [dateInit, setDateInit] = useState<string | null>(null);
    const [dateEnd, setDateEnd] = useState<string | null>(null);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const persona = () => {
        setSubMenuPersonas(!subMenuPersonas)

    }
    const refsubMenuPersonas = React.useRef<HTMLDivElement>(null);
    useMouseUp(refsubMenuPersonas, () => {
        setSubMenuPersonas(false)
    })
    const [subMenuPersonas, setSubMenuPersonas] = useState(false)
    const [adultos, setAdultos] = useState(1)
    const [ninos, setNinos] = useState(0)
    const [slotDate, setSlotDates] = useState<any>([])
    const [slotDateGoogle, setSlotDatesGoogle] = useState([])
    const [slotDateGoogle2, setSlotDatesGoogle2] = useState([])
    const [accessToken, setAccessToken] = useState('');
    const [countDateStatus, setCountDateStatus] = useState(true)
    const [refresh, setRefresh] = useState('')

    const getToken = () => {
        googleAuthToken().then(( res ) => {
            console.log("success");
        }).catch(( err ) => {
            console.log(err);
        })
        let sum = 0;
        const job = new CronJob(
            '*/1 * * * * *',
            async function () {
                sum += 1;
                await  googleAuthToken().then(( res ) => {
                    console.log('succes auth')
                    setAccessToken(res.data.accessToken);
                    setEnableDates(false)
                    job.stop()
                }).catch((e: Error) => {
                    setEnableDates(true)
                    console.log(e);
                });
                if (slotDateGoogle.length > 0) {
                    setEnableDates(false)
                    job.stop()
                }
                if(sum > 7){
                    job.stop()
                }
            },
            null,
            true,
            'America/Los_Angeles'
        );
        job.start();
    }
    async function getSlotDates(){
        await getCalendarEvents(accessToken, idCalendar as string).then((res)=>{
            setSlotDatesGoogle(res.data.items);
        }).catch((e: Error) => {
            setRefresh('refresh')
            console.log(e);
        });

        await getCalendarEvents(accessToken, idCalendarGoogle.toString()).then((res)=>{
            setSlotDatesGoogle2(res.data.items.filter((item:any) => item.summary === 'bloqueado' || item.summary === 'Bloqueado'));
        }).catch((e: Error) => {
            setRefresh('refresh')
            console.log(e);
        });

        await getAllBooking().then((response:any)=>{
            setSlotDates(response.data?.data.filter((item:any) => item._props.resource.code === data.resource_id as string && (item._props.state === 'paid' || item._props.state === 'pending')));
        }).catch((e: Error) => {
            console.log(e);
        });
    }
    const [statusButton, setStatusButton] = useState(false);
    const [statusButtonTwo, setStatusButtonTwo] = useState(false);
    const [statusButtonThree, setStatusButtonThree] = useState(false);
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        if(data !== undefined){
            const selectedStart = dayjs(date[0], 'DD/MM/YYYY');
            const selectedEnd = dayjs(date[1], 'DD/MM/YYYY');
            const isBlockedDate = date_block?.some((date:any) => dayjs(date).isSame(dayjs(current), 'day'));
            // console.log('is blocked => ', isBlockedDate)
            if (isBlockedDate) {
                setStatusButtonThree(false);
                return true;
            }
            if(date_block){
                date_block?.some((date:any)=> {
                    if(selectedStart && selectedEnd && dayjs(date) >= selectedStart && dayjs(date) <= selectedEnd){
                        setStatusButtonThree(true)
                    }else{
                        setStatusButtonThree(false)
                    }
                })
            }
            const combinedSlotDates = slotDateGoogle.concat(slotDateGoogle2);
            if (combinedSlotDates.length > 0) {
                const isBlockedInRange = combinedSlotDates.some((item:any) => {
                    const itemStart = dayjs(item.start?.date);
                    const itemEnd = dayjs(item.end?.date);
                    
                    return (
                      (current >= dayjs(itemStart).endOf('day') &&
                        current <= dayjs(itemEnd).endOf('day').add(-2, 'day')) ||
                      (selectedStart <= itemEnd.endOf('day').add(-2, 'day') && selectedEnd >= itemStart.add(1, 'day'))
                    );
                  });
            
                if (isBlockedInRange) {
                    //console.log('here 1')
                    setStatusButtonTwo(true)
                }else{
                    //console.log('here 2')
                    setStatusButtonTwo(false)
                }
                const isBlockedInRange2 = slotDate.some((slotItem:any) => {
                    const itemStart = dayjs(slotItem._props.date_from);
                    const itemEnd = dayjs(slotItem._props.date_to);
                    
                    return (
                      (current >= dayjs(itemStart).endOf('day') &&
                        current <= dayjs(itemEnd).endOf('day').add(-2, 'day')) ||
                      (selectedStart <= itemEnd.endOf('day').add(-1, 'day') && selectedEnd >= itemStart)
                    );
                  });
            
                if (isBlockedInRange2) {
                    setStatusButton(true)
                }else{
                    setStatusButton(false)
                }
                
                return combinedSlotDates.some((item:any)=> {
                    const itemStart = dayjs(item.start?.date);
                    const itemEnd = dayjs(item.end?.date);
                    const itemDateDifference = itemEnd.diff(itemStart, 'day');
                    return (current && current < dayjs().endOf('day')) || (current >= dayjs(itemStart).endOf('day') && current <= dayjs(itemEnd).endOf('day')) || (itemDateDifference === 1 && (current.isSame(itemStart, 'day'))) || slotDate.some((slotItem:any) => {
                        const slotStart = dayjs(slotItem._props.date_from);
                        const slotEnd = dayjs(slotItem._props.date_to);
                        const slotDateDifference = slotEnd.diff(slotStart, 'day');
    
                        return (current && current < dayjs().endOf('day')) || (current >= dayjs(slotStart).endOf('day') && current <= dayjs(slotEnd).endOf('day')) || (slotDateDifference === 1 && (current.isSame(slotStart, 'day'))) || isBlockedDate;
                    });
                });
            } else {
                const add_days = anticipation_days ? anticipation_days-1 : 1;
                return current && current < dayjs().endOf('day').add(add_days, 'day') || isBlockedDate;
            }
        }
    };
   
    const [countBracelet, setcountBracelet] = useState(null)
    const getOnChange = (value:any, dateString:any) => {
        const checkInDate = dayjs(dateString[0], 'DD/MM/YYYY');
        const checkOutDate = dayjs(dateString[1], 'DD/MM/YYYY');
        setDates([checkInDate, checkOutDate]);
        setDate(dateString);
        if(dateString[0] === '' && dateString[1] === ''){
            localStorage.setItem('checkIn', dateString[0])
            localStorage.setItem('checkOut', dateString[1])
            setViewButton(true)
        }
    }

    const enableBtn = () => {
        const fechaInicio = new Date(Moment(date[0],'DD/MM/YYYY').format('YYYY-MM-DD')).getTime();
        const fechaFin    = new Date(Moment(date[1],'DD/MM/YYYY').format('YYYY-MM-DD')).getTime();
        const diff = (fechaFin - fechaInicio) / (1000*60*60*24);
        if(!date[0] || !date[1] || diff >= Number(chars('durationAvailable').toString())){
            if(localStorage.getItem('checkIn') !== '' && localStorage.getItem('checkOut') !== ''){
                setViewButton(false)
            }else{
                setViewButton(true)
            }
            setCountDateStatus(true)
        }else{
            setViewButton(false)
            setCountDateStatus(false)
        }
    }

    useEffect(() => {
        enableBtn()
        getNubmerDays(date)
        setResource(data.resource_id)
    }, [date])

    useEffect(()=>{
        if(refresh === 'refresh'){
            window.location.href === window.location.href;
        }
    }, [refresh])

    useEffect(() => {
        getToken();
    }, [currency])

    useEffect(()=>{
        getSlotDates();
    }, [accessToken])

    useEffect(()=>{
        setAdultsCount(adultos);
    }, [adultos])

    const disableSpanAdults = {
        pointerEvents: adultos >= Number(chars('capacity_adults').toString()) ? 'none' : 'auto'
    } as any
    const disableSpanKids = {
        pointerEvents: ninos >= Number(chars('capacity_kids').toString()) ? 'none' : 'auto'
    } as any

    useEffect(() => {
        const dateInitial = Moment(date[0],'DD/MM/YYYY').format('YYYY-MM-DD')
        const dateEnding = Moment(date[1],'DD/MM/YYYY').format('YYYY-MM-DD')
        setDateInit(dateInitial)
        setDateEnd(dateEnding)
    }, [date])
    const dataBooking = {
        booking: {
            details: {
                price: priceNormal,
                priceCouple: priceCouple,
                adults: adultos,
                kids: ninos,
                cleanliness: cleanlinessBase.toString() ? cleanlinessBase.toString() :"0",
                seasson: seassons ? seassons :[{}],
                bedroom: parseInt(bedrooms),
                building: loc.toString(),
                bracelet: bracelet ? bracelet :0,
                count_bracelet: countBracelet ? countBracelet :0,
              },
              resource_code: data.resource_id,
              start_date: dateInit,
              end_date: dateEnd
        }
    }

    const calculatingPrice = () => {
        if(date[0] !== '' || date[1] !== ''){
            getPricing(dataBooking).then((res:any) => {
                setPricingCaculated(res.data.data.pricePerNight);
                setPriceCleanlines(res.data.data.cleanliness);
                setbraceletPrice(res.data.data.braceletPrice);
            }).catch((err: Error) => {
                console.log(err);
                setPricingCaculated(Number(priceNormal))
            })
        }else{
            setPricingCaculated(priceNormal*1000)
        }
    }
    useEffect(() => {
        calculatingPrice();
    }, [date, adultos, ninos, countBracelet, isDefaultDate])

    useEffect(() => {
        const kidsFromFilter = localStorage.getItem('kids')
        const adultsFromFilter = localStorage.getItem('adults')
        const checkIn = localStorage.getItem('checkIn');
        const checkOut = localStorage.getItem('checkOut');
        if (checkIn && checkOut && checkIn !== undefined && checkOut !== undefined) {
            setDate([checkIn, checkOut])
            const dateInitial = Moment(checkIn,'DD/MM/YYYY').format('YYYY-MM-DD')
            const dateEnding = Moment(checkOut,'DD/MM/YYYY').format('YYYY-MM-DD')
            setDateInit(dateInitial)
            setDateEnd(dateEnding)
            const checkInDate = dayjs(checkIn, 'DD/MM/YYYY');
            const checkOutDate = dayjs(checkOut, 'DD/MM/YYYY');
            setCheckInDate(checkIn);
            setCheckOutDate(checkOut);
            setDates([checkInDate, checkOutDate]);
            setIsDefaultDate(!isDefaultDate)
            setViewButton(false)
        }
        if(kidsFromFilter && adultsFromFilter){
            setAdultos(Number(adultsFromFilter))
            setNinos(Number(kidsFromFilter))
        }
    }, []);

    useEffect(() => {
        if(dateInit !== '' && dateEnd !== '' && dateInit !== 'Fecha inválida' && dateEnd !== 'Fecha inválida'){
            calculatingPrice();
        }
    }, [dateInit, dateEnd, data])

    return(
        <>
            <ConfigProvider locale={lang === 'es' ? esES: enEN}>
                {date[0] === '' ? 
                    <RangePicker
                        className={styles.fecha}
                        format={'DD/MM/YYYY'}
                        placeholder={['Check-in', 'Check-out']}
                        disabledDate={disabledDate}
                        onChange={getOnChange}
                        disabled={enableDates}
                    />
                :
                    <RangePicker
                        className={styles.fecha}
                        format={'DD/MM/YYYY'}
                        placeholder={['Check-in', 'Check-out']}
                        disabledDate={disabledDate}
                        onChange={getOnChange}
                        disabled={enableDates}
                        value={dates}
                    />
                }
            </ConfigProvider>

            <div onClick={persona} className={styles.cantidad_personas}>
                <h2><strong>{translate('form.guests')}</strong></h2>
                <p> {adultos} {translate('form.adults')}
                    {/* | {ninos} {translate('form.kids')*/}</p> 
            </div>
            {subMenuPersonas ?
                <div ref={refsubMenuPersonas} className={styles.sub_menu_persona}>
                    <div className={styles.adulto}>
                        <p><strong>{translate('form.adults')} </strong>{/*({translate('form.description_adults')})*/}</p>
                        <div className={styles.calculo}>
                                        <span
                                            onClick={() => setAdultos(adultos > 0 ? adultos - 1 : adultos)}
                                            className={styles.neg}>-</span>
                            <span onClick={() => setAdultos(adultos + 1)}
                                  className={styles.mas} aria-disabled={true} style={disableSpanAdults}>+</span>
                        </div>
                    </div>
                    {/*<div className={styles.ninos}>
                        <p><strong>{translate('form.kids')} </strong>({translate('form.description_kids')})</p>
                        <div className={styles.calculo}>
                                        <span onClick={() => setNinos(ninos > 0 ? ninos - 1 : ninos)}
                                              className={styles.neg}>-</span>
                            <span onClick={() => setNinos(ninos + 1)}
                                  className={styles.mas} style={disableSpanKids}>+</span>
                        </div>
                    </div>*/}
                </div> : null}

            {statusButton === true || statusButtonTwo === true || statusButtonThree === true ?
                <div className={styles.info_alert}>
                    <p style={{textAlign: 'center', fontSize: '14px', fontWeight: 'bold'}}>{translate('form.info_alert1')}<br/>
                        {translate('form.info_alert2')}</p>
                </div>
                :
                <BtnBooking
                    translate={translate}
                    code={data.resource_id}
                    adultos={adultos}
                    ninos={ninos}
                    title={data.name || "hola"}
                    price={price}
                    date={date}
                    viewButton={viewButton}
                    loc={loc}
                    currency={currency}
                    idCalendar={idCalendar}
                    idCalendarGoogle={idCalendarGoogle}
                    enableButton={enableButton}
                    gaEventTracker={gaEventTracker}
                    accessToken={accessToken}
                    bracelet={bracelet}
                />
            }
            {/*countDateStatus ?
                <p style={{textAlign:"center"}}>{`${translate('form.adverting')} (${chars('durationAvailable').toString()})`}</p>
        : null*/}


        </>
    );
}
