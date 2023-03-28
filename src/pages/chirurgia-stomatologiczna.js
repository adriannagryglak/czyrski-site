import React from 'react'
import ServicePageLayout from '../components/servicePageLayout';
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import '../styles/style.scss';

export default function ChirurgiaPage() {

  const content= `Chirurgia stomatologiczna zajmuje się drobnymi zabiegami z przerwaniem ciągłości tkanek w obszarze jamy ustnej. . Przed zabiegiem lekarz musi być poinformowany o występujących chorobach oraz zażywanych lekach. Pomaga to w zaplanowaniu zabiegu oraz dobraniu odpowiedniego środka znieczulającego. Zabiegi w chirurgii stomatologicznej to między innymi usunięcia zębów/korzeni,  apikotomie czyli usunięcie wierzchołków korzeni ze zmianami przyszczytowymi, zabiegi w obrębie tkanek miękkich jak podcinanie krótkich wędzidełek wargi i języka np. ze wskazań ortodontycznych lub logopedycznych. Korekty wyrostka zebodołowego ze wskazań protetycznych. Również w zakres chirurgii stomatologicznej wchodzi implantologia czyli „wszczepianie” implantów zębowych w miejsce zębów utraconych.`
  
  return (
    <ServicePageLayout>
        <StaticImage src="../images/services/chirurgia.jpg"
                            alt="chirurgia stomatologiczna"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
      <div className='custom-container service-container'>
              <StaticImage src="../images/services/chirurgia.jpg"
                              alt="chirurgia stomatologiczna"
                              quality="100"
                              placeholder="blurred"
                              className='d-block w-100 services-img'
              />
                <h4 className='service-title'>USŁUGI</h4>
                <h2>Chirurgia stomatologiczna</h2>
                <p className='service paragraph'>
                  {content}
                </p>
                <AnchorLink
                to="/#kontakt"
                title="Kontakt"
                activeClassName="active" className="service-link"
                //stripHash

            />
            </div>
  </ServicePageLayout>
  )
}
