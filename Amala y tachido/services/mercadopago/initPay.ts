import { TypeProduct } from './product'

const initPay = async ({ quantity, title, unit_price, description }: TypeProduct) => {

  try {
    const res = await fetch('/api/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity,
        title,
        unit_price,
        description
      })
    })

    if (!res.ok) {
      throw new Error('Error' + res.status)
    }

    const { message } = await res.json()
    const { init_point } = message
    return init_point
  } catch (error) {
    console.log(error)
  }
}

export default initPay
