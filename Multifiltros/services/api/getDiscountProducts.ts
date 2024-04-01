import { getTypeRequestProducts } from './getTypeRequestProducts.instance'
import config from '../config'

export const getDiscountProducts = async(page:number, limit: number) =>{
  const getRequest = getTypeRequestProducts()
  try {
    const res = await getRequest({
      url: `/product/single/offert?status=${config.PRODUCT_STATUS}&page=${page}&limit=${limit}`,
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }

}