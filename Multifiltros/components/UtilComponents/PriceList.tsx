import React, { useEffect, useState } from 'react'
import { ToolsIcon } from '../../public/icons/utilsIcons/toolsIcon'
import { FORM2 } from '../../data/select'
import { getCategories } from '../../services/api/getCategories'
import { formatNumber } from '../../helpers/formatNumber'

interface form1Props {
  label: string
}

export const PriceList = ({label}: form1Props) => {
  const [generalService, setGeneralService] = useState<string[]>([])
  const [listTypeService, setListTypeService] = useState<string[]>([])
  const [listVehicle, setListVehicle] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState('')
  const [selectedTypeService, setSelectedTypeService] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [resultData, setResultData] = useState<any[]>([])

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

  useEffect(() => {   
    getCategories(label).then((res:any) => {
      const response = res.filter((item:any) => item.tags.includes('serviteca'))
      const dataTag = sortData(response, 1)
      if(dataTag){
        if (JSON.stringify(dataTag) !== JSON.stringify(generalService)) {
          setGeneralService(dataTag)
        }
      }else{
        setGeneralService([])
      }
    }).catch(error => {
      console.error(error)
    })
  },[])

  const handlerTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setListVehicle([])
    setListTypeService([])
    const value = e.target.value
    setSelectedTag(value)
    const buildQuery = `${value}`
    const newLabel = encodeURIComponent(buildQuery)
    getCategories(newLabel).then((res:any) => {
      const dataVehicle = sortData(res, 1)
      setListVehicle(dataVehicle || [])
    }).catch(error => {
      console.error(error)
    })
  }

  const handlerVehicle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setListTypeService([])
    const value = e.target.value
    setSelectedVehicle(value)
    const buildQuery = `${selectedTag},${value}`
    const newLabel = encodeURIComponent(buildQuery)
    getCategories(newLabel).then((res:any) => {
      const dataService = sortData(res, 2)
      if(dataService){
        if (JSON.stringify(dataService) !== JSON.stringify(listTypeService)) {
          setListTypeService(dataService)
        }
      }else{
        setListTypeService([])
      }
    }).catch(error => {
      console.error(error)
    })
  }

  const handlerService = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedTypeService(value)
  }

  const getService = () => {
    const buildQuery = `${selectedTag},${selectedVehicle},${selectedTypeService}`
    getCategories(buildQuery).then((res:any) => {
      setShowResult(true)
      setSelectedTag('')
      setListVehicle([])
      setSelectedVehicle('')
      setListTypeService([])
      setSelectedTypeService('')
      setResultData(res)
    }).catch(error => {
      console.error(error)
    })
  }

  console.log('selected tag => ',selectedTag)

  return (
    <div className="rounded-lg px-8 mt-8 pt-10 pb-6 max-w-[700px] border-[1px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className='flex gap-2'>
        <ToolsIcon width={30} height={30} style='fill-red-custom hidden sm:block'/>
        <h2 className='text-blue-custom font-bold text-2xl'>Consulta nuestros precios bases</h2>
        <ToolsIcon width={30} height={30} style='fill-red-custom hidden sm:block'/>
      </div>
      <div className='flex flex-col sm:grid sm:grid-cols-2 justify-center items-center sm:items-end gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-blue-custom not-italic font-medium'>Selecciona la categoria</label>
          <select onChange={handlerTag} value={selectedTag} name="service" id="" className='text-blue-custom bg-[#F2F4FE] sm:text-sm py-2 px-2 rounded-lg font-semibold'>
            <option value="">Seleccionar opción</option>
            {FORM2.map(item => (
              <option key={item.id} value={item.value.toLowerCase()}>{item.label}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-blue-custom not-italic font-medium'>Selecciona el tipo de vehiculo</label>
          <select onChange={handlerVehicle}  name="subService" id="" className='text-blue-custom bg-[#F2F4FE] sm:text-sm py-2 px-2 rounded-lg font-semibold'>
            <option value="">Seleccionar</option>
            {listVehicle.map((item,index) =>(
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-blue-custom not-italic font-medium'>Selecciona el tipo de servicio</label>
          <select onChange={handlerService} name="subService" id="" className='text-blue-custom bg-[#F2F4FE] sm:text-sm py-2 px-2 rounded-lg font-semibold'>
            <option value="">Seleccionar</option>
            {listTypeService.map((item,index) =>(
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className='flex justify-center items-end pt-4'>
          <button onClick={getService} className="bg-red-custom hover:bg-blue-custom px-4 py-2 rounded-lg text-white font-black">Buscar</button>
        </div>
      </div>
      {showResult === true ? 
        <div className='mt-4'>
          <p className='text-red-custom font-bold text-xl'>Resultado del precio base del servicio</p>
          {resultData.map((item,index) =>(
            <div className='flex flex-col justify-center items-center' key={index}>
              <div className='flex flex-col sm:flex sm:flex-row justify-center items-center sm:gap-2'>
                <p className='text-blue-custom font-medium not-italic text-base'>Tipo de vehículo:</p> 
                <p className='text-blue-custom not-italic font-bold text-lg'>{item.tags.split(',')[1]}</p>
              </div>
              <div className='flex flex-col sm:flex sm:flex-row justify-center items-center sm:gap-2'>
                <p className='text-blue-custom font-medium not-italic text-base'>Categoría del servicio:</p> 
                <p className='text-blue-custom not-italic font-bold text-lg'>{item.tags.split(',')[0]}</p>
              </div>
              <div className='flex flex-col sm:flex sm:flex-row justify-center items-center sm:gap-2'>
                <p className='text-blue-custom font-medium not-italic text-base'>Tipo de servicio:</p> 
                <p className='text-blue-custom not-italic font-bold text-lg'>{item.tags.split(',')[2]}</p>
              </div>
              <div className='flex flex-col sm:flex sm:flex-row justify-center items-center sm:gap-2'>
                <p className='text-blue-custom font-medium not-italic text-base'>Sede disponible:</p> 
                <p className='text-blue-custom not-italic font-bold text-lg'>{item.tags.split(',')[5]}</p>
              </div>
              <div className='flex flex-col sm:flex sm:flex-row justify-center items-center sm:gap-2'>
                <p className='font-bold text-xl text-blue-custom'>Precio base desde : </p>
                <p className='font-bold text-xl text-red-custom'>{formatNumber(item.tags.split(',')[3])}</p>
              </div>
            </div>
          ))}
        </div>
        : null}
    </div>
  )
}
