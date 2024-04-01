import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Amala y Tachido</title>
      </Head>
      <Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {children}
        <Footer />
      </motion.div>
    </>
  )
}
