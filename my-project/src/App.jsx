//import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import CTA from './components/CTA'
import AppDown from './components/AppDown'
import Footer from './components/footer'
// import Testi from './components/testi'

function App() {
 

  return (
    <div >
      <Navbar/>
      <Hero/>
      <Products/>
      <CTA/>
      <AppDown/>
      <Footer/>
      {/* <Testi/> */}
      
      </div>  
     
  )
}

export default App
