import React from 'react'
import { Link } from 'gatsby';

export default function notFound() {
  return (
    <section className='page-404'>
      <div className='404-container'>
        <h1>404</h1>
        <h2>Podstrona nie istnieje</h2>
        <p>Podany adres jest błędny lub podstrona została usunięta</p>
        <Link className="404-link" to="/">Powrót na stronę główną</Link>
      </div>
    </section>
  )
}

