import React from 'react';
import { Link } from 'gatsby';

export default function Logo() {
  return (
    <Link to="/">
    <div className='logo'>
        <img className='logo__img' src="/logo.png" alt="logo niebieski ząb"/>
        <div className='logo-text'>
            <p className='logo-text__name'>Piotr Czyrski</p>
            <p className='logo-text__title'>Lekarz Chirurg Stomatolog</p>
        </div>
    </div>
    </Link>
  )
}