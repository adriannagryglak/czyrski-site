import React from 'react'
import { Link } from 'gatsby' 
import Logo from './Logo'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Footer() {
  return (
    <footer className='footer custom-container'>
      <div className='footer-container'>

        <div className='footer-logo'>
          <Logo/>
        </div>

        <div className='footer-details'>
          <div>
            <h5>Nawigacja</h5>
            <nav className='footer-nav'>
              <div className='footer-nav-container'>
                <Link activeClassName="active" partiallyActive={false} className="footer-nav__link" to="/">Start</Link>
                <Link activeClassName="active" partiallyActive={false} className="footer-nav__link" to="/o-gabinecie">O gabinecie</Link>
                <AnchorLink
                  to="/#uslugi"
                  title="Usługi"
                  activeClassName="active" className="footer-nav__link"
                  stripHash
                />
              </div>
              <div className='footer-nav-container'>
                <Link activeClassName="active" partiallyActive={false} className="footer-nav__link" to="/cennik">Cennik</Link>
                <Link activeClassName="active" partiallyActive={false} className="footer-nav__link" to="/mapa-dojazdu">Mapka dojazdu</Link>
                <AnchorLink
                  to="/#kontakt"
                  title="Kontakt"
                  activeClassName="active" className="footer-nav__link"
                  stripHash
                />
              </div>
            </nav>
          </div>

          <div>
            <h5 className='footer-contact__title'>Dane kontaktowe:</h5>
            <ul className='footer-contact'>
              <li><a href="tel:48-713-891-385">+48 71 389 13 85</a></li>
              <li><a href="mailto:kontakt@czyrski.pl">kontakt@czyrski.pl</a></li>
              <li>Al. Obrońców Lwowa 7a<br/>56-100 Wołów</li>
            </ul>
          </div>
          
        </div>
      </div>
      <p className='footer__copyright'>Copyright © Piotr Czyrski Praktyka Stomatologiczna</p>
    </footer>
  )
}
