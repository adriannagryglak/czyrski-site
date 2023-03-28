import React from 'react'
import ServicePageLayout from '../components/servicePageLayout';
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/style.scss';

export default function ProtetykaPage() {

  const content = `Protetyka stomatologiczna zajmuje się odbudową zębów, których nie da się zachowawczo odbudować/wypełnić  i uzupełnianiem braków zębowych czyli zastąpieniem utraconych zębów zębami „sztucznymi” z różnych tworzyw. Protezy stałe to korony i mosty, także wkłady koronowo-korzeniowe - pacjent nie może ich samodzielnie wyjąć/zdjąć. Protezy ruchome częściowe, całkowite wykonane na bazie tworzyw sztucznych lub z metalu-szkieletowe to protezy wyjmowane - pacjent może je wyjąć choćby do celów higienicznych. Możliwe jest wykonanie zarówno zwykłego uzupełnienia protetycznego w postaci protezy akrylowej, jak i uzupełnienia z „najwyższej półki”, jak protezy szkieletowe (z metalowym podłożem), na zatrzaski lub zasuwki, koron porcelanowych nowej generacji, czy licówek kosmetycznych.  Nawet przy użyciu bardzo zaawansowanych technik nie zawsze udaje się doprowadzić do stanu pełnego przywrócenia funkcji narządu żucia przy pomocy protezowania, gdyż proteza jest tworem sztucznym i jako taka nigdy nie będzie funkcjonować jak uzębienie naturalne podobnie jak sztuczna ręka czy noga nawet w postaci zrobotyzowanej (mechanoelektronicznej), również najlepsze okulary nie zastąpią dobrych oczu - skorygują wzrok owszem, ale nie funkcjonują tak jak sprawne oczy. Dlatego własne zdrowe zęby są lepsze niż najlepsza proteza i warto o nie dbać.
  Czasem przy postępowaniu protetycznym potrzebne jest skojarzone leczenie ortodontyczne z leczeniem stawu skroniowo- żuchwowego - w takiej sytuacji pacjent nosi elementy aparatu ortodontycznego czy odpowiednią szynę przed  właściwym leczeniem protetycznym, bywa że wszystkie te elementy są użyte w jednym czasie.`
  
  return (
    <ServicePageLayout>
              <StaticImage src="../images/services/prototyka.jpg"
                            alt="protetyka"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
      <div className='custom-container service-container'>
                <StaticImage src="../images/services/prototyka.jpg"
                                alt="protetyka"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100 services-img'
                />
                <h4 className='service-title'>USŁUGI</h4>
                <h2>Protetyka</h2>
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
