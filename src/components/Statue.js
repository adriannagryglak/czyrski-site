import React from 'react'

export default function Statue() {
  return (
    <section id="#statue" className='statue custom-container'>
        <h2 className='statue__title'>Regulamin gabinetu</h2>
        <a className='statue__btn' href={`/regulamin.pdf`} download={`Regulamin obowiązujący w gabinecie stomatologicznym dr n med lek stom. Piotr Czyrski`}>otwórz</a>
    </section>
  )
}
