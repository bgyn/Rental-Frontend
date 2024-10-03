import React from 'react'
import Navbar from '../Components/Ui/Navbar'
import Hero from '../Components/Ui/Hero'
import Category from '../Components/Ui/Category'
import Scrollproducts from '../Components/Ui/Scrollproducts'
import BrowseProducts from '../Components/Ui/BrowseProducts'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Scrollproducts/>
    <BrowseProducts/>
    </>
  )
}

export default Home