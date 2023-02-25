import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="kontakt" className='contact-container'>
        <div className='title-container custom-container'>
            <h2 className='contact__title'>Kontakt</h2>
            <p className='contact__paragraph'>Szanowni Państwo,  rejestrujemy telefonicznie  w godzinach pracy gabinetu. W pozostałych sprawach zapraszamy do kontaktu mailowego lub przy użyciu poniższego formularza </p>
            <a className='contact__mail' href="mailto:kontakt@czyrski.pl">kontakt@czyrski.pl</a>
        </div>
        <ContactForm isLanding={true}/>
    </section>
  )
}
