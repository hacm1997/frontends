import React, { useEffect, useState } from 'react'
import { Main } from '../../components/layouts/Main'
import { PaymentSteps } from '../../components/paymentSteps/PaymentSteps'

const Index = () => {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <Main>
      <PaymentSteps/>
    </Main>
  )
}
export default Index
