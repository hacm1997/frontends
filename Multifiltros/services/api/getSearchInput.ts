import config from '../config'
import { postTypeRequestProducts } from './postTypeRequestProducts.instance'

export const getSearchInput = async(page: number, limit: number, data?: Object, text_key?: string) =>{
  const postRequest = postTypeRequestProducts()
  const generalUrl = `/product/filter/params?status=${config.PRODUCT_STATUS}&page=${page}&limit=${limit}` 
  const productTypelUrl = `/product/filter/params?status=${config.PRODUCT_STATUS}&page=${page}&limit=${limit}&text_key=${text_key}` 
  try {
    const res = await postRequest({
      url: text_key ? productTypelUrl : generalUrl,
      data
    })
    const response = res.data
    return response   
  } catch (error) {
    console.error('Error al realizar la solicitud:', error)
    throw error
  }
}