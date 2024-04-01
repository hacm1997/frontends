export interface InvoiceData {
x_id_invoice: string
x_description: string
x_amount: number
x_bank_name: string
x_transaction_state: string
x_transaction_date: string
x_type_payment: string
x_business: string
x_extra1: string
x_extra2: string
x_extra7: string
}

export interface WopmiInvoiceData {
  amount_in_cents: number
  created_at: string
  currency: string
  id: string
  payment_method_type: string
  status: string
  reference: string
  merchant: any,
  payment_method: any,
  finalized_at: string
  }

interface products{
  id: number,
  product_name: string
  amount: number
  price: number
  detail: JSON | any
}

export interface UserDataInvoice {
  reference: string
  createdAt: string
  customer: {
    id?: number | null
    full_name?: string
    phone?: number | null
    email?: string
    address?: string
    details: JSON | any
  }
  products: products[]
  shipping: {
    city?: string
  }
  iva: string
  total: string
  payment_method: string
  status: string
  extraInfo?: JSON | any
}

export interface UserDataInvoiceTwo {
  reference: string
  createdAt: string
  customer: {
    id?: number | null
    name?: string
    last_name?: string
    phone?: number | null
    email?: string
    address?: string
    details: JSON | any
  }
  products: products[]
  shipping: {
    city?: string
  }
  iva: string
  total: string
  payment_method: string
  status: string
  extraInfo?: JSON | any
}