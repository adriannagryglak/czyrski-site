import React from 'react'
import moment from 'moment';
import 'moment/locale/pl';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function News({data}) {

    moment.locale('pl');


  const isoDateString = data.publishedAt;
  const formattedDate = moment(isoDateString).format("DD MMMM YYYY");

  return (
    <section className='news custom-container' id="aktualnosci">
        <h4>bądź na bieżąco</h4>
        <h2 className="news-title">Aktualności gabinetu</h2>
        <article className='news-article'>
            <h3 className='news-article__title'>{data.title}</h3>
            <h3 className='news-article__date'>{formattedDate}</h3>
            <div className="news-article__content" >
              <RichText content={data.content.raw} />
            </div>
        </article>
       
    </section>
  )
}
