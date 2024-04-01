import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../business/container/general/layout_apoyo/layout'
import Selection from '../business/container/views/selection/selection'

const Home: NextPage = () => {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)

  }, [])

  if (!showChild) {
    return null
  }
  return (
    <Layout>
      <Selection />
    </Layout>
  )
}

export default Home
