import React from 'react'
import ServicePageLayout from '../components/servicePageLayout';
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/style.scss';
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export default function StomatologiaPage() {

  const content =`Stomatologia zachowawcza z endodoncją – jest to dział stomatologii poświęcony profilaktyce próchnicy zębów oraz leczeniu już powstałych ubytków próchniczych.
  Bardzo obszerną część tej specjalności stanowi endodoncja, czyli dyscyplina specjalizująca się w leczeniu kanałowym zębów.
  Stomatogia zachowawcza to dział stomatologii zajmujący się leczeniem uzębienia czyli jego ratowaniem przed utratą (dlatego nazywa się „zachowawcza’’). Popularnie sprowadza się to do określenia „plombowanie zębów”. Współcześnie materiały stosowane w stomatologii daja duże możliwości naprawcze. Można wypełniać ubytki próchnicowe po ich opracowaniu materiałami kosmetycznymi odtwarzając kolor i kształt zęba. W przypadku złamania zęba nie zawsze trzeba uciekać się do metod protetycznych jak w przeszłości - obecne materiały umożliwią bezpośrednia odbudowę jeśli warunki na to pozwolą. Stoamatologia zachowawcza to też leczenie endodontyczne zębów - czyli opracowanie i wypełnienie kanałów korzeni zębów, w których doszło d zapaleń miazgi lub zgorzeli miazgi. Do leczenia endodontycznego przydatne jest wykonanie zdjęcia rentgenowskiego. Leczenie zachowawcze jest możliwe w znieczuleniu.
  Dostępne:
  znieczulenie okołozębowe
  znieczulenie bezigłowe (środek znieczulający jest deponowany w tkance specjalnym przyrządem bez użycia igły
  wypełnienia kompozytowe światłoutwardzalne i światłoutwardzalne wielowarstwowe (kosmetyczne) typu Vanini
  wykonanie zdjęcia radiowizjograficznego zęba
  leczenie powikłań próchnicy
  leczenie endodontyczne, czyli z opracowaniem kanału (kanałów) korzeniowego wg różnych technik zależnie od przypadku – w tym opracowanie ultradźwiękowe.`
  
  return (
    <ServicePageLayout>
              <StaticImage src="../images/services/zachowawcza.jpg"
                            alt="aparat ortodontyczny"
                            quality="100"
                            placeholder="blurred"
                            className='d-block w-100'
                            style={{width: `100%`, maxHeight: `930px`}}
        />
      <div className='custom-container service-container'>
                  <StaticImage src="../images/services/zachowawcza.jpg"
                                alt="leczenie bólu głowy"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100 services-img'
                  />
                  <h4 className='service-title'>USŁUGI</h4>
                  <h2>Stomatologia zachowawcza</h2>
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
