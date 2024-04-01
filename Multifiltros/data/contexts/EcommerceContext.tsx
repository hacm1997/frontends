import React, { createContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export const EcommerceContext = createContext<any>(null)

export const EcommerceProvider = ({ children }: any) => {
  const [cookies] = useCookies()
  const [cart, setCart] = useState([])
  const [favorite, setFavorite] = useState([])
  const [typeFilter, setTypeFilter] = useState('')
  const [initialProducts, setInitialProducts] = useState({
    products: [{ id: '', name: '', quantity: 0, price: 0, iva: 0 }],
    shipping_price: 0,
  })
  const [rangePrice, setRangePrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  })
  const [booleanFilters, setBoolenaFilters] = useState({
    discount: false,
    freeShipping: false,
    disponibility: false,
  })
  const [disponibilitySearch, setDisponibilitySearch] = useState({
    shipping: false, pickup: false
  })
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    if (cookies.cart) {
      const arrCart = JSON.parse(JSON.stringify(cookies.cart))
      if (arrCart) {
        if (arrCart.length < 1) {
          setCart([])
        } else {
          setCart(arrCart)
        }
      }
    } else {
      setCart([])
    }
    if (cookies.favorites) {
      const arrFavorite = JSON.parse(JSON.stringify(cookies.favorites))
      if (arrFavorite) {
        if (arrFavorite.length < 1) {
          setFavorite([])
        } else {
          setFavorite(arrFavorite)
        }
      }
    } else {
      setFavorite([])
    }
  }, [])

  return (
    <EcommerceContext.Provider
      value={{
        cart,
        setCart,
        favorite,
        setFavorite,
        initialProducts,
        setInitialProducts,
        typeFilter,
        setTypeFilter,
        rangePrice,
        setRangePrice,
        booleanFilters,
        setBoolenaFilters,
        toggle,
        setToggle,
        disponibilitySearch,
        setDisponibilitySearch
      }}
    >
      {children}
    </EcommerceContext.Provider>
  )
}
