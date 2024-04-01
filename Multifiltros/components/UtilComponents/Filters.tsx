import { BusIcon } from '../../public/icons/utilsIcons/busIcon'
import { CarIcon } from '../../public/icons/utilsIcons/carIcon'
import { CraneIcon } from '../../public/icons/utilsIcons/craneIcon'
import { TruckIcon } from '../../public/icons/utilsIcons/truckIcon'
import { Search } from 'iconoir-react'
import React, { useState } from 'react'
import { getCategories } from '../../services/api/getCategories'
import { getKits } from '../../services/api/getKits'
import { KitsResult } from './KitsResult'
import { FullKitCard } from './FullKitCard'
import { toast } from 'sonner'

export const Filters = () => {
  const [selectedIcon, setSelectedIcon] = useState('')
  const [typeCar, setTypeCar] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedCylinder, setSelectedCylinder] = useState('')
  const [kitName, setKitName] = useState('')
  const [dataKits, setDataKits] = useState([])
  const [listBrand, setListBrand] = useState<string[]>([])
  const [listModel, setListModel] = useState<string[]>([])
  const [listYear, setListYear] = useState<string[]>([])
  const [listCylinder, setListCylinder] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

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
    getCategories(name).then((res:any) => {
      const dataBrand = sortData(res, 1)
      if(dataBrand){
        if (JSON.stringify(dataBrand) !== JSON.stringify(listBrand)) {
          setListBrand(dataBrand)
        }
      }else{
        setListBrand([])
      }
      
    }).catch(error => {
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
    getCategories(buildQuery).then((res) => {
      const dataModel = sortData(res, 2)
    
      if(dataModel){
        if (JSON.stringify(dataModel) !== JSON.stringify(listModel)) {
          setListModel(dataModel)
        }
      }
      
    }).catch(error => {
      console.error(error)
    })
  }

  const handlerSelectModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedModel(value)
    setSelectedYear('')
    setSelectedCylinder('')
    const buildQuery = `${typeCar},${selectedBrand},${value}`
    getCategories(buildQuery).then((res) => {
      const dataCylinder = sortData(res, 3)
      if(dataCylinder){
        if (JSON.stringify(dataCylinder) !== JSON.stringify(listCylinder)) {
          setListCylinder(dataCylinder)
        }
      }
      
    }).catch(error => {
      console.error(error)
    })
  }
  
  const handlerSelectCylinder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedCylinder(value)
    setSelectedYear('')
    const buildQuery = `${typeCar},${selectedBrand},${selectedModel},${value}`
    getCategories(buildQuery).then((res) => {
      const dataYear = sortData(res, 4)
      if(dataYear){
        if (JSON.stringify(dataYear) !== JSON.stringify(listYear)) {
          setListYear(dataYear)
        }
      }
    }).catch(error => {
      console.error(error)
    })
  }

  const handlerSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedYear(value)
    const buildQuery = `${typeCar},${selectedBrand},${selectedModel},${selectedCylinder},${value}`
    getCategories(buildQuery).then((res) => {
      const dataKitName = sortData(res, 6)
      if(dataKitName){
        if (JSON.stringify(dataKitName) !== JSON.stringify(listCylinder)) {
          setKitName(dataKitName.toString())
        }
      }
    }).catch(error => {
      console.error(error)
    })
  }



  const handleKit = () =>{
    if (!typeCar || !selectedBrand || !selectedModel || !selectedYear || !selectedCylinder) {
      toast.warning('Por favor, complete todas las opciones de búsqueda.')
      return
    }
    const selectKitName = kitName.split(',')
    getKits(selectKitName).then((res) =>{
      setDataKits(res.data)
      setSelectedBrand('')
      setSelectedCylinder('')
      setSelectedModel('')
      setSelectedYear('')
      setShowResults(true)
    }).catch(error => {
      console.error(error)
    })
  }
  // const parsedResult = dataKits.map((item: any) => {
  //   const extraInfo = JSON.parse(item.extraInfo)
  //   return { ...item, extraInfo }
  // })

  return (
    <div className="bg-[#F2F4FE] w-full flex flex-col justify-center items-center">
      <div className="w-[70%] mb-20 mt-10">
        <p className="text-white text-xl sm:text-2xl not-italic font-semibold bg-red-custom max-w-[270px] text-center rounded-lg sm:ml-8">
          Elige tu vehículo
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:flex lg:flex-row justify-around border-[1px] rounded-lg py-4 px-20 bg-white shadow-[0px_3px_10px_0px_#EB4648]">
          <div
            onClick={() => handleTypecar('maquinaria pesada')}
            className={`flex flex-col justify-center items-center text-center cursor-pointer ${
              selectedIcon === 'maquinaria pesada' ? 'selected-icon' : ''
            }`}
          >
            <CraneIcon
              width={60}
              height={60}
              style={`fill-blue-custom hover:fill-red-custom ${
                selectedIcon === 'maquinaria pesada' ? 'fill-red-custom' : ''
              }`}
            />
            <p className="text-[#353535] text-xl not-italic font-medium">
              Maquinaria pesada
            </p>
          </div>
          <div className="h-20 w-[1px] bg-black hidden lg:block" />
          <div
            onClick={() => handleTypecar('camion')}
            className={`flex flex-col justify-center items-center text-center cursor-pointer ${
              selectedIcon === 'camion' ? 'selected-icon' : ''
            }`}
          >
            <TruckIcon
              width={60}
              height={60}
              style={`fill-blue-custom hover:fill-red-custom ${
                selectedIcon === 'camion' ? 'fill-red-custom' : ''
              }`}
            />
            <p className="text-[#353535] text-xl not-italic font-medium">
              Camiones
            </p>
          </div>
          <div className="h-20 w-[1px] bg-black hidden lg:block" />
          <div
            onClick={() => handleTypecar('bus')}
            className={`flex flex-col justify-center items-center text-center cursor-pointer ${
              selectedIcon === 'bus' ? 'selected-icon' : ''
            }`}
          >
            <BusIcon
              width={60}
              height={60}
              style={`fill-blue-custom hover:fill-red-custom ${
                selectedIcon === 'bus' ? 'fill-red-custom' : ''
              }`}
            />
            <p className="text-[#353535] text-xl not-italic font-medium">
              Buses
            </p>
          </div>
          <div className="h-20 w-[1px] bg-black hidden lg:block" />
          <div
            onClick={() => handleTypecar('carro')}
            className={`flex flex-col justify-center items-center text-center cursor-pointer ${
              selectedIcon === 'carro' ? 'selected-icon' : ''
            }`}
          >
            <CarIcon
              width={60}
              height={60}
              style={`fill-blue-custom hover:fill-red-custom ${
                selectedIcon === 'carro' ? 'fill-red-custom' : ''
              }`}
            />
            <p className="text-[#353535] text-xl not-italic font-medium">
              Carros
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-20 w-[70%]">
        <p className="text-white text-xl sm:text-2xl not-italic font-semibold bg-red-custom max-w-[270px] text-center rounded-lg sm:ml-8">
        Fíltralo por:
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-y-4 6xl:flex 6xl:flex-row lg: justify-around sm:gap-x-4 lg:gap-x-8 bg-white py-4 sm:py-8 px-4 sm:px-20 rounded-lg shadow-[0px_3px_10px_0px_#EB4648]">
          <div className='flex flex-col'>
            <label 
              htmlFor="brand"
              className='text-blue-custom text-base not-italic font-semibold'
            >
              Marca
            </label>
            <select
              name='brand' 
              onChange={handlerSelectBrand}
              value={selectedBrand}
              className='bg-[#F2F4FE] p-2 rounded-lg'
            >
              <option value=''>Seleccione tipo de vehiculo</option>
              {listBrand.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col'>
            <label 
              htmlFor="model"
              className='text-blue-custom text-base not-italic font-semibold'
            >
              Modelo
            </label>
            <select
              name='model' 
              onChange={handlerSelectModel}
              value={selectedModel}
              className='bg-[#F2F4FE] p-2 rounded-lg'
            >
              <option value=''>Seleccione el modelo</option>
              {listModel.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col'>
            <label 
              htmlFor="cylinder"
              className='text-blue-custom text-base not-italic font-semibold'
            >
              Cilindraje del motor
            </label>
            <select
              name='cylinder' 
              onChange={handlerSelectCylinder}
              value={selectedCylinder}
              className='bg-[#F2F4FE] p-2 rounded-lg'
            >
              <option value=''>Seleccione el cilindraje</option>
              {listCylinder.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col'>
            <label 
              htmlFor="year"
              className='text-blue-custom text-base not-italic font-semibold'
            >
              Año
            </label>
            <select
              name='year' 
              onChange={handlerSelectYear}
              value={selectedYear}
              className='bg-[#F2F4FE] p-2 rounded-lg'
            >
              <option value=''>Seleccione el año</option>
              {listYear.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <label
              className="text-center text-blue-custom text-base font-semibold not-italic"
              htmlFor=""
            >
              Buscar
            </label>
            <button 
              onClick={handleKit}
              className="bg-red-custom px-2 py-2 rounded-lg">
              <Search className="text-white text-xl font-black" />
            </button>
          </div>
        </div>
        <div className='flex flex-col 5xl:flex 5xl:flex-row 5xl:justify-between items-center 5xl:items-start w-full '>

          {showResults && (
            <>
              <KitsResult dataKits={dataKits} />
              <FullKitCard dataKits={dataKits} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
