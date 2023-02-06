import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Topper() {
  return (
    <div className='topper custom-container'>
        <div className='topper-container'>
            <FontAwesomeIcon className="topper__icon" icon={faLocationDot} />
            <p>Aleja Obrońców Lwowa 7a,  56-100 Wołów</p>
        </div>
        <div className='topper-container-right'>
            <div className='topper-container topper__phone'>
                <FontAwesomeIcon className="topper__icon" icon={faPhone} />
                <p><a href="tel:48-713-891-385">+48 71 389 13 85</a></p>
            </div>
            <div className='topper-container'>
                <FontAwesomeIcon className="topper__icon" icon={faEnvelope} />
                <p><a href="mailto:kontakt@czyrski.pl">piotr@czyrski.pl</a></p>
            </div>
        </div>
    </div>
  )
}
