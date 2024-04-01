import styles from "./styles.module.css";
import React, {useEffect, useState} from "react";
import {Cookies, useCookies} from "react-cookie";
import Swal from "sweetalert2";

export default function Card_producto(props: any) {
    const cookies = new Cookies();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [arrayList, setArrayList] = useState<Array<any>>([]);
    //console.log("Array List => ",arrayList)
    const deleteItemCart = async(obj: any, index: any) => {
        //console.log("Array List => ",arrayList);
        setArrayList(arrayList.filter((i) => i !== obj));
        const indice = arrayList.indexOf(index);

        console.log(index)
        if(index === 0){
            arrayList.splice(index, index+1);
        }else{
            arrayList.splice(index, 1);
        }
        console.log("obj => ", arrayList);
        Swal.fire({
            icon: "warning",
            title: "Producto eliminado",
            text: `Se elimino "${obj}" de lista de cotizacion.`,
        });

        props.setListUpdate(arrayList);
        cookies.set("productscopy",  JSON.stringify(arrayList), { path: "/" });
        cookies.set("products",  JSON.stringify(arrayList), { path: "/" });
        //console.log("cookies pro => ",cookie.products);

        if(arrayList.length === 0){
            window.location.href = "/";
            window.setTimeout(function(){
                removeCookie("products");
                removeCookie("productscopy");
            },3000);
        }
        //window.location.href = "/cotizar"
    };
    //console.log(props.products);
    const [seeButton, setSeeButton] = useState(false);
    const [content, setContent] = useState<any>();
    //console.log("Array List Two => ",arrayList)
    const list_products = arrayList.map((item:any, index:any)=>(
        <ul key={index}>
            <li>
                <p>{item}</p>
                <button
                    className={styles.btn_delete}
                    title="Eliminar item de lista"
                    onClick={() => deleteItemCart(item, index)}
                >
                    <i title="Eliminar item de lista" className="bx bxs-trash"></i>
                </button>
            </li>
        </ul>
    ))
    //console.log("props.products => ",props.products);
    //console.log("props.products.Copy => ",props.productsCopy);
    const reloadPage = () =>{
        window.location.href = '/cotizar';
    }
    //console.log("count array => ",arrayList.length);
    useEffect(()=>{
        if(arrayList.length < 1){
            setArrayList(cookie.products);
            props.setListUpdate(arrayList);
        }
    }, []);

    useEffect(()=>{
        //console.log("products => ",props.products.length)
        if(props.products){
            setContent(list_products);
        }else{
            const list_productsCopy = props.productsCopy.map((item:any, index:any)=>(
                <ul key={index}>
                    <li><p>{item}</p></li>
                </ul>
            ))
            setContent(list_productsCopy);
        }
        if(arrayList.length < 1){
            setSeeButton(true);
        }else{
            setSeeButton(false);
        }
    }, [arrayList]);
    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>

                    <div className={styles.agregar}>
                        <div className={styles.content}>
                            {seeButton ?
                                <div className={styles.reload}>
                                    <a onClick={reloadPage}><i className='bx bx-refresh'></i></a>
                                    <p style={{textAlign:'center'}}>Por favor haga click en el icono para actualizar lista</p>
                                </div>
                            :
                                <div>
                                    <h3>Productos a cotizar</h3>
                                    <div className={styles.list_products}>
                                        {content}

                                    </div>
                                </div>
                            }

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
