import React from 'react'
import { Link } from 'gatsby'

export default function News() {

  return (
    <section className='news custom-container'>
        <h4>bądź na bieżąco</h4>
        <h2>Aktualności gabinetu</h2>
        <article className='news__article'>
            przykładowa treść przykładowa treść przykładowa treść przykładowa treść przykładowa treść
        </article>
        <Link activeClassName="active" className="navbar-link" to="/aktualnosci">zobacz więcej</Link>
    </section>
  )
}
