import React from 'react'

export default function PageHeader({ location }) {
  return (
    <div className='custom-container header-container'>
        <h1 className='header-title'>{location}</h1>
        <div className='header-location'>Start / <span>{location}</span></div>
    </div>
  )
}
