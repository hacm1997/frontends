import styles from "../styles.module.css";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../../../../../services/contexts/ShoppingCartContext";

export default function Cart(props: any) {

  const { cart } = useContext(CartContext);
  const { cartAmala } = useContext(CartContext);

  const quantity = cart?.reduce((acc: any, curr: any) => {
    return acc + curr.quantity;
  }, 0);
  const quantityAmala = cartAmala?.reduce((acc: any, curr: any) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <>
      {
        props.route.asPath.includes("/tachido")
          ? <div className={styles.containerMarket}>
            <Link href="/tachido/carrito">
              <i className={'bx bx-cart ' + styles.marketRed}>
                <sup>{quantity !== 0 ? quantity : null}</sup>
              </i>
            </Link>
          </div>
          : <div className={styles.containerMarket}>
            <Link href="/amala/carrito">
              <i className={'bx bx-cart ' + styles.market}>
                <sup>{quantityAmala !== 0 ? quantityAmala : null}</sup>
              </i>
            </Link>
          </div>
      }
    </>
  )
}
