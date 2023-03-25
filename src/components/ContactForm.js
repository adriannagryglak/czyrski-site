import React from 'react';
import { Formik, Form, Field } from 'formik';
import { basicSchema } from "../schemas";
import { useState } from 'react';

export default function ContactForm({isLanding}) {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [agree, setAgree] = useState(false);

  const onSubmit = async (values, actions) =>{

    fetch("https://formsubmit.co/ajax/piotr@czyrski.pl", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        imię : values.name,
        email: values.email,
        telefon: values.tel ? values.tel : "nie podano",
        wiadomość: values.message,
    })
})
    .then(response => response.json())
    .then(actions.resetForm())
    .then(setIsSubmitted(true))
    .catch(error => {
      actions.resetForm()
      setIsSubmitted(false);
      setError(error);
      });
  }

  return (
    <Formik 
      initialValues={{
        email: "", 
        name: "", 
        tel: "", 
        message: "", 
        agreement: false,
      }} 
      validationSchema={basicSchema} 
      onSubmit={onSubmit}>
      {({errors, touched, isSubmitting})=>(
        <Form className={isLanding ? 'contact-form landing' : 'contact-form'} action="https://formsubmit.co/piotr@czyrski.pl" method="POST" >
        {isLanding ? <img src='/tooth.svg' alt='logo w kształcie zęba'/> : <img src='/envelope-open.svg' alt='ikona koperty'/> }
            <h3>Formularz kontaktowy</h3>
            <label htmlFor="name" className='hidden-accessible'>imię i nazwisko</label>
            <Field className={errors.name && touched.name ? "error":""} id="name" type="text" name="name" placeholder="imię i nazwisko" />
            {errors.name && touched.name && <p className='error-paragraph'>{errors.name}</p>}
            {isLanding && 
                <>
                  <label htmlFor="tel" className='hidden-accessible'>telefon</label>
                  <Field className={errors.tel && touched.tel ? "error":""} id="tel" type="tel" name="tel" placeholder="telefon" />
                  {errors.tel && touched.tel && <p className='error-paragraph'>{errors.tel}</p>}
                </>}
            <label htmlFor="email" className='hidden-accessible' >adres e-mail</label>
            <Field className={errors.email && touched.email ? "error":""} id="email"  type="email" name="email" placeholder="adres e-mail" />
            {errors.email && touched.email && <p className='error-paragraph'>{errors.email}</p>}
            <label htmlFor="mess" className='hidden-accessible'>wiadomość</label>
            <Field className={errors.message && touched.message ? "error":""} as="textarea" id="mess" name="message" placeholder="wiadomość" />
            {errors.message && touched.message && <p className='error-paragraph'>{errors.message}</p>}

            <p className='form-warning'>(rejestracja wizyt wyłącznie telefoniczna)</p>

            <label htmlFor="agreement" className='hidden-accessible'>Zgoda RODO</label>
            <div className={errors.agreement && touched.agreement ? "error form-agreement-container":"form-agreement-container"}>
              <Field type="checkbox" name="agreement" id="agreement" />
              <p>Wyrażam zgodę na przetwarzanie moich danych osobowych. 
              {agree && <>
                <br/><br/>
                Mając na względzie ochronę Państwa danych osobowych i wypełniając obowiązki nałożone na nas przepisami prawa wskazujemy, że wysyłając do nas zapytanie w formie poniższego formularza wyrażają Państwo zgodę na przetwarzanie swoich danych osobowych wskazanych w formularzu w celu udzielenia odpowiedzi na zadane w formularzu kontaktowym pytanie, umówienia Państwa na spotkanie oraz prowadzenie przez Gabinet Stomatologiczny Piotr Czyrski kontaktu bezpośredniego. 
                <br/><br/>
                Informujemy, że Państwa zgoda może zostać cofnięta w dowolnym momencie przez wysłanie wiadomości e-mail na nasz adres piotr@czyrski.pl spod adresu, którego zgoda dotyczy. Informujemy, że nie jesteście Państwo profilowani. Państwa dane nie będą przekazywane poza EOG ani udostępniane organizacjom międzynarodowym. 
                <br/><br/>
                Zawiadamiamy, że administratorem Państwa danych osobowych wskazanych w powyższym formularzu jest Gabinet Stomatologiczny Piotr Czyrski.
                </>}
                <span onClick={()=>{setAgree(prev=> !prev)}}>{!agree ? " Pokaż więcej" : " Ukryj treść"}</span>
              </p>
            </div>
            {errors.agreement && touched.agreement && <p className='error-paragraph'>{errors.agreement}</p>}
            
            <button disabled={isSubmitting} type="submit">wyślij wiadomość</button>
            {isSubmitted && <p className='submitted-paragraph'>Dziękujemy za wysłanie wiadomości!</p>}
            {error && <p className='submitted-paragraph'>Przepraszamy, coś poszło nie tak. Spróbuj wysłać wiadomość jeszcze raz</p>}
        </Form>
      )} 
    </Formik> 
  ) 
}
