import React from 'react'
import { Link } from 'gatsby'

export default function PageHeader({ location }) {
  return (
    <div className='custom-container header-container'>
        <h1 className='header-title'>{location}</h1>
        <div className='header-location'>
          <Link to="/">Start / </Link>
          <span>{location}</span></div>
    </div>
  )
}
