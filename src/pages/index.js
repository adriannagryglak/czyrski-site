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
import News from "../components/News";
import { useStaticQuery, graphql } from "gatsby";

export default function Start() {
  
  const data = useStaticQuery(graphql`
  query {
    news {
      newposts(orderBy: publishedAt_DESC, first: 1) {
        content {
          raw
        }
        title
        publishedAt
      }
    }
  }
`);

  return <>
    <Seo/>
    <Topper/>
    <Hero isNews={data.news.newposts.length !== 0}/>
    <Details/>
    <Approach/>
    {data.news.newposts.length !== 0 && <News data={data.news.newposts[0]}/>}
    <Services />
    <Offer/>
    <Contact/>
    <Footer isNews={data.news.newposts.length !== 0}/>
  </>
}
