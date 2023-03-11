import React from "react";
import ServicePageLayout from "../components/servicePageLayout";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import '../styles/style.scss';

export default function WybielaniePage() {
  const [readMoreOn, setReadMoreOn] = useState(true);

  const content = `Przed zabiegiem wybielania przeprowadzany jest wywiad w celu rozpoznania co stanowi przyczynę przebarwień zębów. Może być to naturalnie ciemny 
  kolor zębów lub mieć związek z przebytymi chorobami. Ważne jest również poznanie nawyków pacjenta to jest palenie tytoniu, picie dużej ilości kawy, 
  herbaty lub kolorowych napoi, gdyż ma to wpływ na efekt i trwałość wybielania. Zęby pokryte osadami lub kamieniem nazębnym muszą być wcześniej oczyszczone.`;

  return (
    <ServicePageLayout>
        <StaticImage src="../images/services/wybielanie.jpg"
                            alt="aparat ortodontyczny"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
      <div className='custom-container service-container'>
      <StaticImage
        
        src="../images/services/wybielanie.jpg"
        alt="wybielanie zębów"
        quality="100"
        placeholder="blurred"
        className="d-block w-100 services-img"
      />
      <h4 className="service-title">USŁUGI</h4>
      <h2>Wybielanie zębów</h2>
      <span className="service paragraph">
        {content}
        <br />
        Zabieg wybielania nie powinien być przeprowadzany w przypadku:
        <ul>
          <li>nieskończonego leczenia kanałowego</li>
          <li>mocno popękanego szkliwa,</li>
          <li>u osób poniżej 16 r.ż</li>
          <li>kobiet w ciąży lub karmiących</li>
          <li>schorzeń periodontologicznych</li>
          <li>hipoplazji szkliwa</li>
        </ul>
        {!readMoreOn && 
        <>
          Procedura wybielania wygląda następująco: zabieg wykonywany jest przy
          użyciu żelu wybielającego aktywowanego lampa Bayond. Jest to bezpieczny
          i skuteczny sposób wybielania. Cały zabieg zajmuje około 60 minut.
          <ol>
            <li>Lekarz określa kolor wyjściowy zębów.</li>
            <li>Zabezpiecza dziąsła, wargi oraz policzki</li>
            <li>
              Na zęby nakładany jest żel wybielający i aktywowany światłem. Cykl
              powtarzany jest trzykrotnie.
            </li>
          </ol>
          Efekt wybielania widoczny jest od razu po zabiegu. Przez 48 godzin po
          zabiegu bezwzględnie wskazana jest tzw. „biała dieta". Nie wolno
          spożywać takich produktów jak: kawa, herbata, sok z czarnej porzeczki,
          czerwone wino, buraki. Należy w tym czasie również zrezygnować z
          palenia. Jest to okres w którym kolor ulega stabilizacji. Niestosowanie
          się do zaleceń może wpłynąć na znaczne zmniejszenie efektu wybielania.
          <br />
          Wybieleniu nie podlegają wypełnienia, korony oraz mosty. Jeżeli znajdują
          się one w odcinku przednim może zaistnieć konieczność ich wymiany.
          Zazwyczaj wykonuje się to po tygodniu od zabiegu wybielania. Jeżeli
          planowane są uzupełnienia protetyczne (korony, mosty lub implant) zęby
          powinny być najpierw wybielone, aby dobrać odpowiedni ich kolor. W
          zależności od nawyków pacjenta efekt wybielania utrzymuje się od kilku
          miesięcy do kilku lat. W celu podtrzymania efektu można stosować
          specjalną pastę Beyond. <br />
          Niekiedy przebarwieniu ulegają zęby po leczeniu endodontycznym,
          przybierają barwę szarą lub lekko czerwoną. Pojedynczy ząb można
          wybielić przy użyciu lampy Beyond lub poprzez zastosowanie specjalnej
          wkładki wybielającej wkładanej do środka zęba co często daje dobre
          efekty. Czasem proces wybielania zajmuje kilka wizyt.
        </>}
      </span>
      <a
        className="service-pragraph__link"
        onClick={() => {
          setReadMoreOn(!readMoreOn);
        }}
      >
        {readMoreOn ? " czytaj dalej" : " zwiń tekst"}
      </a>
      <AnchorLink
        to="/#kontakt"
        title="Kontakt"
        activeClassName="active"
        className="service-link"
        //stripHash
      />
      </div>
    </ServicePageLayout>
  );
}
