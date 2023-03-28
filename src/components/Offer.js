import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function Offer() {
  return (
    <section id='offer' className='custom-container offer-container'>
        <div className='offer-item offer__text'>
            <h4 className='offer-title'>w ofercie</h4>
            <h2 className='offer-title__welcome'>Zabiegi paradontologiczne przy użyciu aparatów ultradźwiękowych</h2>
            <p className='offer__paragraph'>Ultradźwiękowa alternatywa w leczeniu chorób przyzębia umożliwia oczyszczenie uzębienia z osadów kamienia nazębnego. Przy użyciu wyspecjalizowanych końcówek możemy oczyścić głęboko w kieszonkach dziąsłowych  i trudno dostępnych miejscach. Ten zabieg nie musi boleć.</p>
            <AnchorLink
                  to="/#kontakt"
                  title="Kontakt"
                  activeClassName="active" className="offer-link"
                  //stripHash
                />
        </div>
        <div className='offer-item offer__photo'>
            <StaticImage
                src="../images/offer.png"
                alt="zdjecie w tle"
                quality="100"
                placeholder="blurred"
                className='d-block w-100'
            />
        </div>
    </section>
  )
}
