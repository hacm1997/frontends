/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const CartContext = createContext<any>(null);

export const ShoppingCartProvider = ({ children }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [cart, setCart] = useState([]);
  const [cartAmala, setCartAmala] = useState([]);
  const [userData, setUserData] = useState({
    nombre: '',
    cedula: 0,
    celular: 0,
    email: '',
    barrio: '',
    sede: ''
  })
  const [allCart, setCartAll] = useState<any>([
    ...cart,
    ...cartAmala
  ])

  useEffect(() => {
    if (allCart.length < 1 || allCart.length === 0) {
      setCart([])
      setCartAmala([])
      setCookie('marketTachido', [], { path: '/', maxAge: 3600 * 2000 })
      setCookie('marketAmala', [], { path: '/', maxAge: 3600 * 2000 })
    }
  }, [allCart.length])

  useEffect(() => {
    if (cookies.marketAmala || cookies.marketTachido) {
      const arr = JSON.parse(JSON.stringify(cookies.marketTachido));
      const arr2 = JSON.parse(JSON.stringify(cookies.marketAmala));

      if (arr.length > 0 || arr2.length > 0) {
        if (arr.length < 1) {
          setCart([])
        } else {
          setCart(arr)
        }

        if (arr2.length < 1) {
          setCartAmala([])
        } else {
          setCartAmala(arr2)
        }

        setCartAll([
          ...arr,
          ...arr2
        ])
      } else {
        setCart([])
        setCartAmala([])
        setCartAll([])
      }
    }

  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart, cartAmala, setCartAmala, userData, setUserData, allCart, setCartAll }}>
      {children}
    </CartContext.Provider>
  )
}
