import React from 'react'
import Features from '../Features/Features'
import Categories from '../Categories/Categories'
import Footer from '../Footer/Footer'
import Slider from '../Banner/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>      
      <Features/>
      <Categories/><hr/>
      <Footer/>
    </div>
  )
}

export default Home
