import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import { useMediaQuery } from 'react-responsive'
import Hamburger from 'hamburger-react'
import { useState } from 'react';

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
                <Link activeClassName="active" className="navbar-link" to="/usługi">Usługi</Link>
                <Link activeClassName="active" className="navbar-link" to="/usługi">Cennik</Link>
                <Link activeClassName="active" className="navbar-link" to="/mapa-dojazdu">Mapka dojazdu</Link>
                <Link activeClassName="active" className="navbar-link" to="/mapa-dojazdu">Kontakt</Link>
              </div>}
            </>
            : <>
                <Link activeClassName="active" className="navbar-link" to="/">Start</Link>
                <Link activeClassName="active" className="navbar-link" to="/o-gabinecie">O gabinecie</Link>
                <Link activeClassName="active" className="navbar-link" to="/usługi">Usługi</Link>
                <Link activeClassName="active" className="navbar-link" to="/usługi">Cennik</Link>
                <Link activeClassName="active" className="navbar-link" to="/mapa-dojazdu">Mapka dojazdu</Link>
                <Link activeClassName="active" className="navbar-link" to="/mapa-dojazdu">Kontakt</Link>
              </>}
            
        </div>
    </nav>
  )
}
