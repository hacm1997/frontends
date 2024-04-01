import styles from "./styles.module.css"
import {formatNumber} from "../../../../service/service";
import useAnalyticsEventTracker from "../../../../service/analytics/useAnalyticsEventTracker";
import { useEffect } from "react";
export default function Apartamento_venta({data, translate, lang, currency, getDollar, setDisable}:any){
    const gaEventTracker = useAnalyticsEventTracker('Comprar');
    const analytic = (name:string) =>{
        gaEventTracker(`Clic en comprar apto: ${name}`);
    }
    useEffect(() => {
        const toDo = data.filter((r:any) => (r.characteristics.filter(((char:any) => char.code === "type")).map((obj:any) => obj.value) == "Compra"))
        console.log(toDo)
            if(toDo.length > 0){
                setDisable(false)
            }else{
                setDisable(true)
            }

    }, [data])
    const sales = data.filter((r:any) => (r.characteristics.filter(((char:any) => char.code === "type")).map((obj:any) => obj.value) == "Compra"))
        .map((dt:any,index:any) =>{
            const characteristics = (code:string) => {

                return dt.characteristics.filter(((char:any) => char.code === code)).map((obj:any) => obj.value)

            }

            return(
                <div className={styles.card} key={index}>
                    <img className={styles.home_image} title="Apartamento" width={325} height={220} src={characteristics("imagePrincipal")} alt="Apartamento"/>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h4>$ {currency === 'USD' || lang === 'en' ? `${Math.round(Number(characteristics("price"))/Number(getDollar))} USD`: `${formatNumber(characteristics("price"))} COP`}</h4>
                        </div>
                        <h3>{characteristics("location")}</h3>
                        <p>{formatNumber(characteristics("area"))}m<sup>2</sup></p>
                        <p>{characteristics("bedrooms")} {translate('aptos.bedroom')}</p>
                        
                        <p>{characteristics("bathrooms")} {translate('aptos.bathrooms')}</p>
                        <a onClick={() => analytic(dt.name)} href={lang === 'en' ? `/en/compra-apartamento/${dt.resource_id}` : `/compra-apartamento/${dt.resource_id}`}>{translate('aptos.button')}</a>
                    </div>
                </div>
            )
        }
    )

    return(
        <>
            {sales}
        </>
    )
}

