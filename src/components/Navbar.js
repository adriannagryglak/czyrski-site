import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import { useMediaQuery } from 'react-responsive'

export default function NavBar() {

  const isHamburger = useMediaQuery({
    query: '(max-width: 1250px)'
  })

  return (
    <nav className='navbar custom-container'>
          <Logo/>
          <div className='navbar-container'>
            {isHamburger ? <div>
              hamburger will be here
            </div> : <>
            <Link className="navbar-link" to="/">Start</Link>
            <Link className="navbar-link" to="/o-gabinecie">O gabinecie</Link>
            <Link className="navbar-link" to="/usługi">Usługi</Link>
            <Link className="navbar-link" to="/usługi">Cennik</Link>
            <Link className="navbar-link" to="/mapa-dojazdu">Mapka dojazdu</Link>
            <Link className="navbar-link" to="/mapa-dojazdu">Kontakt</Link>
            </>}
            
        </div>
    </nav>
  )
}
