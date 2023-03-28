import React from 'react'
import ServicePageLayout from '../components/servicePageLayout';
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/style.scss';

export default function ProfilaktykaPage() {

  const content= ` Profilaktyka w stomatologii to zespół działań zapobiegających powstaniu procesu chorobowego w obrębie układu stomatognatycznego.
  Najbardziej oczywiste dla każdego jest tutaj zwalczanie próchnicy, bo z tym prawie każdy spotyka się na co dzień, natomiast nie każdy ma świadomość co do możliwości powstania innych schorzeń lub nie ma świadomości ich istnienia. Profilaktyka to regularne wizyty w gabinecie stomatologicznym i wykonanie badania narządu żucia czyli popularnie zbadania zębów. Umożliwia to wykrycie zmian chorobowych i ich wczesne leczenie co na ogół długoterminowo w obecnych czasach przynosi dobre efekty. Profilaktyka to nie tylko działania w obrębie gabinetu stomatologicznego - to także własne działania pacjenta jak regularna higiena jamy ustnej, unikanie słodyczy, właściwe odżywianie.
  Wczesne leczenie podobnie jak to jest w innych działach medycyny umożliwia szybkie opanowanie powstającego problemu zdrowotnego i niedopuszczenie do powikłań, które mogą uniemożliwić dalsze leczenie np. nieleczona próchnica czyli „dziura” w zębie prowadzi poprzez zniszczenie tkanek twardych zęba do następowych zmian tak w tkankach zębowych i okołozębowych co skutkuje trwałą utratą zęba.
  Utrata uzębienia to nie tylko dyskomfort bezpośrednio utrudniający czynność jedzenia ale też czynnik niszczący układ czaszkowy i w konsekwencji układ posturalny pacjenta - w tym ból kręgosłupa - jest to mało znany skutek uboczny próchnicy co nie znaczy, że rzadki - bardzo częsty w istocie.`
  
  return (
    <ServicePageLayout>
              <StaticImage src="../images/services/wczesne-leczenie.jpg"
                            alt="wczesne leczenie"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
      <div className='custom-container service-container'>
              <StaticImage src="../images/services/wczesne-leczenie.jpg"
                              alt="profilaktyka i wczesne leczenie"
                              quality="100"
                              placeholder="blurred"
                              className='d-block w-100 services-img'
              />
                <h4 className='service-title'>USŁUGI</h4>
                <h2>Profilaktyka, wczesne leczenie</h2>
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
