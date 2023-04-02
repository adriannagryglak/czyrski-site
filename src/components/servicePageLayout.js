import React from 'react'
import Topper from './Topper'
import NavBar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import Seo from './Seo';

export default function ServicePageLayout( { children } ) {

  return (
      <>
        <Seo />
        <section className='service-page'>
        <Topper/>
        <NavBar />      
          {children}
        <Services/>
        <Footer />
        </section>
      </> 
  )
}