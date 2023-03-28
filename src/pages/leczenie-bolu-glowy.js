import React from 'react';
import ServicePageLayout from '../components/servicePageLayout';
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react';
import '../styles/style.scss';

export default function LeczeniePage() {

  const [readMoreOn, setReadMoreOn]= useState(true);

  const content = `Najczęstszym problemem niezależnym od wieku pacjenta, nieuświadamianym przez pacjentów jest zespół TMJ czyli TMD to znaczy zespół stawu skroniowo – żuchwowego. Zaburzenia czynności stawu skroniowo-żuchwowego wywołują skutki odległe od miejsca przyczyny jak bóle głowy (92% bóli głowy leczone jako migreny), bóle uszu, karku, pleców, ramion, zawroty głowy, omdlenia, bóle oczu, szumy i odgłosy w uszach, klikania w stawach, zablokowanie szczęk. Do objawów należą też bóle kręgosłupa, lumbago i bóle stawu biodrowego, kolan i stawu skokowego! `;
  
  return(<ServicePageLayout>
            <StaticImage src="../images/services/bol-glowy.jpg"
                            alt="ból głowy"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
      <div className='custom-container service-container'>
            <StaticImage src="../images/services/bol-glowy.jpg"
                              alt="leczenie bólu głowy"
                              quality="100"
                              placeholder="blurred"
                              className='d-block w-100 services-img'
              />
                <h4 className='service-title'>USŁUGI</h4>
                <h2>Leczenie bólu głowy</h2>

                <span className={readMoreOn ? 'service-paragraph shorter' : 'service paragraph'}>
                  Potoczne pojęcie " ból głowy" nie jest pojęciem precyzyjnym ponieważ nie ma czegoś takiego jak ból głowy, mogą boleć różne okolice głowy , różne tkanki np.  najczęściej bolą mięśnie czaszki,  jednak pojęcie "bólu głowy" jest  pojęciem  ogólnie zrozumiałym i dlatego  w tekście nim się posługujemy.
                  <br/><br/>{content}
                  {!readMoreOn && <>
                  Zaburzenia zespołu TMJ nie są pierwotne lecz wtórne. Czyli zaburzenia stawu skroniowo-żuchwowego są wtórne do zaburzeń czaszkowych i zgryzowych. Dlatego z reguły należy najpierw przeleczyć zaburzenia kośca czaszkowego, następnie przeleczyć zgryz aby uzyskać prawidłową czynność stawu skroniowo-żuchwowego i tym samym wycofać objawy zespołu TMJ czyli TMD – Temporo-Mandibular Disorders. Są to objawy latami leczone nieskutecznie przez lekarzy różnych specjalności. Diagnoza tych przypadków jest dość prosta, leczenie często łatwe już nie jest. Leczenie obejmuje najpierw diagnostykę i pierwszą pomoc przy użyciu szyny diagnostycznej, dekompresyjnej lub innej w zależności od potrzeby. Czasem wystarczą odpowiednio ulokowane nakłady na zębach jeśli to jest jeszcze możliwe. Następnie zależnie od wieku i stanu uzębienia postępowanie ortodontyczne, protetyczne lub chirodontyczne w celu uzyskania właściwej funkcji stawu skroniowo-żuchwowego. Przy diagnozowaniu bólu w tym bólu głowy istotne jest wykluczenie innych rzadkich przyczyn jak guzy, tętniaki czy choroby układowe – czyli wskazana jest konsultacja neurologiczna i wykonanie rezonansu magnetycznego czy tomografii komputerowej. Przyczyną bólu może być też niedotlenienie związane z upośledzeniem drożności górnej części toru oddechowego w części czaszkowo- szyjnej. Powstaje wtedy tzw. choroba obturacyjna bardzo często mylona z astmą i leczona jak astma. Problem polega na tym, że w przypadku zmniejszenia światła górnego toru oddechowego zwiększa się opór przepływu powietrza, który muszą pokonać płuca. W związku z tym powstaje nadmierne podciśnienie w płucach – szerzej w klatce piersiowej. Cierpią nie tylko płuca ale i żołądek – pojawia się refluks. Rozwiązaniem jest zmniejszenie oporu przepływu powietrza w górnym torze oddechowym przez jego powiększenie. Zadanie to może wykonać tylko stomatolog. Jeszcze inną przyczyną bólu głowy i nie tylko –  jest powszechna obecnie insulinooporność oraz nietolerancja pokarmowa – wymaga to właściwych badań laboratoryjnych i zaangażowania odpowiedniego specjalisty. Tu pojawia się też konieczność holistycznego czyli całościowego spojrzenia na pacjenta.
                    <br/><br/>Aby zrozumieć istotę problemu – parę słów o stawie skroniowo – żuchwowym:<br/>
                  Staw ten łączy żuchwę z czaszką. Kłykieć żuchwy pełni rolę kuli obracającej się w dole kości skroniowej czyli w czaszce. Dół ten pełni rolę panewki. Między kulą a dołem jest chrząstka śródstawowa, która pełni rolę amortyzatora i umożliwia gładką współpracę powierzchni stawu. Całość jest stabilizowana mięśniami i więzadłami, które powinny być równo napięte. Tkanki dookoła stawu należą do najlepiej unerwionych i unaczynionych w organizmie i zawierają ogromną ilość proprioreceptorów odpowiedzialnych za równowagę ciała. Jakiekolwiek zaburzenie w stawie przemieszczające kłykieć względem dołu powoduje niesymetryczną reakcję mięśni co generuje ich przykurcze, nawet w rejonach odległych od stawu. Te przykurcze są odpowiedzialne za ból. Dodatkowo, jeżeli kłykieć przemieszcza się w kierunku przewodu słuchowego generuje silne bóle uszu i zaburzenia słuchu. Nierówne napięcie mięśni jest przyczyną ucieczki chrząstki śródstawowej spomiędzy powierzchni stawowych co w skrajnych przypadkach prowadzi do ich zniszczenia i w konsekwencji ankylozy czyli unieruchomienia stawu.
                  <br/><br/>Na nieprawidłową pozycję SSŻ mają wpływ: wady zgryzu, uzupełnienia protetyczne, wady postawy,dystorsje czaszkowe, urazy. Normalnie, przy maksymalnym rozwarciu szczęk pacjent powinien zmieścić trzy palce pomiędzy nimi. Kiedy żuchwa jest cofnięta, chrząstka śródstawowa ucieka do przodu przez co ogranicza się otwarcie szczęk i pacjent z trudem wkłada dwa palce pomiędzy nie. Niesynchroniczna praca kłykcia i chrząstki odpowiada za odgłosy klikania w stawie. Nieleczone zaburzenie pogłębia się z czasem.
                  <br/><br/>Powszechne objawy to:
                  <ul>
                    <li>Zaciskanie i zgrzytanie zębami czyli bruksizm – przeciąża chrząstkę śródstawową, zmęczone mięśnie powodują ból głowy, szyi, twarzy, ramion i pleców.</li>
                    <li>Bóle głowy są tak silne, że mylone są z migrenami. Ból stawopochodny jest symetryczny i zaczyna się na ogół od skroni promieniując aż do ramion. Bóle migrenowe są niesymetryczne i połączone ze światłowstrętem – przy podejrzeniu migreny skieruj się do neurologa, w przeciwnym razie do przeszkolonego stomatologa. Często jednak przyczyną takiego bólu jest dystorsja czaszkowa – rozwiązanie tego problemu należy do stomatologa.</li>
                  </ul>
                  <br/>Odgłosy klikania, strzelania czy pocierania świadczą o nieprawidłowej pracy stawu. Celem leczenia jest zsynchronizowanie pracy stawu i zapobieżenie odgłosom trzeszczenia świadczących o postępującym zniszczeniu powierzchni stawowych poprzez bezpośrednie tarcie powierzchni kostnych. Ból uszu, dzwonienie, buczenie w uszach, uczucie wypełnienia ucha, stępienia słuchu, zawroty głowy i zaburzenia równowagi przebiegające bez infekcji, z którymi nie radzi sobie ani laryngolog ani internista powinny skierować pacjenta do przeszkolonego stomatologa. Zaburzenia snu są powszechnym problemem. Mózg atakowany nieprawidłowymi sygnałami z proprioreceptorów stawu nie pozwala na wejście w głęboką fazę snu i pacjent często się budzi. Wstaje zmęczony i bez energii do życia. Pojawiają się wtedy objawy wyczerpania nadnerczowego związane z zaburzeniem poziomu kortyzolu a w następstwie nawet zaburzenia układu hormonalnego.
                  <br/>Również niestety depresja jest powszechnym objawem u pacjentów z długo trwającym zespołem TMJ. Przyczyną jest chroniczny ból uświadomiony lub nie, powodujący wyczerpanie nadnerczowe i spadek poziomu kortyzolu. Przyczyną może być też guz mózgu, choroby układowe, urazy, alergie, których wspólnym mianownikiem jest ból. Wymaga to interwencji lekarza ogólnego. Jeśli staw skroniowo-żuchwowy – stomatologa.
                </>}
                  </span>
                <a className="service-pragraph__link" onClick={()=>{setReadMoreOn(!readMoreOn)}}>{readMoreOn ? " czytaj dalej" : " zwiń tekst"}</a>
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