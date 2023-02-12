import React from 'react'

export default function Contact() {
  return (
    <section id="#contact" className='contact-container'>
        <div className='title-container custom-container'>
            <h2 className='contact__title'>Kontakt</h2>
            <p className='contact__paragraph'>Szanowni Państwo,  rejestrujemy telefonicznie  w godzinach pracy gabinetu. W pozostałych sprawach zapraszamy do kontaktu mailowego lub przy użyciu poniższego formularza </p>
            <a className='contact__mail' href="mailto:kontakt@czyrski.pl">kontakt@czyrski.pl</a>
        </div>
        <form className='contact-form'>
            <img src='/tooth.svg' alt='logo w kształcie zęba'/>
            Formularz kontaktowy will be here
            {/* TO DO WHOLE FORM + VALIDATION + EMAIL SENDING */}
        </form>
    </section>
  )
}
