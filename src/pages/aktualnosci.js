import React from "react";
import "../styles/style.scss";
import Topper from "../components/Topper";
import PageHeader from "../components/PageHeader";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStaticQuery, graphql } from "gatsby";
import moment from 'moment';
import 'moment/locale/pl';
import { RichText } from '@graphcms/rich-text-react-renderer';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import Seo from '../components/Seo';


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

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.news.newposts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.news.newposts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.news.newposts.length;
    window.scrollTo(0,0)
    setItemOffset(newOffset);
  };

  return (
    <>
      <Seo />
      <Topper />
      <NavBar />
      <PageHeader location="Aktualności" />
      {data.news.newposts.length === 0 ? <p>brak aktualności na stronie</p> : 
      <main className="news-content custom-container">
        {currentItems.map((news, i) => {
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

        <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagination"
                activeClassName="active"
        />

      </main>}
      <Footer />
    </>
  );
}

