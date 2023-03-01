import React from 'react'
import Topper from './Topper'
import NavBar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from './Seo';

export default function ServicePageLayout( { children } ) {
  return (
      <>
        <Seo />
        <section className='service-page'>
        <Topper/>
        <NavBar/>
        <StaticImage src="../images/services/ortodoncja.jpg"
                            alt="aparat ortodontyczny"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
        <div className='custom-container service-container'>        
            {children}
        </div>
        <Services/>
        <Footer/>
        </section>
      </> 
  )
}