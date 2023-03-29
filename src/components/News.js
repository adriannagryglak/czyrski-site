import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby";
import moment from 'moment';
import 'moment/locale/pl';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function News() {

    moment.locale('pl');
    const data = useStaticQuery(graphql`
    query {
      news {
        newposts(last: 1) {
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

  const isoDateString = data.news.newposts.publishedAt;
  const formattedDate = moment(isoDateString).format("DD MMMM YYYY");

  return (
    <section className='news custom-container'>
        <h4>bądź na bieżąco</h4>
        <h2 className="news-title">Aktualności gabinetu</h2>
        {data.news.newposts.length === 0 ? <p className='news-empty'>Przepraszamy, na chwilę obecną nie posiadamy nowych ogłoszeń.</p> :
        <>
        <article className='news-article'>
            <h3 className='news-article__title'>{data.news.newposts[0].title}</h3>
            <h3 className='news-article__date'>{formattedDate}</h3>
            <div className="news-article__content" >
              <RichText content={data.news.newposts[0].content.raw} />
            </div>
        </article>
        <Link className="news-link" to="/aktualnosci">zobacz więcej</Link>
        </>}
    </section>
  )
}
