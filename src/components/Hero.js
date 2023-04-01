import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from "./Navbar";
import { Link } from 'gatsby';
import video from '../images/hero-video.mp4';

export default function Hero({isNews}) {
    
  return (
    <section className='hero'>
            <Navbar isNews={isNews}/>
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
                            <Link to="/stomatologia-zachowawcza">stomatologia zachowawcza</Link>
                        </div>    
                    </div> 
                </div>
                <div className='carousel-item'>
                    <video loop={true} muted autoPlay={true} playsInline={true}>
                        <source src={video} type="video/mp4"/>
                    </video>
                    <div className='custom-container'>
                        <div className='slider-sticker'>
                            <p>Około 92% bolów głowy
                                <br/><span>wywołane może być wadami zgryzu</span>
                            </p>
                            <Link to="/leczenie-bolu-glowy">leczenie bólu głowy</Link>
                        </div>    
                    </div>
                </div>
                <div className='carousel-item'>
                    <StaticImage 
                    src="../images/hero2.jpg"
                    style={{height: `100%`, width: `100%`}}
                    quality="100"
                    placeholder="blurred"
                    className='d-block w-100'
                    alt=""
                    />
                    <div className='custom-container'>
                        <div className='slider-sticker'>
                            <p>Właściwie przeprowadzone leczenie
                                <br/><span>ortodontyczne nie powinno boleć</span>
                            </p>
                            <Link to="/ortodoncja">ortodoncja</Link>
                        </div>
                    </div>
                </div>
            </Carousel>
    </section>
  )
}
