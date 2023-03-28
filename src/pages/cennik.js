import React from "react";
import NavBar from "../components/Navbar";
import Topper from "../components/Topper";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import '../styles/style.scss';

export default function Prices() {
  const data = [
    {
      title: "Leczenie zachowawcze",
      items: [
        {
          title:
            "Badanie stomatologiczne – przegląd , konsultacja, dodatkowe zabiegi diagnostyczne np. załozenie padów itp, etc,wystawienie opinii, zaświadczenia itp.	",
          price: "od 250 zł",
        },
        { title: "Wypełnienie kosmetyczne", price: "300 zł" },
        {
          title: "Licowanie lub odbudowa korony zęba kompozytem",
          price: "od 300 zł",
        },
        { title: "Opatrunek tymczasowy", price: "od 150 zł" },
        { title: "Szynowanie zębów z ligaturą metalową", price: "od 200 zł" },
        { title: "Leczenie nadwrażliwości zębów", price: "od 150 zł" },
        {
          title:
            "RTG zęba / PA czaszki , telertg, panoramiczne, stawy skroniowo-żuchwowe, zatoki szczękowe44",
          price: "50zł /100zł",
        },
        { title: "Znieczulenie standard", price: "50 zł" },
        { title: "Znieczulenie WAND", price: "100 zł" },
      ],
    },
    {
      title: "Leczenie endodontyczne (kanałowe)",
      items: [
        { title: "Pierwsza wizyta", price: "od 200 zł" },
        {
          title: "Leczenie endodontyczne - wypełnienie 1 kanału",
          price: "od 200 zł",
        },
        {
          title: "Leczenie endodontyczne - wypełnienie 2 i więcej kanałów",
          price: "od 300 zł",
        },
        { title: "Usunięcie złamanego narzędzia z kanału", price: "od 250 zł" },
        {
          title: "Opatrunek leczniczy w trakcie leczenia kanałowego",
          price: "od 200 zł",
        },
      ],
    },
    {
      title: "Leczenie periodontologiczne i profilaktyka",
      items: [
        {
          title:
            "Usunięcia kamienia nazębnego i higiena jamy ustnej (polerowanie i piaskowanie)",
          price: "od 250 zł",
        },
        {
          title: "Scaling periodontologiczny system VECTOR",
          price: "od 800 zł",
        },
      ],
    },
    {
      title: "Stomatologia dziecięca",
      items: [
        { title: "Wypełnienie w zębie mlecznym", price: "od 200 zł" },
        { title: "Wypełnienie po leczeniu amputacyjnym", price: "od 250 zł" },
        { title: "Usunięcie zęba mlecznego", price: "od 200 zł" },
        { title: "Lakowanie (1 ząb)", price: "60 zł" },
      ],
    },
    {
      title: "Wybielanie",
      items: [
        { title: "Wybielanie przy użyciu lampy Beyond", price: "od 1100 zł" },
        { title: "Szyna do wybielania", price: "700 zł" },
        {
          title:
            "Wybielanie pojedynczych zębów przy użyciu wkładki dozębowej pod wypełnieniem czasowym",
          price: "od 250 zł pierwsza wizyta następne 150 zł / jedna wizyta",
        },
      ],
    },
    {
      title: "Leczenie chirurgiczne",
      items: [
        { title: "Usunięcie zęba", price: "od 350 zł" },
        {
          title: "Usunięcie chirurgiczne zęba oraz ósemki dolnej,",
          price: "od 500zł",
        },
        { title: "Usunięcie kapturka dziąsłowego", price: "od 250zł" },
        { title: "Nacięcie ropnia", price: "od 200zł" },
        {
          title:
            "Resekcja wierzchołka korzenia (cena nie obejmuje ewentualnego materiału augmentacyjnego i błony kolagenowej - cena tych materiałów jest indywidualna)",
          price: "1000zł",
        },
        { title: "Podcięcie wędzidełka bez plastyki", price: "od 250zł" },
      ],
    },
    {
      title: "Leczenie protetyczne",
      items: [
        {
          title: "Przygotowanie planu leczenia na modelach orientacyjnych",
          price: "350 zł",
        },
        { title: "Ponowne cementowanie korony", price: "250 zł" },
        { title: "Korona tymczasowa - gabinet", price: "od 200 zł" },
        { title: "Korona tymczasowa - pracownia", price: "od 350 zł" },
        { title: "Korona lana metalowa", price: "600 zł" },
        { title: "Korona porcelanowa na metalu", price: "od 1300 zł" },
        {
          title: "Korona porcelanowa na tlenku cyrkonu (wysokoestetyczna)",
          price: "od 2000 zł",
        },
        { title: "Korona pełnoceramiczna", price: "od 1500 zł" },
        {
          title:
            "Korona teleskopowa( komplet wewnętrzna i zewnętrzna konstrukcja)",
          price: "od 2000 zł",
        },
        { title: "Zatrzask do korony", price: "od 500 zł" },
        { title: "Wymiana matrycy", price: "od 100 zł" },
        { title: "Licówka kompozytowa", price: "900 zł" },
        { title: "Licówka ceramiczna", price: "od 1200 zł" },
        { title: "Inlay/onlay ceramiczny", price: "od 1000 zł" },
        { title: "Inlay/onlay kompozytowy", price: "od 800 zł" },
        {
          title: "Wkład koronowo-korzeniowy metalowy prosty std",
          price: "od 450 zł",
        },
        {
          title: "Wkład koronowo-korzeniowy metalowy składany",
          price: "od 600 zł",
        },
        {
          title: "Wkład koronowo - korzeniowy z tlenku cyrkonu",
          price: "od 1000 zł",
        },
        {
          title: "Szyna (relaksacyjna, dekompresyjna, przeciwbruksizmowi)",
          price: "300-2200 zł zależnie od typu",
        },
        {
          title: "Proteza całkowita akrylowa/ specjalne zamówienie",
          price: "1800 zł/ od 1800 wzwyż",
        },
        {
          title: "Proteza częściowa akrylowa do 3 punktów",
          price: "od 500 zł",
        },
        {
          title: "Proteza częściowa akrylowa powyżej 3 punktów do 6 punktów",
          price: "od 900 zł",
        },
        { title: "Proteza szkieletowa", price: "od 2500 zł" },
        {
          title: "Naprawa protezy na miejscu/laboratoryjna",
          price: "od 150 zł/250 zł",
        },
        { title: "Zdjęcie starej korony", price: "200 zł" },
        { title: "Usunięcie starego wkładu metalowego", price: "od 350 zł" },
        {
          title: "Usunięcie starego wkładu z włókna szklanego",
          price: "od 250 zł",
        },
      ],
    },
    {
      title: "Leczenie stawów skroniowo - żuchwowych",
      items: [
        { title: "Wizyta", price: "od 300 zł" },
        {
          title:
            "Wykonanie płyty pomiarowej indywidualnej   plus  diagnostyka przyrządowa (pomiar przyrządowy)",
          price: "250 plus 500 zł",
        },
        {
          title: "Wykonanie szyny  - cena zależna od rodzaju",
          price: "od 300 - 2500 zł",
        },
        {
          title: "Badanie i terapia CST układu czaszkowego - wizyta",
          price: "od 300 zł",
        },
        { title: "Korekta szyny", price: "300 zł" },
      ],
    },
    {
      title: "Leczenie ortodontyczne",
      items: [
        {
          title: "Wizyta konsultacyjna (z wyciskami pod modele)",
          price: "od 300 zł",
        },
        { title: "Przygotowanie planu leczenia", price: "250 zł" },
        { title: "Wizyty kontrolne z aparatem stałym", price: "od 300 zł" },
        { title: "Wizyty kontrolne z aparatem ruchomym", price: "od 300 zł" },
        {
          title: "Aparat stały metalowy  standard (1 łuk)",
          price: "od 2300 zł",
        },
        { title: "Aparat - łuk sekcyjny std", price: "od 960 zł" },
        { title: "Aparat stały estetyczny (1 łuk)", price: "od 2500 zł" },
        { title: "Płytka nagryzowa", price: "od 500 zł" },
        {
          title:
            "Demontaż aparatu + płytka lub szyna retencyjna lub retainer stały lub ap. Hawley'a (1 łuk)",
          price: "od 1200 zł pasywny aparat od 1500 zł",
        },
        {
          title:
            "Twin Block (zależnie od konstrukcji indywidualnej) /ALF /Homeoblock",
          price: "od 2000 zł/2000 zł/2400 zł",
        },
      ],
    },
  ];

  return (
    <>
      <Seo />
      <Topper />
      <NavBar />
      <PageHeader location="Cennik" />
      <section className="prices-container custom-container">
        {data.map((category, i) => {
          return (
            <div key={i} className="prices-category">
              <h2>{category.title}</h2>
              <ul>
                {category.items.map((item) => {
                  return (
                    <li>
                      {item.title}
                      <span>{item.price}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="prices-caption">
          <p>Konto bankowe Santander 07 1090 2460 0000 0006 2201 0828 <br/>Cennik nie stanowi oferty handlowej w rozumieniu art. 66 K.C. i może ulegać zmianie.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
