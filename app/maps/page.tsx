import React from 'react'
import Maps from '../compenents/Maps'
import { Navbar } from '../compenents/Navbar'
import { Footer } from '../compenents/Footer'

function page() {
  return (
    <div className='bg-black'>
     <Navbar/>
     <Maps/>
     <Footer/>
    </div>
  )
}

export default page
