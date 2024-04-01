import { getTypeRequestProducts } from './getTypeRequestProducts.instance'

export const getProductById = async(id: string) =>{
  const getRequest = getTypeRequestProducts()
  try {
    const res = await getRequest({
      url: `/product/${id}`,
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }

}