import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Winter from '../../components/Winter/Winter'
import Autumn from '../../components/Autumn/Autumn'
import Summer from '../../components/Summer/Summer'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Winter/>
      <Autumn/>
      <Summer/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home
