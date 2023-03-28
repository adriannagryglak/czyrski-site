import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';

export default function Services(props) {

  return (
    <section id='uslugi' className='services custom-container'>
        <h4 className='services-title'>usługi</h4>
        <h2 className='services-title__welcome'>Zakres usług gabinetu</h2>
        <div className='services-container' >
             <div className='services-item' >
                <Link to="/leczenie-bolu-glowy">
                    <StaticImage
                                src="../images/services/bol-glowy.jpg"
                                alt="leczenie bólu głowy"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Leczenie bólu głowy</h6>
                </Link>
            </div>
            <div className='services-item'>
                <Link to="/ortodoncja">
                    <StaticImage
                                src="../images/services/ortodoncja.jpg"
                                alt="ortodoncja"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Ortodoncja</h6>
                </Link>
            </div>
            <div className='services-item'>
                <Link to="/stomatologia-zachowawcza">
                    <StaticImage
                                src="../images/services/zachowawcza.jpg"
                                alt="stomatologia zachowawcza"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Stomatologia zachowawcza</h6>
                </Link>
            </div>
            <div className='services-item'>
                <Link to='/profilaktyka-wczesne-leczenie'>
                    <StaticImage
                                src="../images/services/wczesne-leczenie.jpg"
                                alt="profilaktyka i wczesne leczenie"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Profilaktyka <br/>Wczesne leczenie</h6>
                </Link>
            </div>
            <div className='services-item'>
                <Link to='/parodontologia-higiena-jamy-ustnej'>
                    <StaticImage
                                src="../images/services/higiena.jpg"
                                alt="parodontologia i higiena jamy ustnej"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Parodontologia <br/>Higiena jamy ustnej</h6>
                </Link>
            </div>
            <div className='services-item'>
                <Link to='/wybielanie-zebow'>
                    <StaticImage
                                src="../images/services/wybielanie.jpg"
                                alt="wybielanie zębów"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Wybielanie zębów</h6>
                </Link>
            </div>
            <div className='services-item'>
                <Link to='/chirurgia-stomatologiczna'>
                    <StaticImage
                                src="../images/services/chirurgia.jpg"
                                alt="chirurgia stomatologiczna"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Chirurgia stomatologiczna</h6>
                </Link> 
            </div>
            <div className='services-item'>
                <Link to='/protetyka'>
                    <StaticImage
                                src="../images/services/prototyka.jpg"
                                alt="protetyka"
                                quality="100"
                                placeholder="blurred"
                                className='d-block w-100'
                    />
                    <h6>Protetyka</h6>
                </Link>
            </div>
        </div>
    </section>
  )
}