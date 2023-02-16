import React from 'react'
import { Link } from 'gatsby';

export default function Details() {
  return (
    <section id="details" className='custom-container'>
        <div className='details-container'>
            <div className='details-item'>
                <h5 className='details__title'>Jak do nas trafić?</h5>
                <p className='details__text'>Nasz gabinet znajduje się w centrum Wołowa, w pobliżu stacji PKP.</p>
                <Link className='details__link' to="/mapka-dojazdu">mapa dojazdu</Link>
                
            </div>
            <div className='details-item'>
                <h5 className='details__title'>Godziny przyjęć</h5>
                    <ul className='details__list'>
                        <li>
                            <span>Poniedziałek</span>
                            <span>9:00 - 15:30</span>
                        </li>
                        <li>
                            <span>Wtorek</span>
                            <span>12:30 - 18:30</span>
                        </li>
                        <li>
                            <span>Środa</span>
                            <span>12:30 - 18:30</span>
                        </li>
                        <li>
                            <span>Czwartek</span>
                            <span>12:30 - 18:30</span>
                        </li>
                    </ul>
            </div>
            <div className='details-item'>
                <h5 className='details__title'>Umów wizytę</h5>
                <p className='details__text'>Szanowni Państwo, rejestrujemy telefonicznie w godzinach pracy gabinetu.</p>
                <a className='details__phone' href="tel:48-713-891-385">+48 71 389 13 85</a>
            </div>
        </div>
    </section>
  )
}
