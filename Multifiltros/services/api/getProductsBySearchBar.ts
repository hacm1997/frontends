import config from '../config'
import { postTypeRequestProducts } from './postTypeRequestProducts.instance'

export const getProductsBySearch = async(textFilter: string) =>{
  const postRequest = postTypeRequestProducts()
  try {
    const res = await postRequest({
      url: `/product/search?status=${config.PRODUCT_STATUS}&text=${textFilter}`,
    })
    const response = res.data
    return response   
  } catch (error) {
    console.error('Error al realizar la solicitud:', error)
    throw error
  }
}