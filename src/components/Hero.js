import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from "./Navbar";

export default function Hero() {

    // PREPARE FOR OPTIMAL VIDEO AUTOPLAY AND MOBILE 
    
  return (
    <section className='hero'>
            <Navbar/>
            <Carousel
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            // autoPlay={true}
            animationHandler="fade"
            >
                <div>
                    <StaticImage
                    src="../images/hero.png"
                    alt="zdjecie w tle"
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    />
                    <div className='custom-container'>
                        <div className='slider-sticker'>
                            <p>Wizyta profilaktyczna 2x w roku
                                <br/><span>może ochronić przed 97% chorób zębów</span>
                            </p>
                            <a href="#">stomatologia zachowawcza</a>
                        </div>    
                    </div> 
                </div>
                <div>
                    <StaticImage 
                    src="../images/hero.png"
                    alt="zdjecie w tle"
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    />
                </div>
            </Carousel>
    </section>
  )
}
