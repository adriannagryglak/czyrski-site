import * as React from "react";
import Hero from "../components/Hero";
import '../styles/style.scss';
import Footer from "../components/Footer";
import Topper from "../components/Topper";
import Details from "../components/Details";
import Approach from "../components/Approach";
import Offer from "../components/Offer";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Seo from "../components/Seo";

export default function Start() {
  return <>
    <Seo/>
    <Topper/>
    <Hero/>
    <Details/>
    <Approach/>
    <Services />
    <Offer/>
    <Contact/>
    <Footer/>
  </>
}
 