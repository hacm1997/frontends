import React, { useContext, useEffect, useState } from 'react'
import { Pagination } from '../UtilComponents/Pagination'
import { ProductCard } from '../Product/ProductCard'
import { Adviser } from '../../public/icons/utilsIcons/adviser'
import { SearchFilters } from '../UtilComponents/SearchFilters'
import { FilterAlt } from 'iconoir-react'
import { SideBar } from '../UtilComponents/SideBar'
import { useCookies } from 'react-cookie'
import { getSearchInput } from '../../services/api/getSearchInput'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'

export const KitsFilters = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies] = useCookies()
  const [pages, setPages] = useState<number[]>()
  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [selected, setSelected] = useState<number>(0)
  const [totalPage, setTotalPage] = useState(0)
  const { typeFilter, rangePrice, booleanFilters, disponibilitySearch } = useContext(EcommerceContext)
  const [filterNew, setFilterNew] = useState(false)
  const [filterBest, setFilterBest] = useState(false)
  const [orderPrice, setOrderPrice] = useState('')
  const [kitName, setKitName] = useState({
    name: '',
  })
  const [searchByPrice, setSearchByPrice] = useState(false)

  const handleSelectChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value
    if (value === '') {
      setFilterNew(false)
      setFilterBest(false)
      setOrderPrice('')
    }
    if (value === 'new') {
      setFilterNew(true)
      setFilterBest(false)
      setOrderPrice('')
    }
    if (value === 'best') {
      setFilterNew(false)
      setFilterBest(true)
      setOrderPrice('')
    }
    if (value === 'asc') {
      setFilterNew(false)
      setFilterBest(false)
      setOrderPrice(value)
    }
    if (value === 'desc') {
      setFilterNew(false)
      setFilterBest(false)
      setOrderPrice(value)
    }
  }

  const dataToSearch = {
    categoriFilter: kitName.name !== '' ? kitName.name : cookies.searchTag,
    keyword: cookies.searchValue,
    productType: typeFilter,
    isNew: filterNew,
    isBest: filterBest,
    sortBy: orderPrice === '' ? undefined : orderPrice,
    minPrice: rangePrice.minPrice === 0 ? undefined : rangePrice.minPrice,
    maxPrice: rangePrice.maxPrice === 0 ? undefined : rangePrice.maxPrice,
    discount: booleanFilters.discount,
    freeShipping: booleanFilters.freeShipping,
    availableShipping: disponibilitySearch.shipping,
    availablePickup: disponibilitySearch.pickup,
  }

  useEffect(() => {
    getSearchInput(pageNumber, 6, dataToSearch)
      .then((res) => {
        setProducts(res.data)
        setTotalPage(res.totalPages)
        setPages(Array.from({ length: res.totalPages }, (_, index) => index))
      })
      .catch((error) => {
        setProducts([])
        console.error(error)
      })
  }, [
    pageNumber,
    typeFilter,
    filterNew,
    filterBest,
    orderPrice,
    booleanFilters,
    kitName.name,
    searchByPrice,
    disponibilitySearch.shipping,
    disponibilitySearch.pickup
  ])

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const redirect = () =>{
    window.open('https://api.whatsapp.com/send/?phone=573004332067', '_blank')
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mt-14 mb-16 px-4">
        <p className="text-red-custom  lg:text-start text-xl lg:text-base not-italic font-semibold pb-4 lg:pl-8">
        Aquí podrás encontrar todos los productos para tu vehículo{' '}
        </p>
        <p className="text-blue-custom  lg:text-start text-3xl lg:text-5xl not-italic font-bold">
          <span className="text-red-custom">|</span>Nuestros productos
        </p>
      </div>
      <div>
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="px-4 py-2 text-blue-custom text-lg not-italic font-medium bg-[#F2F4FE] rounded-md flex gap-2 justify-center items-center w-full mb-2"
          >
            Filtros
            <FilterAlt className="w-4" />
          </button>
          <div className={!sidebarOpen ? 'hidden' : 'block'}>
            <SideBar
              onClose={toggleSidebar}
              component={
                <SearchFilters
                  setKitName={setKitName}
                  searchByPrice={searchByPrice}
                  setSearchByPrice={setSearchByPrice}
                />
              }
            />
          </div>
          
        </div>
        <div className="flex flex-col sm:flex sm:flex-row sm:justify-between gap-2 lg:justify-end">
          <select
            onChange={handleSelectChange}
            name=""
            id=""
            className=" py-2 pl-2 pr-10 text-start rounded-md bg-[#F2F4FE] text-blue-custom text-base not-italic font-medium"
          >
            <option value="">Selecciona una opcion </option>
            <option value="new">Productos nuevos</option>
            <option value="best">Productos destacados</option>
            <option value="asc">Precio menor a mayor</option>
            <option value="desc">Precio mayor a menor</option>
          </select>
        </div>
        <div className="flex justify-around items-start gap-16">
          <div className="hidden lg:block">
            <SearchFilters
              setKitName={setKitName}
              searchByPrice={searchByPrice}
              setSearchByPrice={setSearchByPrice}
            />
          </div>
          {
            products.length === 0 ? 
              <div className='mx-auto my-auto w-full'>
                <p className='text-center text-4xl lg:text-8xl text-[#EAEAEA] not-italic font-semibold'>
              Sin resultados
                </p>
              </div>
              :
              <div className="justify-center grid md:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-3 gap-8 items-end mt-6">
                {Array.isArray(products)
                  ? products.map(
                    ({
                      id,
                      name,
                      image,
                      price,
                      inventory,
                      extraInfo,
                      price_discount,
                    }) => (
                      <div key={id}>
                        <ProductCard
                          title={name}
                          id={id}
                          image={image}
                          price={price}
                          inventory={inventory}
                          price_discount={price_discount}
                          extraInfo={extraInfo}
                        />
                      </div>
                    )
                  )
                  : null}
              </div>
          }
        </div>
        <div className="flex justify-center items-center mt-16">
          <Pagination
            totalPage={totalPage}
            pages={pages!}
            pageNumber={pageNumber}
            setSelected={setSelected}
            selected={selected}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
      <div className="mt-16">
        <div className="lg:mt-7 flex flex-col justify-center items-center gap-8">
          <p className="text-blue-custom text-xl font-extrabold not-italic text-center max-w-2xl">
          ¿No sabes qué <span className="text-red-custom">filtro</span> elegir
          o no encuentras el tuyo? Nosotros lo personalizamos{' '}
            <span className="text-red-custom">a tu medida,</span> haz{' '}
            <button onClick={redirect} className="bg-red-custom text-white px-8 rounded-lg h-8 underline">
              click aquí
            </button>{' '}
            y te asesoraremos
          </p>
          <Adviser />
        </div>
      </div>
    </div>
  )
}
