import config from '../config'
import { getTypeRequestProducts } from './getTypeRequestProducts.instance'

export const getNewOrBestProducts = async(page:number, limit: number, bestProduct: boolean, newProduct: boolean) =>{
  const getRequest = getTypeRequestProducts()
  const urlNews = `new=${newProduct}&page=${page}&limit=${limit}`
  const urlBests = `best=${bestProduct}&page=${page}&limit=${limit}`
  try {
    const res = await getRequest({
      url: `/product/search/params?status=${config.PRODUCT_STATUS}&${bestProduct === true ? urlBests : urlNews}`,
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }

}