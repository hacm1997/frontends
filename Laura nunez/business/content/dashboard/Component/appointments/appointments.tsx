import styles from "./styles.module.css";
import {useEffect, useState} from "react";

export default function Appointments(dataJson:any) {
    //console.log(dataJson.dataJson.characteristics)

    /*const characteristics = (code:string) => {

        return dataResources.characteristics.filter(((char:any) => char.code === code)).map((obj:any) => obj.value)

    }*/

    return (
        <>
            <h1>¡HELLO WORLD!</h1>
            {/*<div className={styles.general}>
                <div className={styles.card_apartamento}>


                    <div className={styles.info}>
                        <div className={styles.title}>
                            <h2>{dataResources.name}</h2>
                            <p>{characteristics("location")}</p>
                        </div>
                        <div className={styles.caracteristicas}>
                            <p>{characteristics("bedrooms")} Alcoba</p>
                            <p>Máximo {Number(characteristics("capacity_adults"))+Number(characteristics("capacity_kids"))} personas</p>
                            <p>{characteristics("capacity_adults")} Adultos - {characteristics("capacity_kids")} Niños</p>

                            <p>{characteristics("bathrooms")} Baños</p>

                        </div>

                    </div>

                </div>
            </div>*/}

        </>
    )
}
