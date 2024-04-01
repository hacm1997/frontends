import { getTypeRequestProducts } from '../api/getTypeRequestProducts.instance'

export const getAllTags = async(pageNumber: number, pageSize: number) =>{
  const getRequest = getTypeRequestProducts()
  try {
    const res = await getRequest({
      url: `/tags/?page=${pageNumber}&limit=${pageSize}`,
    })
    const response = res.data
    return response
  } catch (error) {
    console.error('Error al realizar la solicitud:', error)
    throw error
  }
  
}