import React from "react";
import ServicePageLayout from "../components/servicePageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import '../styles/style.scss';

export default function ParodontologiaPage() {

  const [readMoreOn, setReadMoreOn] = useState(true);

  const content = `Wszystkie choroby przyzębia określane skrótowo w mowie potocznej parodontozą mają dość konkretną wspólną przyczynę jaką jest 
  niewydolność przyzębia wywołaną czynnikiem mechanicznym czyli zaburzeniem zgryzu, dystorsją czaszkową oraz parafunkcją. 
  Możliwy jest też niedobór pokarmowy np. awitaminoza, często powiązany z niewydolnym przewodem pokarmowym i nietolerancją 
  pokarmową. Także choroba autoimmunizacyjna, o której pacjent najczęściej nie wie jest możliwą przyczyną schorzenia przyzębia. 
  Czynnik mechaniczny powoduje przeciążenie przyzębia co ogranicza przepływ krwi a w konsekwencji prowadzi do niedotlenienia 
  tkanek podtrzymujących aparat zębowy i następowo ubytek masy kostnej wyrostków zębodołowych oraz osłabienie ozębnej czyli 
  włókien utrzymujących zęby w zębodołach.`;

  return (
    <ServicePageLayout>
        <StaticImage src="../images/services/higiena.jpg"
                            alt="parodontologia"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
        <div className='custom-container service-container'>
      <StaticImage
        src="../images/services/higiena.jpg"
        alt="parodontologia"
        quality="100"
        placeholder="blurred"
        className="d-block w-100 services-img"
      />
      <h4 className="service-title">USŁUGI</h4>
      <h2>Parodontologia</h2>
      <span className="service paragraph">
        Choroby przyzębia stanowią poważny problem gdyż prowadzą do utraty uzębienia, często zupełnie zdrowych zębów bez śladu próchnicy. Istnieje medyczna klasyfikacja i nazewnictwo chorób przyzębia określanych skrótowo i potocznie parodontozą, jak również od czasu do czasu producenci ogłaszają „cudowne leki” na parodontozę.
        <br/><br/>
        {content}
        {!readMoreOn && <>
            Nakłada się na to zaburzenie pH w kierunku kwaśnym płynu pozakomórkowego ustroju - 
            powszechne w obecnym społeczeństwie, co powoduje uruchomienie układu buforowego opartego na wodorowęglanie wapna czyli jonach 
            Ca++ i (HCO3)- [istnieje więcej mechanizmów buforowych - nie tylko wapniowy]. Wapń jest pobierany do tego celu z kości 
            szkieletu. Jon wodorowęglanowy jest eliminowany przez nerki a wapń odkładany w postaci depozytu jako kamień - w tym nazębny. 
            Czyli wapń w kamieniu nazębnym pochodzi z kości! Odłożony kamień nazębny dodatkowo uszkadza tkanki przyzębia. Dlatego w leczeniu
            przyzębia najważniejsze są dwa kierunki postępowania - mechaniczny czyli eliminacja przeciążenia tkanek (szyny, leczenie zgryzu
            , protetyczne uzupełnienia, eliminacja dystorsji czaszkowych, usunięcie kamienia nazębnego) oraz profilaktyka aby nie tworzył
            się kamień nazębny. Również postępowanie lecznicze w obszarze przewodu pokarmowego i w celu wyrównania niedoborów pokarmowych
            może być wymagane - dieta kliniczna! 
            <br/><br/>
            NIE MA LEKU JAKO TAKIEGO NA PARODONTOZĘ!   SĄ TYLKO PREPARATY WSPOMAGAJĄCE WŁAŚCIWE LECZENIE I POSTĘPOWANIE! ISTNIEJĄ CHOROBY PRZYZĘBIA BĘDĄCE POWAŻNYM SYGNAŁEM INNEJ CHOROBY UKŁADOWEJ JAK BIAŁACZKI, LUB ZATRUCIA NP. METALAMI. DLATEGO BADANIE KRWI JEST WAŻNYM ELEMENTEM DIAGNOSTYCZNYM.
            <br/><br/>
            Komfort pacjenta zapewniamy dzięki usuwaniu kamienia nazębnego systemem Vector ® Paro i Vector ® Scaler produkcji niemieckiej firmy Duerr Dental.
            <br/>W porównaniu do tradycyjnego ultradźwiękowego usuwania kamienia nazębnego, usuwanie kamienia nazębnego systemem Vector ® Paro i Vector ® Scaler, jest praktycznie bezbolesne. Jest to zapewniane natryskiem zawiesiny hydroksyapatytu na powierzchnię zęba w trakcie pracy końcówki, co redukuje wrażliwość tych powierzchni na ból wywołany działaniem końcówki, dodatkowo jest to minerał, z którego są naturalnie zbudowane twarde tkanki zęba, przez co wygładza sie też powierzchnia zęba i korzeni. Te cechy powodują, że nie ma istotnej  potrzeby znieczulania pacjentów wrażliwych przed zabiegiem usuwania kamienia nazębnego..
            <br/>  Vector ® Scaler umożliwia usuwanie kamienia nazębnego z widocznych powierzchni zębów.   Vector ® Paro  umożliwia usuwanie kamienia nazębnego z powierzchni korzeni zębów aż do dna kieszonki zębowej, wygładzając jednocześnie powierzchnie korzeni.  Vector ® Paro  dzięki swoim cechom bardzo często umożliwia uniknięcie nieprzyjemnego zabiegu kiretażu poddziąsłowego otwartego - zabiegu polegającego na chirurgicznym utworzeniu płata dziąsłowego i odsłonięciu korzeni zębów w znieczuleniu, oczyszczenia z kamienia a następnie ponowne zasłonięcie korzeni płatem dziąsłowym przy pomocy szwów chirurgicznych
            <br/>Polecam obejrzenie możliwości systemu Vector ® Paro i Vector ® Scaler przedstawionych na oryginalnym materiale producenta urządzenia:
            <a href="https://www.youtube.com/watch?v=lty3Kv6MdLg">link do filmu- od 11 minuty</a>
            <a href="https://www.duerrdental.com/de/DE/produkte/zahnerhaltung/geraete/vector-system/">link do informacji producenta</a>
            <br/>W naszym gabinecie dostępna jest pełna wersja systemu  Vector ® Paro i Vector ® Scaler. Proponujemy Państwu leczenie chorób przyzębia, ultradźwiękowe usuwanie kamienia nazębnego - higienizacja jamy ustnej, usuwanie osadów nazębowych i smolistych nalotów u palaczy specjalnym urządzeniem wodno – ciśnieniowym oraz wybielanie zębów przy użyciu lampy do wybielania systemu Beyond (więcej informacji na www.beyondpolska.com.pl)
        </>}

        </span>
      <a className="service-pragraph__link"
        onClick={() => {
          setReadMoreOn(!readMoreOn);
        }}>{readMoreOn ? " czytaj dalej" : " zwiń tekst"}</a>
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
