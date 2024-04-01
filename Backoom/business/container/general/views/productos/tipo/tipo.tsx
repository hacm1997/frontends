import React, { useEffect, useState, useContext } from "react";
import { Cookies, useCookies } from "react-cookie";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
//import { getMarketCount } from "../../../../../content/context";
import styles from "./styles.module.css";
import Card_producto from "../card_producto/card_producto";
import Paginado from "./paginado/Paginado";
import {MyGlobalContext, useGlobalContext} from "../../../../../content/context/global_var";

function Tipo({
  closedCart,
  setClosedCart,
  productos,
  itemsPerPage,
  itemOffset,
  setItemOffset,
  currentItems,
}: any) {
  const cookies = new Cookies();

  const [cookie, setCookie, removeCookie] = useCookies();
  const [listUpdate, setListUpdate] = useState<Array<any>>([]);
  const [hidden, setHidden] = useState(true);
  const {value, setValue} = useGlobalContext();

  useEffect(() => {
    setHidden(closedCart);
  }, [closedCart]);

  const pageCount = Math.ceil(productos.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: any }) => {
    setItemOffset(selected);
  };
  console.log("Products cookie => ", cookie.products);
  const dataOfChild = (dataChild: any) => {

    if (cookie.products === undefined) {
      cookie.products = [];
    }
    if (
      listUpdate.length === 0 ||
      (!Array.isArray(listUpdate))
    ) {
      setListUpdate((listUpdate: any) => [
        ...cookie.products,
        ...listUpdate,
        dataChild,
      ]);
      Swal.fire({
        icon: "success",
        title: "Producto añadido.",
        text: `El producto ${dataChild} fue añadido a carrito.`,
      });

    } else if (listUpdate.includes(dataChild)) {
      Swal.fire({
        icon: "warning",
        title: "Producto existente",
        text: `El producto ${dataChild} ya existe en lista de cotizacion.`,
      });

      return setListUpdate(listUpdate);
    } else {
      setListUpdate((listUpdate: any) => [...listUpdate, dataChild]);
      Swal.fire({
        icon: "success",
        title: "Producto añadido.",
        text: `El producto ${dataChild} ya existe en lista de cotizacion.`,
      })
    }
  };
  const deleteItemCart = (obj: any, index: any) => {
    setListUpdate(listUpdate.filter((i) => i !== obj));
    if (index === -1) {
      setListUpdate([...listUpdate, obj]);
      Swal.fire({
        icon: "warning",
        title: "Producto existente",
        text: `El producto ${obj} ya existe en lista de cotizacion.`,
      });
    } else {
      listUpdate.splice(index, index);
      Swal.fire({
        icon: "warning",
        title: "Producto eliminado",
        text: `Se elimino "${obj}" de lista de cotizacion.`,
      });
      removeCookie("products");
    }
  };
  //console.log("COUNT => ",listUpdate.length);

  const lista = Array.isArray(listUpdate) ? listUpdate.map((obj: any, index: any) => (
    <div className={styles.single_product}>
      <p>{obj}</p>
      <button
        className={styles.btn_delete}
        title="Eliminar item de lista"
        onClick={() => deleteItemCart(obj, index)}
      >
        <i title="Eliminar item de lista" className="bx bxs-trash"></i>
      </button>
    </div>
  )): null;

  const sendCookie = () => {
    cookies.set("products", JSON.stringify([listUpdate]), { path: "/" });
  };

  useEffect(() => {
    if(cookie.productscopy != undefined){
      cookies.set("products", JSON.stringify(listUpdate), { path: "/" });
    }
    if(cookie.products != undefined){
      cookies.set("products", JSON.stringify(listUpdate), { path: "/" });
    }
    setValue(listUpdate.length);
  }, [listUpdate]);
  console.log("count => ",listUpdate.length)

  useEffect(()=>{
    if(listUpdate.length === 0){
      if(cookie.products){
        setListUpdate(cookie.products);
      }else{
        setListUpdate([]);
      }
    }else if(listUpdate.length < 1){
      setListUpdate(cookie.products);
    }
  }, []);


  console.log("COOKIE PRODUCTS => ",cookie.product)
  console.log("LIST UPDATE => ", listUpdate)

  return (
    <>
      {productos ? (
        <>
          <section className={styles.section}>
            <div className={styles.seach}>{/*<Seach />*/}</div>
            <div className={styles.productos}>
              {productos.map((producto: any, index: any) => (
                <Card_producto
                  producto={producto}
                  dataOfChild={dataOfChild}
                  listUpdate={listUpdate}
                  index={index}
                />
              ))}
            </div>
          </section>
          {/* <Paginado
            styles={styles}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          /> */}
          <div hidden={hidden} title="Lista cotizacion productos." className={styles.float}>
            <div>
              <div className={styles.header_list}>
                <h5>Productos agregados</h5>
                <button
                  onClick={() => {
                    setHidden(true);
                    setClosedCart(true);
                  }}
                >
                  <i className="bx bx-x"></i>
                </button>
              </div>

              <div className={styles.container_product}>{lista}</div>
              <Link href="/cotizar" type="button" onClick={sendCookie} title="Cotizar">
                Cotizar
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Tipo;
