import Productos from '../../data/productos'

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { tipo: string; nombre: string; precio: number; descripcion: string }[]): void; new(): any } } }) {
  res.status(200).json(Productos)
}

