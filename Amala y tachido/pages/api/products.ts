import type { NextApiRequest, NextApiResponse } from 'next'
import productos from '../../data/productsAmalaTwo'
import productosTachido from '../../data/productos'

type Data = {
  productos: any
}

const products = [...productos, ...productosTachido]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({ productos: products })
  } else {
    res.status(405).json({ productos: [] })
  }
}
