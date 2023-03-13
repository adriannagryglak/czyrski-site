import React from 'react'
import NavBar from '../components/Navbar';
import Topper from '../components/Topper';
import Footer from '../components/Footer';
import Statue from '../components/Statue';
import PageHeader from '../components/PageHeader';
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo';
import '../styles/style.scss';

export default function About() {
  return (
    <div>
      <Seo/>
      <Topper/>
      <NavBar/>
      <PageHeader location="O gabinecie"/>
      <section className='about-container'>
        <div className='about-item'>
          <div className='about-item__l'>
            <StaticImage
                src="../images/about/gabinet1.jpg"
                alt="doktor Czyrski w gabinecie"
                quality="100"
                placeholder="blurred"
                className='d-block w-100'
                style={{height: `100%`, width: `100%`}}
              />
          </div>
          <div className='about-item__r light-blue'>
            <h4 className='about-title'>szanowni Państwo</h4>
            <h2 className='about-title__welcome'>Zapraszam do mojego gabinetu</h2>
            <p className='about-paragraph'>Jestem absolwentem Akademii Medycznej we Wrocławiu (1984). Gabinet prowadzę od 1986 roku. Posiadam też specjalizację z chirurgii stomatologicznej. Doświadczenie lat pracy w zawodzie oraz pobyt szkoleniowy w USA w 2001 roku nauczyły mnie, że lekarz stomatolog musi widzieć cały układ stomatognatyczny pacjenta, czyli, upraszczając układ posturalno- czaszkowo – zębowy, w którym uzębienie jest fragmentem znacznie większej całości. W 2016 r obroniłem doktorat na Uniwersytecie Medycznym we Wrocławiu pt.: Ocena związku stabilności postawy ciała z wybranymi parametrami układu „szyjno-czaszkowego”. Lekarz stomatolog lecząc uzębienie musi przewidywać przyszłe ewentualne leczenie protetyczne, lecząc protetyczne musi wprowadzać elementy postępowania ortodontycznego, lecząc ortodontycznie musi myśleć o leczeniu zachowawczym czy protetycznym. Stomatolog może też prawidłowym postępowaniem multidyscyplinarnym skorygować rysy twarzy w obrębie układu stomatologicznego, uzyskując „efekt chirurgii kosmetycznej. Innymi słowy, musi umieć wdrożyć wszystkie dyscypliny stomatologicznej naraz, w jednym przypadku, a także może poprosić o współpracę lekarzy innych specjalności, np. laryngologa czy ortopedę lub fizjoterapeutę a także dietetyka klinicznego.</p>
          </div>
        </div>
        <div className='about-item'>
          <div className='about-item__l'>
            <p className='about-paragraph'>Współcześnie zaczynają być widoczne wyraźnie dwa trendy w medycynie. Pierwszy, o dwudziestowiecznym rodowodzie polega na wyodrębnianiu coraz węższych specjalizacji medycznych, w których pacjent staje się przedmiotem leczenia, a lekarz zajmuje sie małym fragmentem osoby pacjenta ( w sensie fizycznym i mentalnym) nie dostrzegając i nie interesując się całą osobą pacjenta - często w ten sposób nie dostrzega związku przyczynowo- skutkowego między stanem pacjenta a jego chorobą zadowalając się leczeniem objawu. W ten sposób udaje się "zaleczyć" fragmenty ciała pacjenta ale całego pacjenta już nie. I to jest przekleństwo współczesnej medycyny. Nie mówimy tu o medycynie interwencyjnej stanów nagłych - na przykład po urazach czy wypadkach bo postęp w tej dziedzinie jest imponujący. Niestety, takie podejście rzadko prowadzi do rzeczywistego dobrostanu pacjenta. Najczęściej kończy się przymusem ciągłej farmakoterapii.</p>
          </div>
          <div className='about-item__r light-blue'>
            <StaticImage
                  src="../images/about/gabinet2.jpg"
                  alt="doktor Czyrski jako absolwent uczelni"
                  quality="100"
                  placeholder="blurred"
                  className='d-block w-100'
                  style={{height: `100%`, width: `100%`}}
              />
          </div>
        </div>
        <div className='about-item'>
          <div className='about-item__l'>
          <StaticImage
                  src="../images/about/gabinet3.jpg"
                  alt="doktor Czyrski w gabinecie"
                  quality="100"
                  placeholder="blurred"
                  className='d-block w-100'
                  style={{height: `100%`, width: `100%`}}
              />
          </div>
          <div className='about-item__r light-blue'>
            <p className='about-paragraph '>Drugi trend to powrót do postrzegania pacjenta jako całości. Tak jak to robili lekarze starożytni, z których wiedzy i dorobku korzystamy wbrew pozorom do dziś i tak jak jeszcze praktykowano niedawno z całkiem dobrym rezultatem przy uwzględnieniu ówczesnych możliwości technologicznych. Takie podejście zwane holistycznym uwzględnia różne aspekty funkcjonowania ludzkiego ciała uwzględniając zarówno czynniki biologiczne, biochemiczne jak i mechaniczne, których nieprawidłowości i zaburzenia wzajemnych relacji prowadzą do choroby. W podejściu holistycznym również dieta pacjenta a więc czynnik biochemiczny ma olbrzymie znaczenie. Zła dieta zawsze prowadzi do choroby ( a mogą to być schorzenia bardzo różne - w tym serca, nerek , przewodu pokarmowego , skóry , błon śluzowych etc.) i to twierdzenie już nie daje się obalić - jest na to zbyt wiele dowodów w piśmiennictwie. Współczesna "cywilizowana" dieta ma mało wspólnego z tym co człowiek powinien jeść i co może strawić przy użyciu swojego aparatu enzymatycznego. Jest natomiast bardzo wygodna dla przemysłu spożywczego i pośrednio dla farmaceutycznego.</p>
          </div>
        </div>
        <div className='about-item'>
          <div className='about-item__l'>
            <p className='about-paragraph'>W swojej praktyce często widzę u pacjentów objawy związane z nietolerancją pokarmową. Bardzo często schorzenia jamy ustnej manifestujące się na/w śluzówkach jamy ustnej oraz na języku i szerzej w stawach skroniowo-żuchwowych oraz wadzie zgryzu mają związek z dietą pacjenta. Posiadając wiedzę na ten temat muszę skorzystać z pomocy dietetyków klinicznych. Dietetyk kliniczny ma narzędzia i wiedzę aby móc diagnozować potrzeby żywieniowe pacjentów oraz eliminować te składniki diety, które ewidentnie szkodzą pacjentowi oraz wskazać, które produkty powinien lub musi spożywać. Słowem jest to wiedza umożliwiająca zaprogramowanie dobrego i smacznego odżywiania się . Dieta kliniczna nie oznacza przy tym wyrzeczeń i udręk na jakie skazują "cud-diety" na odchudzanie. Dietetyk kliniczny posługując się różnymi narzędziami - w tym badaniami laboratoryjnymi może doprowadzić do stanu, w którym istniejąca farmakoterapia pacjenta zostanie zredukowana do absolutnego minimum a nawet stanie sie zbędna. Zaś praca lekarza zostanie skutecznie wsparta a pacjent naprawdę poczuje sie lepiej a nie tylko wyleczony.
              <br/><br/>To jest właśnie moja propozycja – kompleksowe, wielodyscyplinarne podejście do leczenia stomatologicznego.
              <br/><span>Piotr Czyrski</span></p>
          </div>
          <div className='about-item__r'>
            <StaticImage
                          src="../images/about/gabinet4.jpg"
                          alt="Piotr Czyrski"
                          quality="100"
                          placeholder="blurred"
                          className='d-block w-100'
                          style={{height: `100%`}}
            />
          </div>
        </div>
      </section>
      <Statue/>
      <Footer/>
    </div>
  )
}
