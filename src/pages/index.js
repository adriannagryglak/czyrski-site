import * as React from "react";
import Hero from "../components/Hero";
import '../styles/style.scss';
import Footer from "../components/Footer";
import Topper from "../components/Topper";

export default function Start() {
  return <div>
    <Topper/>
    <Hero/>
    <p>
      this is Landing Page
    </p>
    <Footer/>
  </div>
}
 