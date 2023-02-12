import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Approach() {
  return (
    <section id="#approach">
        <div className='approach-container'>
            <div className='approach-item approach__photo'>
            <StaticImage
                    src="../images/approach-2.png"
                    alt="zdjecie w tle"
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    //objectFit='cover' TODO- FIX THAT
                    
            />
            </div>
            <div className='approach-item approach__text-r'>
            <h4 className='approach-title'>szanowni Państwo</h4>
                <h2 className='approach-title__welcome'>Witam na stronie mojego Gabinetu Stomatologicznego.</h2>
                <p className='approach__paragraph'>
                    Gabinet prowadzę od 1986 roku. Lata pracy nauczyły mnie, że lekarz stomatolog musi widzieć cały układ stomatogmatyczny pacjenta, czyli, upraszczając, czaszkowo – zębowy, w którym uzębienie jest fragmentem znacznie większej całości.<br/><br/>
                    A zatem lekarz stomatolog lecząc zęby musi przewidywać przyszłe ewentualne leczenie protetyczne, lecząc protetyczne musi wprowadzać elementy postępowania ortodontycznego, lecząc ortodontycznie musi myśleć o leczeniu zachowawczym czy protetycznym.
                </p>
            </div>
           
            <div className='approach-item approach__text-l'>
                <h4 className='approach-title'>szanowni Państwo</h4>
                <h2 className='approach-title__welcome'>Witam na stronie mojego Gabinetu Stomatologicznego.</h2>
                <p className='approach__paragraph'>
                    Gabinet prowadzę od 1986 roku. Lata pracy nauczyły mnie, że lekarz stomatolog musi widzieć cały układ stomatogmatyczny pacjenta, czyli, upraszczając, czaszkowo – zębowy, w którym uzębienie jest fragmentem znacznie większej całości.<br/><br/>
                    A zatem lekarz stomatolog lecząc zęby musi przewidywać przyszłe ewentualne leczenie protetyczne, lecząc protetyczne musi wprowadzać elementy postępowania ortodontycznego, lecząc ortodontycznie musi myśleć o leczeniu zachowawczym czy protetycznym.
                </p>
            </div>
            <div className='approach-item approach__photo'>
                <StaticImage
                        src="../images/approach-1.png"
                        alt="zdjecie w tle"
                        quality="100"
                        placeholder="blurred"
                        className='d-block w-100'
                    
                />
            </div>
        </div>
    </section>

  )
}
