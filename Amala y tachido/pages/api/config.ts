import { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'
import { TypeProduct } from '../../services/mercadopago/product'

// credentials
mercadopago.configure({
  access_token: process.env.NEXT_PUBLIC_ACCESS_TOKEN as string
})

// req and res
const handlerAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const BACK_URL = `${process.env.NEXT_PUBLIC_LOCAL_API}`
    const product: TypeProduct = req.body
    const items = [{
      title: product.title,
      unit_price: product.unit_price,
      quantity: product.quantity,
      description: product.description
    }]

    let preference: CreatePreferencePayload = {
      items,
      back_urls: {
        "success": `${BACK_URL}`,
        "failure": `${BACK_URL}`,
        "pending": `${BACK_URL}`
      },
      auto_return: "approved"
    }

    const response = await mercadopago.preferences.create(preference)
    res.status(200).json({ message: response.body })
  } else {
    res.status(400).json({ message: 'Bad request' })
  }
}

export default handlerAPI
