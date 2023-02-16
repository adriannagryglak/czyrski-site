import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Topper from '../components/Topper';
import PageHeader from '../components/PageHeader';
import Map from '../components/Map';

export default function MapkaDojazdu() {
  return (
    <div>
      <Topper/>
      <NavBar/>
      <PageHeader location="Kontakt i mapka dojazdu"/>
      <section className='map-container'>
        <Map/>
        <form className='map-form'>
          <div className='map-form__l'>
          <img src='/envelope-open.svg' alt='ikona koperty'/>
            <h2>Formularz kontaktowy</h2>
            {/* inputs + submit button */}
          </div>
          <div className='map-form__r'>
            <div>
              <img src='/map-marker-alt.svg' alt='ikona pinezki'/>
              <h3>Dane <br/>kontaktowe</h3>
            </div>
            <ul className='map-form-contact'>
              <li>Al. Obrońców Lwowa 7a<br/>56-100 Wołów</li>
              <li><a href="tel:48-713-891-385">+48 71 389 13 85</a></li>
              <li><a href="mailto:kontakt@czyrski.pl">kontakt@czyrski.pl</a></li>
            </ul>
          </div>
        </form>
      </section>
      <Footer/>
    </div>
  )
}
