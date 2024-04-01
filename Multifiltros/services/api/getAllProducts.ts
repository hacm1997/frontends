import config from '../config'
import { postTypeRequestProducts } from './postTypeRequestProducts.instance'

export const GetAllProducts = async(page : number = 1, pageSize: number) =>{
  const getRequest = postTypeRequestProducts()
  try {
    const res = await getRequest({
      url: `/product/filters?status=${config.PRODUCT_STATUS}&page=${page}&limit=${pageSize}`,
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }

}
