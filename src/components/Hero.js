import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from "./Navbar";
import { Link } from 'gatsby';

export default function Hero() {
    // PREPARE FOR OPTIMAL VIDEO AUTOPLAY
    
  return (
    <section className='hero'>
            <Navbar/>
            <Carousel
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            //autoPlay={true}
            animationHandler="fade"
            >
                <div className='carousel-item'>
                    <StaticImage
                    src="../images/hero.png"
                    style={{height: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    
                    />
                    <div className='custom-container'>
                        <div className='slider-sticker'>
                            <p>Wizyta profilaktyczna 2x w roku
                                <br/><span>może ochronić przed 97% chorób zębów</span>
                            </p>
                            <Link to="/usługi/stomatologia-zachowawcza">stomatologia zachowawcza</Link>
                        </div>    
                    </div> 
                </div>
                <div className='carousel-item'>
                    <StaticImage 
                    src="../images/hero.png"
                    style={{height: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    
                    />
                </div>
                <div className='carousel-item'>
                    <StaticImage 
                    src="../images/hero.png"
                    style={{height: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    />
                </div>
            </Carousel>
    </section>
  )
}
