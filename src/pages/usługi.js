import React from 'react'
import NavBar from '../components/Navbar'
import Topper from '../components/Topper'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'

export default function Offer() {
  return (
    <div>
      <Topper/>
      <NavBar/>
      <PageHeader location="Usługi"/>
      Uslugi
      <Footer/>
    </div>
  )
}
