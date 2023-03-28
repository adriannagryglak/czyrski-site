import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

export default function Topper() {

    config.autoAddCss = false;
    
  return (
    <div className='topper custom-container'>
        <div className='topper-container'>
            <FontAwesomeIcon className="topper__icon" icon={faLocationDot} height={16}/>
            <a href="https://www.google.com/maps/place/Czyrski+Piotr,+lek.+stomatolog+chirurg.+Gabinet/@51.3351218,16.6311845,17z/data=!3m1!4b1!4m6!3m5!1s0x470f9b56dc25513f:0x3468bc2638e2504c!8m2!3d51.3351185!4d16.6356692!16s%2Fg%2F1tfjzl5c">
                Aleja Obrońców Lwowa 7a,  56-100 Wołów
            </a>
        </div>
        <div className='topper-container-right'>
            <div className='topper-container topper__phone'>
                <FontAwesomeIcon className="topper__icon" icon={faPhone} />
                <p><a href="tel:48-713-891-385">+48 71 389 13 85</a></p>
            </div>
            <div className='topper-container'>
                <FontAwesomeIcon className="topper__icon" icon={faEnvelope} />
                <p><a href="mailto:piotr@czyrski.pl">piotr@czyrski.pl</a></p>
            </div>
        </div>
    </div>
  )
}
