import type {NextApiRequest, NextApiResponse} from 'next'
import productos from '../../data/productos'

type Data = {
    productos: any

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({productos: productos})
  } else {
    res.status(405).json({productos: []})
  }
}
