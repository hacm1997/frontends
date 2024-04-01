export interface TypeProduct {
  title: string
  unit_price: number
  quantity: number
  description: string
}

export interface TypePayer {
  name?: string | undefined
  surname?: string | undefined
  email?: string | undefined
  phone?: Omit<Phone, 'extension'> | undefined
  identification?: Identification | undefined
  address?: SimpleAddress | undefined;
}