import React from 'react'
import Newcollection from '../../components/views/home/newcollection'
import Layout from '../../components/general/layout'
import WeAre from '../../components/views/home/weare'
import OurCollection from '../../components/views/home/ourcollection'
import Store from '../../components/views/home/store'
import Contact from '../../components/views/home/contact'

const Home = () => {
  return (
    <div className='bg-[#f7f7f7]'>
      <Layout>
        <div className='pt-28'>
          <Newcollection/>
        </div>
        <WeAre/>
        <OurCollection/>
        <Store />
        <Contact />
      </Layout>
    </div>
  )
}

export default Home