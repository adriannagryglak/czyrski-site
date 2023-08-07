import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Topper from '../components/Topper';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import '../styles/style.scss';
import { StaticImage } from 'gatsby-plugin-image'

export default function MapkaDojazdu() {

  const [isModal, setIsModal] = React.useState(false);

  return (
    <div>
      <Seo />
      <Topper/>
      <NavBar/>
      <PageHeader location="Kontakt i mapka dojazdu"/>
      <section className='map-container'>
      {isModal && <div className='modal' onClick={()=>{setIsModal(false)}}>
              <StaticImage
                          src="../images/mapa.jpg"
                          quality="100"
                          placeholder="blurred"
                          className='map-modal'
                          alt="widok z lotu ptaka na Wołów, z oznaczeniem lokalizacji i kierunków"
                          
                          /> 
                <div className='exit'></div>
          </div>}
          <div onClick={()=>{setIsModal(true); console.log('click')}}>
          <StaticImage
                    src="../images/mapa.jpg"
                    style={{height: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    alt="widok z lotu ptaka na Wołów, z oznaczeniem lokalizacji i kierunków"
                    
                    />
          </div>
        <div className='map-form'>
          
            <ContactForm className='map-form__l' isLanding={false}/>
          
          <div className='map-form__r'>
            <div>
              <img src='/map-marker-alt.svg' alt='ikona pinezki'/>
              <h3>Dane <br/>kontaktowe</h3>
            </div>
            <ul className='map-form-contact'>
              <li><a href="https://www.google.com/maps/place/Czyrski+Piotr,+lek.+stomatolog+chirurg.+Gabinet/@51.3351218,16.6311845,17z/data=!3m1!4b1!4m6!3m5!1s0x470f9b56dc25513f:0x3468bc2638e2504c!8m2!3d51.3351185!4d16.6356692!16s%2Fg%2F1tfjzl5c">
                    Al. Obrońców Lwowa 7a<br/>56-100 Wołów
                  </a>
              </li>
              <li><a href="tel:48-713-891-385">+48 71 389 13 85</a></li>
              <li><a href="mailto:piotr@czyrski.pl">piotr@czyrski.pl</a></li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
