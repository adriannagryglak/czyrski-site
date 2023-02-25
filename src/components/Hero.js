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
            //animationHandler="fade"
            swipeable={true}
            verticalSwipe="natural"
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            >
                <div className='carousel-item'>
                    <StaticImage
                    src="../images/hero.png"
                    style={{height: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    alt=""
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
                    src="../images/approach-2.png"
                    style={{height: `100%`, width: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    alt=""
                    />
                </div>
                <div className='carousel-item'>
                    <StaticImage 
                    src="../images/offer.png"
                    style={{height: `100%`, width: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    alt=""
                    />
                </div>
            </Carousel>
    </section>
  )
}
