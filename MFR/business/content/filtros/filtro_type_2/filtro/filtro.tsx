import styles from "./styles.module.css";
import * as React from 'react';
import {Range, getTrackBackground} from 'react-range';
import {useEffect, useState} from "react";
import useMouseUp from "../../../../../hooks/useMouseUp";
import {formatNumber} from "../../../../../service/service";
import { useRouter } from "next/router";

const STEP = 100000;
const MIN = 100000;
const MAX = 2000000;

const Filtro: React.FC<{ min: any, max: any, rtl: boolean, data:any, hijoAPadre:any, lang:any, getDollar:any, currency:any, translate:any, setItemOffset:any, linkQuery: boolean }> =
    ({ rtl, data, hijoAPadre, lang, getDollar, currency, translate, setItemOffset, linkQuery }) => {
    const STEP_USD = Math.round(10000/getDollar);
    const MIN_USD = 22;
    const MAX_USD = 450;
    const [valueUsd, setValuesUsd] = useState([22, 450]);
    const [values_type1, setValues_type1] = React.useState([100000, 2000000]);
    const refsubMenuPrecio = React.useRef<HTMLDivElement>(null);
    const [subMenuPrecio, setSubMenuPrecio] = useState(false);
    const router = useRouter();
    const [updateListBuilding, setUpdateListBuilding] = useState<any[]>([])
    const [amenities, setAmenities] = React.useState({
        beds: 0,
        bedrooms: 0,
        minPrice: 0,
        maxPrice: 0,
        building: ''
    });
    const handleChange = async (evt:any) =>{
        const value = evt.target.value;
        setAmenities({
            ...amenities,
            [evt.target.name]: value
        });

    }
    // console.log('router => ', router.query.building)

    const [listUpdate, setListUpdate] = useState<Array<any>>([]);
    //Valor Min y Max parseado

    const SentToFather = () => {
        hijoAPadre(listUpdate);
    }

    useMouseUp(refsubMenuPrecio, () => {
        setSubMenuPrecio(false);
    })

    useEffect(() => {
        SentToFather( );
    }, [listUpdate]);

    //Valor Min y Max parseado
    const min = lang ==='en' || currency=== 'USD' ? valueUsd[0] :values_type1[0];
    const max = lang ==='en' || currency=== 'USD' ? valueUsd[1] :values_type1[1];
    const queryBuilding = router.query.building;

    let updateList = data.filter((r:any) => (r.characteristics.filter(((char:any) => char.code === "type")).map((obj:any) => obj.value) != "Compra"));

   const buildList: string[] = []
    useEffect(() => {
        builds
    }, [updateList])

    const builds = updateList
    .filter((r: any) => r.characteristics.filter(((char: any) => char.code === "type")).map((obj: any) => obj.value) !== "Compra")
    .map((dt: any, index: any) => {
        const characteristics = (code: string) => {
        const valueToAdd = dt.characteristics.filter(((char: any) => char.code === code)).map((obj: any) => obj.value).toString();
        if (buildList.indexOf(valueToAdd) === -1) {
            buildList.push(valueToAdd);
        }
        }
        characteristics('building');
    });
    const uniqueBuildList = Array.from(new Set(buildList));

    const applyFilter = () => {
        let filteredList = [...updateList];
        /*updateList = updateList.filter(
            (item:any) => Number((lang==='en' || currency==='USD' ? item.price/getDollar : item.price)) >= Number(amenities.minPrice) && (lang==='en' || currency==='USD' ? item.price/getDollar : item.price) <= Number(amenities.maxPrice)
        );*/

        // Filtro 1
        if (amenities.minPrice && amenities.maxPrice) {
            filteredList = filteredList.filter((dt: any) => {
                const priceMatch = dt.characteristics.find((char: any) => char.code === 'price');
                return priceMatch && Number((lang==='en' || currency==='USD' ? Number(priceMatch.value)/getDollar : Number(priceMatch.value))) >= Number(amenities.minPrice) && (lang==='en' || currency==='USD' ? Number(priceMatch.value)/getDollar : Number(priceMatch.value)) <= Number(amenities.maxPrice);
            });
        }

        // Filtro 2
        if (amenities.bedrooms) {
            filteredList = filteredList.filter((dt: any) => {
                const bedroomsMatch = dt.characteristics.find((char: any) => char.code === 'bedrooms');
                return bedroomsMatch && Number(bedroomsMatch.value) === Number(amenities.bedrooms);
            });
        }
          // Filtro 3
        if (amenities.building !== '') {
            console.log('building amenities => ', amenities.building);
            filteredList = filteredList.filter((dt: any) => {
            const buildingMatch = dt.characteristics.find((char: any) => char.code === 'building');
            if(buildingMatch){
                return buildingMatch && buildingMatch.value.toString().toUpperCase() === amenities.building.toUpperCase();
            }
        })};

        /*if (queryBuilding !== undefined) {
            setLinkQuery(true)
            filteredList = filteredList.filter((dt: any) => {
            const buildingMatch = dt.characteristics.find((char: any) => char.code === 'building');
            return buildingMatch && buildingMatch.value.toString().toUpperCase() === queryBuilding?.toString().toUpperCase();
        })};*/

        // updateList = deleteDuplicate(newUpdate);
        setItemOffset(0)
        hijoAPadre(filteredList)

    }

    useEffect(() => {
        applyFilter();

    }, [values_type1, amenities.beds, amenities.bedrooms, amenities.building]);

    // console.log(amenities)
    // useEffect(() => {
    //     setUpdateListBuilding(updateList)
    //     amenities.building = queryBuilding as string
    //     if(router.asPath.includes('building')){
    //         setLinkQuery(true)
    //     }
    //     applyFilter();
    // },[queryBuilding])


    return (
        <>

            <div className={styles.general}>
                <div className={styles.content_1}>
                    <h2>{translate('filter2.title')}</h2>
                    <p>{translate('filter2.description')}</p>

                    <div className={styles.range}>
                        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>

                        </div>
                        <div className={styles.content_range}>
                            <div>
                                <p>{translate('filter2.range')}</p>
                            </div>

                        </div>
                        <div className={styles.valor_filtro}>
                            <input type="number" onChange={handleChange} placeholder="$" name="minPrice"/>
                            <h4>-</h4>
                            <input type="number" onChange={handleChange} placeholder="$" name="maxPrice"/>
                            <a style={{cursor:'pointer'}} onClick={applyFilter}><img src="/images/FLECHA.png" alt="flecha" title="search" /></a>
                        </div>


                    </div>


                </div>
                {/* <div className={styles.content_2}>
                    <h2>{translate('filter2.beds')}</h2>
                    <div className={styles.cantidad_camas}>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="beds"
                                   id="inlineRadio1" value={1} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="beds"
                                   id="inlineRadio2" value={2} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="beds"
                                   id="inlineRadio3" value={3} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="beds"
                                   id="inlineRadio4" value={4} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">4</label>
                        </div>

                    </div>
                </div> */}
                <div className={styles.content_3}>
                    <h2>{translate('filter2.bedrooms')}</h2>
                    <div className="cantiad_banos">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="bedrooms"
                                   id="baño1" value={1} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="bedrooms"
                                   id="baño2" value={2} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="bedrooms"
                                   id="baño3" value={3} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">3</label>
                        </div>
                    </div>
                </div>
                <div className={styles.select}>
                            <h5>{translate('filter2.subtitle')}</h5>

                            {linkQuery ?
                                <a href={lang === 'es'? '/' : '/en'}>Otros aptos</a>
                            :
                                <select name="building" onChange={handleChange} id="select">
                                    <option value="">{translate('filter2.dropdown')}</option>
                                {Array.isArray(uniqueBuildList)?
                                uniqueBuildList.map((item, index) => (
                                    <option value={item.toUpperCase()} key={index}>{item}</option>
                                ))
                                : null}

                                </select>
                            }

                    </div>
            </div>
        </>
    )

}

export default Filtro

