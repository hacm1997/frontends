import { link } from 'fs'
import React from 'react'

interface detailButton {
  name: string,
  link: string,
  classTailw: string,
}
const ButtonComponent = (details:detailButton) => {

  return (
    <button className={details.classTailw} type='submit'>{details.name}</button>
  )
}

export default ButtonComponent