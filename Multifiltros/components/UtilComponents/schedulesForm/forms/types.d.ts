export interface FormDataStepOne {
  service: string
  subService: string
  other: string
  typeService: string
}

export interface FormDataStepTwo {
  plate: string
  brand: string
  year: number | string | null
  model:string
  line:string
  km:number | string | null
  oilBrand: string
  goo: string
  EngineDisplacement: string
}

export interface FormDataStepThree {
  name: string
  lastName: string
  typeId:string
  id: number | string | null
  phone:number | string | null
  email: string
}

export interface FormDataStepFour {
  city: string
  address:string
}