import React from "react";
import "../styles/style.scss";
import Topper from "../components/Topper";
import PageHeader from "../components/PageHeader";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function NewsPage() {
  const data = useStaticQuery(graphql`
    query {
      vinyl {
        albums {
          description
          thumbnail
          title
        }
      }
    }
  `);
console.log(data.vinyl.albums);
  return (
    <>
      <Topper />
      <NavBar />
      <PageHeader location="Aktualności" />
      <main className="news-content custom-container">
        {data.vinyl.albums.map(album => {
          return(
            <div key={album.id} className="news-item">
                <p>{album.title}</p>
                <p>{album.description}</p>
                <div className="image-container">
                    <img src={album.thumbnail} />
                </div>
                <p>{album.price}</p>
            </div>
          )
        })}
      </main>
      <Footer />
    </>
  );
}
