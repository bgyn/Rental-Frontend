import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Scrollproducts from '../Components/Scrollproducts'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Category />
    <Scrollproducts/>
    </>
  )
}

export default Home