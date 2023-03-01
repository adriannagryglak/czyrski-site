import React from 'react';
import ServicePageLayout from '../../components/servicePageLayout';
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react';

export default function LeczeniePage() {

  const [readMoreOn, setReadMoreOn]= useState(true);

  const content = `Najczęstszym problemem niezależnym od wieku pacjenta, nieuświadamianym przez pacjentów jest zespół TMJ czyli TMD to znaczy zespół stawu skroniowo – żuchwowego. Zaburzenia czynności stawu skroniowo-żuchwowego wywołują skutki odległe od miejsca przyczyny jak bóle głowy (92% bóli głowy leczone jako migreny), bóle uszu, karku, pleców, ramion, zawroty głowy, omdlenia, bóle oczu, szumy i odgłosy w uszach, klikania w stawach, zablokowanie szczęk. Do objawów należą też bóle kręgosłupa, lumbago i bóle stawu biodrowego, kolan i stawu skokowego! Zaburzenia zespołu TMJ nie są pierwotne lecz wtórne. Czyli zaburzenia stawu skroniowo-żuchwowego są wtórne do zaburzeń czaszkowych i zgryzowych. Dlatego z reguły należy najpierw przeleczyć zaburzenia kośca czaszkowego, następnie przeleczyć zgryz aby uzyskać prawidłową czynność stawu skroniowo-żuchwowego i tym samym wycofać objawy zespołu TMJ czyli TMD – Temporo-Mandibular Disorders. Są to objawy latami leczone nieskutecznie przez lekarzy różnych specjalności. Diagnoza tych przypadków jest dość prosta, leczenie często łatwe już nie jest. Leczenie obejmuje najpierw diagnostykę i pierwszą pomoc przy użyciu szyny diagnostycznej, dekompresyjnej lub innej w zależności od potrzeby. Czasem wystarczą odpowiednio ulokowane nakłady na zębach jeśli to jest jeszcze możliwe. Następnie zależnie od wieku i stanu uzębienia postępowanie ortodontyczne, protetyczne lub chirodontyczne w celu uzyskania właściwej funkcji stawu skroniowo-żuchwowego. Przy diagnozowaniu bólu w tym bólu głowy istotne jest wykluczenie innych rzadkich przyczyn jak guzy, tętniaki czy choroby układowe – czyli wskazana jest konsultacja neurologiczna i wykonanie rezonansu magnetycznego czy tomografii komputerowej. Przyczyną bólu może być też niedotlenienie związane z upośledzeniem drożności górnej części toru oddechowego w części czaszkowo- szyjnej. Powstaje wtedy tzw. choroba obturacyjna bardzo często mylona z astmą i leczona jak astma. Problem polega na tym, że w przypadku zmniejszenia światła górnego toru oddechowego zwiększa się opór przepływu powietrza, który muszą pokonać płuca. W związku z tym powstaje nadmierne podciśnienie w płucach – szerzej w klatce piersiowej. Cierpią nie tylko płuca ale i żołądek – pojawia się refluks. Rozwiązaniem jest zmniejszenie oporu przepływu powietrza w górnym torze oddechowym przez jego powiększenie. Zadanie to może wykonać tylko stomatolog. Jeszcze inną przyczyną bólu głowy i nie tylko –  jest powszechna obecnie insulinooporność oraz nietolerancja pokarmowa – wymaga to właściwych badań laboratoryjnych i zaangażowania odpowiedniego specjalisty. Tu pojawia się też konieczność holistycznego czyli całościowego spojrzenia na pacjenta.`;

  return(<ServicePageLayout>
            <StaticImage src="../../images/services/bol-glowy.jpg"
                              alt="leczenie bólu głowy"
                              quality="100"
                              placeholder="blurred"
                              className='d-block w-100'
              />
                <h4 className='service-title'>USŁUGI</h4>
                <h2>Leczenie bólu głowy</h2>
                <span className={readMoreOn ? 'service-paragraph shorter' : 'service paragraph'}>
                  Potoczne pojęcie " ból głowy" nie jest pojęciem precyzyjnym ponieważ nie ma czegoś takiego jak ból głowy, mogą boleć różne okolice głowy , różne tkanki np.  najczęściej bolą mięśnie czaszki,  jednak pojęcie "bólu głowy" jest  pojęciem  ogólnie zrozumiałym i dlatego  w tekście nim się posługujemy.
                  <br/><br/>{content}

                </span>
                <a className="service-pragraph__link" onClick={()=>{setReadMoreOn(!readMoreOn)}}>{readMoreOn ? " czytaj dalej" : " zwiń tekst"}</a>
                <AnchorLink
                to="/#kontakt"
                title="Kontakt"
                activeClassName="active" className="service-link"
                //stripHash
            />
          </ServicePageLayout>
  )
}