import React from 'react';
import { Formik, Form, Field } from 'formik';
import { basicSchema } from "../schemas";
import { useState } from 'react';

export default function ContactForm({isLanding}) {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (values, actions) =>{
    console.log('Form submitted', values);
    //API call
    await new Promise((resolve)=> setTimeout(resolve,2000));
    actions.resetForm()
    setIsSubmitted(true);
  }

  return (
    <Formik 
      initialValues={{
        email: "", 
        name: "", 
        tel: "", 
        message: ""
      }} 
      validationSchema={basicSchema} 
      onSubmit={onSubmit}>
      {({errors, touched, isSubmitting })=>(
        <Form className={isLanding ? 'contact-form landing' : 'contact-form'} >
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
            <Field className={errors.email && touched.email ? "error":""}id="email"  type="email" name="email" placeholder="adres e-mail" />
            {errors.email && touched.email && <p className='error-paragraph'>{errors.email}</p>}
            <label htmlFor="mess" className='hidden-accessible'>wiadomość</label>
            <Field className={errors.message && touched.message ? "error":""} as="textarea" id="mess" name="message" placeholder="wiadomość" />
            {errors.message && touched.message && <p className='error-paragraph'>{errors.message}</p>}
            <button disabled={isSubmitting} type="submit">wyślij wiadomość</button>
            {isSubmitted && <p className='submitted-paragraph'>Dziękujemy za wysłanie wiadomości!</p>}
        </Form>
      )} 
    </Formik> 
  ) 
}
