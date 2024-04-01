/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../../../services/contexts/ShoppingCartContext";
import { formatNumber } from "../../../../../../services/functionsExport";

export default function Card(props: any) {
  const { allCart, setCartAll } = useContext(CartContext);
  const [data, setData] = useState<any>()
  const id = props.data ? props.data.id : null
  const price = data ? data[0] ? data[0].precio : 0 : 0

  const addToCart = () => {
    setCartAll((currItems: any) => {
      const isItemsFound = currItems.find((item: any) => item.id === id)
      if (isItemsFound) {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
        })
      } else {
        return [
          ...currItems,
          {
            id,
            quantity: 1,
            price
          }
        ]
      }
    })
  }

  const removeItem = (id: any) => {
    setCartAll((currItems: any) => {
      if (currItems.find((item: any) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: any) => item.id !== id);
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id: any) => {
    return allCart.find((item: any) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  useEffect(() => {

    fetch(`${process.env.NEXT_PUBLIC_LOCAL_API as string}/api/tachido-api2`).then((res) => {
      res.json().then((r) => {
        if (r.productos) {
          setData(r.productos.filter((item: any) => item.id === id))
        }
      })
    })
  }, [])

  return (
    <>
      <div className={styles.card}>
        <div className={styles.singleImg}>
          <img src={data ? data[0] ? data[0].img : null : null} alt={data ? data[0] ? data[0].nombre : null : null} />
          <div className={styles.content}>
            <h2>
              {data ? data[0] ? data[0].nombre : null : null}
            </h2>
            <span>Precio: {formatNumber(data ? data[0] ? data[0].precio : null : null)}</span><br />
            {
              props.data?.proteins < 1 ?? (
                <span>Proteinas:</span>
              )
            }
            {
              props.data?.proteins?.map((item: any) => (
                <ul key={item.id} className={styles.listAdd}>
                  <li>Proteina {item.value}: {formatNumber(item.price)}</li>
                </ul>
              ))
            }
            {
              props.data?.additional < 1 ?? (
                <span>Adicionales:</span>
              )
            }
            {props.data?.additional?.map((item: any, index: number) => (
              <ul key={index} className={styles.listAdd}>
                <li>{item.value}: {formatNumber(item.price)}</li>
              </ul>
            ))}
          </div>
        </div>


        <div className={styles.quantity}>
          <div className={styles.cantidad}>
            <i onClick={() => removeItem(id)} className='bx bx-minus'></i>
            <span>{quantityPerItem}</span>
            <i onClick={() => addToCart()} className='bx bx-plus'></i>
          </div>
          <span>Max. 5 paquetes*</span>
        </div>

        <div className={styles.price}>
          <p>
            {
              formatNumber(props.data?.total * quantityPerItem)
            }
          </p>
          <span>Paquete</span>
        </div>
      </div>
    </>
  )
}
