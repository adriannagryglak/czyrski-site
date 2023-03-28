import React from "react";
import { useState, useEffect } from "react";
import "../styles/style.scss";
import Topper from "../components/Topper";
import PageHeader from "../components/PageHeader";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStaticQuery, graphql } from "gatsby";
import moment from 'moment';
import 'moment/locale/pl';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function NewsPage() {
  moment.locale('pl');

  const data = useStaticQuery(graphql`
    query {
        news {
            newposts(orderBy: publishedAt_DESC){
              content {
                raw
              }
              title
              publishedAt
              heroImg{
                url
              }
            }
          }
    }
  `);

  return (
    <>
      <Topper />
      <NavBar />
      <PageHeader location="Aktualności" />
      <main className="news-content custom-container">
        {data.news.newposts.map((news, i) => {
           const isoDateString = news.publishedAt;
           const formattedDate = moment(isoDateString).format("DD MMMM YYYY");
         
          return (
            <div key={i} className="news-item">
                {news.heroImg && <img className="news-item__thumbnail" src={news.heroImg.url} alt="zdjęcie do artykułu"/> }
                
                <h4>{formattedDate}</h4>
                <h2 className="news-item__title">{news.title}</h2>
                <div className="news-item__content">
                    <RichText content={news.content.raw} />
                </div>
            </div>)
          
        })}
      </main>
      <Footer />
    </>
  );
}

