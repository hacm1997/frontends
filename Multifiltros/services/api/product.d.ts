export interface Product {
  tenantId: string
  id: string
  name: string
  description: string
  price: number
  createdAt: Date
  status: string
  extraInfo: {}
}