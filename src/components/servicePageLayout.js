import React from 'react'
import Topper from './Topper'
import NavBar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import Seo from './Seo';
import { useStaticQuery, graphql } from "gatsby";

export default function ServicePageLayout( { children } ) {

  const data = useStaticQuery(graphql`
  query {
    news {
      newposts(last: 1) {
        content {
          raw
        }
        title
        publishedAt
        heroImg{
          url
        }
      }
    }
  }
`);

  return (
      <>
        <Seo />
        <section className='service-page'>
        <Topper/>
        <NavBar isNews={data.news.newposts.length !== 0}/>      
          {children}
        <Services/>
        <Footer isNews={data.news.newposts.length !== 0}/>
        </section>
      </> 
  )
}