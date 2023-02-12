import * as React from "react";
import Hero from "../components/Hero";
import '../styles/style.scss';
import Footer from "../components/Footer";
import Topper from "../components/Topper";
import Details from "../components/Details";
import Approach from "../components/Approach";
import Statue from "../components/Statue";
import Offer from "../components/Offer";
import Contact from "../components/Contact";

export default function Start() {
  return <>
    <Topper/>
    <Hero/>
    <Details/>
    <Approach/>
    <Statue/>
    <Offer/>
    <Contact/>
    <Footer/>
  </>
}
 