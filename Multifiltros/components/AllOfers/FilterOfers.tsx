import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Product/ProductCard'
import { Pagination } from '../UtilComponents/Pagination'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import { ALLOFERS } from '../../data/allOfers'
import { useRouter } from 'next/router'
import { getSearchInput } from '../../services/api/getSearchInput'

const CATEGORIES = [
  {
    id:1,
    name: 'Todo',
    categorie: 'todos'
  },
  {
    id:2,
    name: 'Aceites',
    categorie: 'aceites'
  },
  {
    id:3,
    name: 'Baterias',
    categorie: 'baterias'
  },
  {
    id:4,
    name: 'Electricos',
    categorie: 'electricos'
  },
  {
    id:5,
    name: 'Filtros',
    categorie: 'filtros'
  },
  {
    id:6,
    name: 'Grasa',
    categorie: 'grasa'
  },
  {
    id:7,
    name: 'Liquidos de freno',
    categorie: 'liquidos de freno'
  },
  {
    id:8,
    name: 'Llantas',
    categorie: 'neumaticos'
  },
  {
    id:9,
    name: 'Refrigerantes',
    categorie: 'refrigerantes'
  },
  // {
  //   id:9,
  //   name: 'Servicios',
  //   categorie: ''
  // },
]

export const FilterOfers = () => {
  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState<number[]>()
  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [selected, setSelected] = useState<number>(0)
  const [totalPage, setTotalPage] = useState(0)
  const [filterNew, setFilterNew] = useState(false)
  const [filterBest, setFilterBest] = useState(false)
  const [orderPrice, setOrderPrice] = useState('')
  const [startIdx, setStartIdx] = useState(0)
  const [filterTag, setFilterTag] = useState('')
  const itemsToShow = 4

  const handlePrev = () => {
    setStartIdx(Math.max(0, startIdx - 1))
  }

  const handleNext = () => {
    setStartIdx(Math.min(CATEGORIES.length - itemsToShow, startIdx + 1))
  }

  const router = useRouter()
  const href = router.asPath.split('/')
  const currentPath = href[href.length - 1]

  // Buscar el elemento correspondiente en ALLOFERS
  const selectedOffer = ALLOFERS.find((offer) => offer.href === currentPath)

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

  const selectedTag = (nameTag: string) => {
    setFilterTag(nameTag)
  }

  const dataToSearch = {
    isNew: currentPath === 'productosNuevos' ? true : filterNew ,
    isBest: currentPath === 'productosDestacados' ? true : filterBest,
    sortBy: orderPrice === '' ? undefined : orderPrice,
    discount: true,
    categoriFilter: filterTag === '' || filterTag === 'todos' ? undefined : filterTag,
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
    filterNew,
    filterBest,
    orderPrice,
    filterTag,
    currentPath
  ])

  return (
    <div className='flex flex-col justify-center items-center'>
      {selectedOffer && (
        <div>
          <p className='text-red-custom text-xl not-italic font-medium lg:pl-4'>{selectedOffer.content.subTitle}</p>
          <p className='text-blue-custom mt-2 text-start text-3xl lg:text-5xl not-italic font-extrabold'><span className='text-red-custom'>|</span>{selectedOffer.content.title}</p>
        </div>
      )}
      
      <div className='justify-start flex flex-col gap-8 mt-16 mb-8'>
        <p className='text-red-custom text-start text-2xl not-italic font-bold mt-2'>Filtrar oferta por:</p>

        <div>
          <div className='flex flex-col sm:flex sm:flex-row justify-center items-center gap-8'>
            {/* Menu categorias */}
            <div>
              <div className='hidden lg:block'>
                <div className="flex items-center gap-4 ">
                  <button
                    className='border-2 border-blue-custom rounded-md' 
                    onClick={handlePrev}>
                    <NavArrowLeft/>
                  </button>
                  <ul className="flex space-x-2 overflow-hidden transition-transform duration-1000 ease-in-out transform translate-x-[calc(-2rem*${startIdx})]">
                    {CATEGORIES.slice(startIdx, startIdx + itemsToShow).map((category) => (
                      <li
                        onClick={() => selectedTag(category.categorie.toLowerCase())} 
                        key={category.id} 
                        className="cursor-pointer border-2 border-blue-custom hover:bg-blue-custom hover:text-white flex justify-center items-center rounded-lg max-w-[200px] h-10 mx-auto px-4">
                        {category.name}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className='border-2 border-blue-custom rounded-md'
                    onClick={handleNext}>
                    <NavArrowRight/>
                  </button>
                </div>
              </div>
              <div>
                <div className='block lg:hidden'>
                  <select
                    onChange={(e) => selectedTag(e.target.value)}
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-60 h-11 px-4 rounded-lg border-gray-300 text-blue-custom text-base font-medium"
                  >
                    {
                      CATEGORIES.map(({id, name, categorie}) =>(
                        <option
                          key={id}
                          value={categorie}>
                          {name}
                        </option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>
            {/* Menu ordenar por */}
            <div>
              <select
                onChange={handleSelectChange}
                name="HeadlineAct"
                id="HeadlineAct"
                className="mt-1.5 w-60 h-11 px-4 rounded-lg border-gray-300 text-blue-custom text-base font-medium"
              >
                <option value="">Selecciona una opcion </option>
                <option value="new">Productos nuevos</option>
                <option value="best">Productos destacados</option>
                <option value="asc">Precio menor a mayor</option>
                <option value="desc">Precio mayor a menor</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-baseline'>
        {
          products.length > 0 ?
            products.map(({id, name, image, price, inventory, price_discount, extraInfo}) => (
              <div key={id} className='h-full'>
      
                <ProductCard title={name} id={id} image={image} price={price} inventory={inventory} price_discount={price_discount} extraInfo={extraInfo}/>
            
              </div>
            ))
            :
            null
        }
      </div>
      {
        products.length < 1 ? 
          <p className='text-center text-4xl lg:text-8xl text-[#EAEAEA] not-italic font-semibold'>
              Sin resultados
          </p>
          : null
      }
      <div className='flex justify-center items-center mt-16'>
        <Pagination totalPage={totalPage} pages={pages!} pageNumber={pageNumber} setSelected={setSelected} selected={selected} setPageNumber={setPageNumber}/>
      </div>
    </div>
  )
}
