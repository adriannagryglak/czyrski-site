import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import { useMediaQuery } from 'react-responsive'
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function NavBar() {

  const [isOpen, setOpen] = useState(false)

  const isHamburger = useMediaQuery({
    query: '(max-width: 1250px)'
  })

  return (
    <nav className='navbar custom-container'>
          <Logo/>
          <div className='navbar-container'>
            {isHamburger ? <>
              <Hamburger label="otwórz menu" size={26} rounded toggled={isOpen} toggle={setOpen} direction="right" color="black"/>
              {<div className={isOpen ? 'navbar-hamburger open' : 'navbar-hamburger'}>
                <Link activeClassName="active" className="navbar-link" to="/">Start</Link>
                <Link activeClassName="active" className="navbar-link" to="/o-gabinecie">O gabinecie</Link>
                <AnchorLink
                  to="/#uslugi"
                  title="Usługi"
                  activeClassName="active" className="navbar-link"
                  stripHash
                />
                <Link activeClassName="active" className="navbar-link" to="/cennik">Cennik</Link>
                <Link activeClassName="active" className="navbar-link" to="/mapka-dojazdu">Mapka dojazdu</Link>
                <AnchorLink
                  to="/#kontakt"
                  title="Kontakt"
                  activeClassName="active" className="navbar-link"
                  stripHash
                />
              </div>}
            </>
            : <>
                <Link activeClassName="active" className="navbar-link" to="/">Start</Link>
                <Link activeClassName="active" className="navbar-link" to="/o-gabinecie">O gabinecie</Link>
                <AnchorLink
                  to="/#uslugi"
                  title="Usługi"
                  activeClassName="active" className="navbar-link"
                  stripHash
                />
                <Link activeClassName="active" className="navbar-link" to="/cennik">Cennik</Link>
                <Link activeClassName="active" className="navbar-link" to="/mapka-dojazdu">Mapka dojazdu</Link>
                <AnchorLink
                  to="/#kontakt"
                  title="Kontakt"
                  activeClassName="active" className="navbar-link"
                  stripHash
                />
              </>}
            
        </div>
    </nav>
  )
}
