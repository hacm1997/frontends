import { postTypeRequestProducts } from './postTypeRequestProducts.instance'

export interface InitialRequest {
  products: object,
  shipping_price: number
}

export const calculateTotal = async (data: InitialRequest) =>{
  const postRequest = postTypeRequestProducts()

  try {
    const res = await postRequest({
      url: '/cart/calculate',
      data: data
    })
    
    const response = res.data
    return response
  } catch (error) {
    // Maneja el error aquí si es necesario
    console.error('Error al realizar la solicitud:', error)
    throw error // Puedes relanzar el error o manejarlo de alguna otra manera
  }
}