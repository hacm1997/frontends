import React, { useContext, useEffect, useState } from 'react'
import { CarIcon } from '../../public/icons/utilsIcons/carIcon'
import { TruckIcon } from '../../public/icons/utilsIcons/truckIcon'
import { BusIcon } from '../../public/icons/utilsIcons/busIcon'
import { CraneIcon } from '../../public/icons/utilsIcons/craneIcon'
import { ToggleSwitch } from './ToggleSwitch'
import { getCategories } from '../../services/api/getCategories'
import { EcommerceContext } from '../../data/contexts/EcommerceContext'
import { SearchEngine } from 'iconoir-react'
import { useCookies } from 'react-cookie'
import { toast } from 'sonner'

interface SearchFiltersProps {
  setKitName: React.Dispatch<React.SetStateAction<{name: string}>>
  searchByPrice: boolean
  // eslint-disable-next-line no-unused-vars
  setSearchByPrice: (value: boolean) => void
}

export const SearchFilters = ({setKitName, searchByPrice, setSearchByPrice }: SearchFiltersProps) => {
  const [selectedIcon, setSelectedIcon] = useState('')
  const [typeCar, setTypeCar] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedCylinder, setSelectedCylinder] = useState('')
  const [listCylinder, setListCylinder] = useState<string[]>([])
  // eslint-disable-next-line no-unused-vars
  const [showResults, setShowResults] = useState(false)
  const [listBrand, setListBrand] = useState<string[]>([])
  const [listModel, setListModel] = useState<string[]>([])
  const [listYear, setListYear] = useState<string[]>([])
  // eslint-disable-next-line no-unused-vars
  const [dataKits, setDataKits] = useState([])
  const {rangePrice, setRangePrice, setDisponibilitySearch, setBoolenaFilters} = useContext(EcommerceContext)
  const [isChecked, setIsChecked] = useState({
    shipping: false, pickup: false
  })
  const [toggleClear, setToggleClear] = useState(false)
  const [cookies] = useCookies()
  const [tag, setTag] = useState('')
  useEffect(() => {
    if(cookies.searchTag){
      setTag(cookies.searchTag)
    }
  }, [])

  const sortData = (data: [], position: number) => {
    if (data.length > 0) {
      // Crear un array para almacenar todas las marcas
      let allBrands: string[] = []

      // Iterar sobre listBrand y agregar marcas al array
      data.forEach((item: any) => {
        if (item.tags) {
          const tagsArray: string[] = item.tags.split(',')[position].split(',')
          allBrands = [...allBrands, ...tagsArray]
        }
      })
      // Filtrar marcas únicas
      const uniqueBrands: string[] = [...new Set(allBrands)]

      return uniqueBrands
    }
  }

  const handleTypecar = (name: string) => {
    setTypeCar(name)
    setSelectedIcon(name)
    getCategories(name)
      .then((res: any) => {
        const dataBrand = sortData(res, 1)
        if (dataBrand) {
          if (JSON.stringify(dataBrand) !== JSON.stringify(listBrand)) {
            setListBrand(dataBrand)
          }
        } else {
          setListBrand([])
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handlerSelectBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedBrand(value)
    setSelectedModel('')
    setSelectedYear('')
    setSelectedCylinder('')
    const buildQuery = `${typeCar},${value}`
    getCategories(buildQuery)
      .then((res) => {
        const dataModel = sortData(res, 2)

        if (dataModel) {
          if (JSON.stringify(dataModel) !== JSON.stringify(listModel)) {
            setListModel(dataModel)
          }
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handlerSelectModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedModel(value)
    setSelectedYear('')
    setSelectedCylinder('')
    const buildQuery = `${typeCar},${selectedBrand},${value}`
    getCategories(buildQuery)
      .then((res) => {
        const dataYear = sortData(res, 3)
        if (dataYear) {
          if (JSON.stringify(dataYear) !== JSON.stringify(listYear)) {
            setListYear(dataYear)
          }
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handlerSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedYear(value)
    setSelectedCylinder('')
    const buildQuery = `${typeCar},${selectedBrand},${selectedModel},${value}`
    getCategories(buildQuery)
      .then((res) => {
        const dataCylinder = sortData(res, 4)
        if (dataCylinder) {
          if (JSON.stringify(dataCylinder) !== JSON.stringify(listCylinder)) {
            setListCylinder(dataCylinder)
          }
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handlerSelectCylinder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedCylinder(value)
    const buildQuery = `${typeCar},${selectedBrand},${selectedModel},${selectedYear},${value}`
    getCategories(buildQuery).then((res) => {
      const dataKitName = sortData(res, 6)
      if(dataKitName){
        if (JSON.stringify(dataKitName) !== JSON.stringify(listCylinder)) {
          setKitName({name: dataKitName.toString()})
        }
      }
    }).catch(error => {
      console.error(error)
    })
  }

  const handlePiceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setRangePrice({
      ...rangePrice,
      [e.target.name]: value
    })
  }

  const handleSearchByPrice = () => {
    // Validar si los campos de precio están vacíos
    if (!rangePrice.minPrice || !rangePrice.maxPrice) {
      toast.warning('Ambos campos de precio son requeridos.')
      return
    }

    // Realizar la búsqueda solo si los campos de precio están llenos
    setSearchByPrice(!searchByPrice)
  }

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-unused-vars
    const value = e.target.value
    const name = e.target.name
    if(name === 'shipping'){
      setIsChecked({
        ...isChecked,
        shipping: !isChecked.shipping,
      })
    }else{
      setIsChecked({
        ...isChecked,
        pickup: !isChecked.pickup,
      })
    }
  }

  useEffect(() => {
    setDisponibilitySearch({
      shipping : isChecked.shipping,
      pickup: isChecked.pickup
    })
  }, [isChecked])

  const clearAllFilters = () => {
    setIsChecked({
      shipping: false,
      pickup:false
    })
    setSelectedIcon('')
    setTypeCar('')
    setSelectedBrand('')
    setSelectedModel('')
    setSelectedYear('')
    setSelectedCylinder('')
    setKitName({name : ''})
    setRangePrice({
      minPrice: 0,
      maxPrice: 0
    })
    setBoolenaFilters({
      discount: false,
      freeShipping: false,
    })
    setToggleClear(true)
    setListBrand([])
    setListModel([])
    setListYear([])
    setListCylinder([])
  }

  return (
    <div className="lg:mt-7 flex flex-col max-w-[800px] border-[1px]  px-4 pt-8 pb-16 rounded-lg max-h-[1000px]">
      <p className="text-red-custom text-2xl not-italic font-bold">
        Filtro de búsqueda
      </p>
      {
        tag === 'filtros' ? 
          <div>
            <p className="text-blue-custom text-base not-italic font-medium">
        Elige tu vehículo
            </p>
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 mt-8">
              <div
                onClick={() => handleTypecar('carro')}
                className={`flex gap-2 items-center text-center cursor-pointer ${
                  selectedIcon === 'carro' ? 'selected-icon' : ''
                }`}
              >
                <CarIcon 
                  width={24} 
                  height={20}
                  style={`fill-blue-custom hover:fill-red-custom ${
                    selectedIcon === 'carro' ? 'fill-red-custom' : ''
                  }`} 
                /> <p className='text-blue-custom text-base not-italic font-medium hover:text-red-custom'>Carros</p>
              </div>
              <div
                onClick={() => handleTypecar('camion')}
                className={`flex gap-2 items-center text-center cursor-pointer ${
                  selectedIcon === 'camion' ? 'selected-icon' : ''
                }`}
              >
                <TruckIcon 
                  width={24} 
                  height={20} 
                  style={`fill-blue-custom hover:fill-red-custom ${
                    selectedIcon === 'camion' ? 'fill-red-custom' : ''
                  }`}
                /> 
                <p className='text-blue-custom text-base not-italic font-medium hover:text-red-custom'>Camiones</p>
              </div>
              <div
                onClick={() => handleTypecar('bus')}
                className={`flex gap-2 items-center text-center cursor-pointer ${
                  selectedIcon === 'bus' ? 'selected-icon' : ''
                }`}
              >
                <BusIcon 
                  width={24} 
                  height={14}
                  style={`fill-blue-custom hover:fill-red-custom ${
                    selectedIcon === 'bus' ? 'fill-red-custom' : ''
                  }`}
                /> 
                <p className=' text-blue-custom text-base not-italic font-medium hover:text-red-custom'>Buses</p>
              </div>
              <div
                onClick={() => handleTypecar('maquinaria pesada')}
                className={`flex gap-2 items-center text-center cursor-pointer ${
                  selectedIcon === 'maquinaria pesada' ? 'selected-icon' : ''
                }`}
              >
                <CraneIcon 
                  width={24} 
                  height={24} 
                  style={`fill-blue-custom hover:fill-red-custom ${
                    selectedIcon === 'maquinaria pesada' ? 'fill-red-custom' : ''
                  }`}
                /> 
                <p className='text-start text-blue-custom text-base not-italic font-medium hover:text-red-custom'>Fuera de carretera</p>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label
                htmlFor=""
                className="text-blue-custom text-base not-italic font-medium"
              >
          Buscar por marca
              </label>
              <select
                name='brand' 
                onChange={handlerSelectBrand}
                value={selectedBrand} 
                className="mt-1 bg-[#F2F4FE] h-10 rounded-md">
                <option value=''>Seleccione tipo de vehiculo</option>
                {listBrand.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <label
                htmlFor=""
                className="text-blue-custom text-base not-italic font-medium"
              >
          Buscar por modelo
              </label>
              <select
                name='model' 
                onChange={handlerSelectModel}
                value={selectedModel} 
                className="mt-1 bg-[#F2F4FE] h-10 rounded-md">
                <option value=''>Seleccione el modelo</option>
                {listModel.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <label
                htmlFor=""
                className="text-blue-custom text-base not-italic font-medium"
              >
          Buscar por cilindraje del motor
              </label>
              <select
                name='year' 
                onChange={handlerSelectYear}
                value={selectedYear} 
                className="mt-1 bg-[#F2F4FE] h-10 rounded-md">
                <option value=''>Seleccione el año</option>
                {listYear.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <label
                htmlFor=""
                className="text-blue-custom text-base not-italic font-medium"
              >
          Buscar por año
              </label>
              <select
                name='cylinder' 
                onChange={handlerSelectCylinder}
                value={selectedCylinder}
                className="mt-1 bg-[#F2F4FE] h-10 rounded-md">
                <option value=''>Seleccione el cilindraje</option>
                {listCylinder.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          :
          null
      }

      <p className="text-red-custom text-base not-italic font-medium mt-8">
        Beneficios
      </p>
      <div className="flex flex-col gap-4 mt-4">
        <ToggleSwitch text="Envío gratis" toggleClear={toggleClear} setToggleClear={setToggleClear} />
        <ToggleSwitch text="Promoción o descuento" toggleClear={toggleClear} setToggleClear={setToggleClear} />
      </div>
      <p className="text-red-custom text-base not-italic font-medium mt-8">
        Disponibilidad
      </p>
      <div className="flex flex-col">
        <span>
          <input checked={isChecked.shipping} onChange={handleCheck} type="checkbox" name="shipping" id="" className="accent-red-custom" />
          <label className="ml-2" htmlFor="">
            Disponible para envío
          </label>
        </span>
        <span>
          <input checked={isChecked.pickup} onChange={handleCheck} type="checkbox" name="pickup" id="" className="accent-red-custom" />
          <label className="ml-2" htmlFor="">
            Disponible para retiro
          </label>
        </span>
      </div>
      <p className="text-blue-custom text-lg not-italic font-medium mt-8">
        Rango de precio
      </p>
      <div className="flex gap-8 mt-2 justify-around">
        <input value={rangePrice.minPrice} onChange={handlePiceRange} name='minPrice' type="number" className="border-[1px] w-20 h-8 rounded-md"/>
        <input value={rangePrice.maxPrice} onChange={handlePiceRange} name='maxPrice' type="number" className="border-[1px] w-20 h-8 rounded-md" />
        <button
          onClick={handleSearchByPrice}
        >
          <SearchEngine/>
        </button>
      </div>
      <div className="flex flex-col sm:flex sm:flex-row justify-center gap-4">
        {/* <button
          className="mt-2 text-blue-custom border-2 border-blue-custom rounded-md py-2 hover:bg-red-custom hover:text-white w-full">
          Aplicar
        </button> */}
        <button onClick={clearAllFilters} className="mt-2 text-blue-custom border-2 border-blue-custom rounded-md py-2 hover:bg-red-custom hover:text-white w-full">
          Limpiar
        </button>
      </div>
    </div>
  )
}
