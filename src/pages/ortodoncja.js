import React from 'react'
import ServicePageLayout from '../components/servicePageLayout';
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/style.scss';

export default function OrtodoncjaPage() {

  const content = `Leczenie ortodontyczne obejmuje obowiązkowe rozpoznanie wady przy użyciu telerentgenogramu i cefalometrii oraz następowe leczenie przy użyciu aparatów ruchomych i stałych dostosowanych do konkretnego przypadku. Leczenie ortodontyczne to nie tylko "prostowanie" zębów ale również korekta kostnych problemów czaszkowych czyli wzajemnej relacji szczęki i żuchwy w tzw. teatrze czynnościowym co wiąże się również z korektą dysfunkcji stawów skroniowo-żuchwowych bardzo często współwystępującej w przypadku wad zgryzowych. Zgodnie z nowoczesnymi trendami stosowane jest czynnościowe leczenie bezekstrakcyjne czyli bez usuwania zębów za wyjątkiem wybranych przypadków III klasy.`;

  return(<ServicePageLayout>
            <StaticImage src="../images/services/ortodoncja.jpg"
                            alt="aparat ortodontyczny"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
      <div className='custom-container service-container'>
            <StaticImage src="../images/services/ortodoncja.jpg"
                              alt="aparat ortodontyczny"
                              quality="100"
                              placeholder="blurred"
                              className='d-block w-100 services-img'
              />
                <h4 className='service-title'>USŁUGI</h4>
                <h2>Ortodoncja</h2>
                <p className='service-paragraph'>
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
