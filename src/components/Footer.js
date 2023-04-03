import React from 'react'
import { Link } from 'gatsby' 
import Logo from './Logo'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useStaticQuery, graphql } from "gatsby";

export default function Footer() {
  
  const data = useStaticQuery(graphql`
  query {
    news {
      newposts(orderBy: publishedAt_DESC, first: 1) {
        content {
          raw
        }
        title
        publishedAt
      }
    }
  }
`);

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
                {data.news.newposts.length !== 0 &&  <AnchorLink
                  to="/#aktualnosci"
                  title="Aktualności"
                  activeClassName="active" className="footer-nav__link"
                  //stripHash
                />}
                <Link activeClassName="active" partiallyActive={false} className="footer-nav__link" to="/o-gabinecie">O gabinecie</Link>
                <AnchorLink
                  to="/#uslugi"
                  title="Usługi"
                  activeClassName="active" className="footer-nav__link"
                  //stripHash
                />
                </div>
              <div className='footer-nav-container'>
              <a className="footer-nav__link" href={`/regulamin.pdf`} download={`Regulamin obowiązujący w gabinecie stomatologicznym dr n med lek stom. Piotr Czyrski`}>Regulamin</a>
                <AnchorLink
                  to="/#kontakt"
                  title="Kontakt"
                  activeClassName="active" className="footer-nav__link"
                  //stripHash
                />
                <Link activeClassName="active" partiallyActive={false} className="footer-nav__link" to="/cennik">Cennik</Link>
                <Link activeClassName="active" partiallyActive={false} className="footer-nav__link" to="/mapka-dojazdu">Mapka dojazdu</Link>
              </div>
            </nav>
          </div>

          <div>
            <h5 className='footer-contact__title'>Dane kontaktowe:</h5>
            <ul className='footer-contact'>
              <li><a href="tel:48-713-891-385">+48 71 389 13 85</a></li>
              <li><a href="mailto:piotr@czyrski.pl">piotr@czyrski.pl</a></li>
              <li><a href="https://www.google.com/maps/place/Czyrski+Piotr,+lek.+stomatolog+chirurg.+Gabinet/@51.3351218,16.6311845,17z/data=!3m1!4b1!4m6!3m5!1s0x470f9b56dc25513f:0x3468bc2638e2504c!8m2!3d51.3351185!4d16.6356692!16s%2Fg%2F1tfjzl5c">Al. Obrońców Lwowa 7a<br/>56-100 Wołów</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      <p className='footer__copyright'>Copyright © Piotr Czyrski Praktyka Stomatologiczna</p>
    </footer>
  )
}
