import config from '../config'
import { postTypeRequestProducts } from './postTypeRequestProducts.instance'

export const getProductsByTags = async(tags: string[]) =>{
  const postRequest = postTypeRequestProducts()
  try {
    const res = await postRequest({
      url: `/product/filters?status=${config.PRODUCT_STATUS}&page=1&limit=10`,
      data: {
        list_categories: tags
      }
    })
    const response = res.data
    return response   
  } catch (error) {
    console.error('Error al realizar la solicitud:', error)
    throw error
  }
}