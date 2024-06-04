import React from 'react'
import SingleHeader from '../../components/SingleHeader/SingleHeader'
import Navbar from '../../components/Navbar/Navbar'
import SingleDesc from '../../components/SingleDesc/SingleDesc'
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts'
import Footer from "../../components/Footer/Footer"
const SinglePage = () => {
  return (
    <section className='w-[100%]'>
        <Navbar/>
      <SingleHeader/>
      <SingleDesc/>
      <SimilarProducts/>
      <Footer/>
    </section>
  )
}

export default SinglePage
