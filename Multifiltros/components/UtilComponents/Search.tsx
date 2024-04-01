import React, { useEffect, useRef, useState } from 'react'
import { getProductsBySearch } from '../../services/api/getProductsBySearchBar'
import { product } from '../productDescription/Gallery'
import Link from 'next/link'
import { useCookies } from 'react-cookie'

export const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies()
  const [searchedData, setSearchedData] = useState([])
  const divRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    if (value.length > 2) {
      getProductsBySearch(value.toLowerCase())
        .then((res) => {
          setSearchedData(res.data)
        })
        .catch((error: any) => {
          console.error(error)
        })
    } else {
      setSearchedData([])
    }
  }

  const search = (id: string) => {
    setCookie('productId', id, { path: '/' })
    setIsOpen(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica si el clic ocurrió fuera del div
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        // Lógica que se ejecuta cuando se hace clic fuera del div
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    // Agrega el evento de clic al documento
    document.addEventListener('mousedown', handleClickOutside)

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [divRef])

  const handleSearchInput = (ev: React.ChangeEvent<HTMLFormElement>) => {
    if (value === '') {
      setCookie('searchValue', '', { path: '/' })
      ev.preventDefault()
    } else {
      setCookie('searchValue', value, { path: '/' })
      removeCookie('searchTag')
    }
  }

  return (
    <div className="relative mt-4 lg:mt-0 xl:w-[512px] mx-2" ref={divRef}>
      <form
        onSubmit={handleSearchInput}
        action={value === '' ? '/#' : '/filterProducts'}
      >
        <input
          onChange={handleSearch}
          type="text"
          className="w-full py-1 px-3 text-gray-900 bg-white border rounded-md duration-200 
        focus:outline-none focus:ring-2 focus:ring-red-custom"
          placeholder="Buscar"
        />
      </form>
      {!isOpen && searchedData.length > 0 ? (
        <div className="bg-white rounded-lg overflow-y-scroll p-2 absolute w-full mt-2 border-[1px] border-blue-custom h-[300px]">
          {Array.isArray(searchedData) && searchedData.length > 0
            ? searchedData.map((item: product) => (
              <div key={item.id} className="hover:bg-[#E6E6E6]">
                <Link href="/productDescription">
                  <a
                    onClick={() => search(item.id)}
                    className="w-full cursor-pointer"
                  >
                    {item.name}
                  </a>
                </Link>
              </div>
            ))
            : null}
        </div>
      ) : null}
    </div>
  )
}
