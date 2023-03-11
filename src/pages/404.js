import React from 'react'
import { Link } from 'gatsby';
import Seo from '../components/Seo';
import '../styles/style.scss';

export default function NotFoundPage() {
  return (
    <section className='page-404'>
      <Seo/>
      <div className='404-container'>
        <h1>404</h1>
        <h2>Podstrona nie istnieje</h2>
        <p>Podany adres jest błędny lub podstrona została usunięta</p>
        <Link className="404-link" to="/">Powrót na stronę główną</Link>
      </div>
    </section>
  )
}