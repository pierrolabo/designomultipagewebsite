import React, {useState} from 'react'
import {Formik} from "formik";
import * as Yup from 'yup';

import "./ContactForm.scss"

export default function ContactForm() {
    const [success, setSuccess] = useState(false)
    return (

        <section className="contactform">
        <article className="contactform__info">
            <h1 className="contactform__info__title">Contact Us</h1>
            <p className="contactform__info__text">Ready to take it to the next level? Let’s talk about your project or idea and find out how 
  we can help your business grow. If you are looking for unique digital experiences that’s 
  relatable to your users, drop us a line.</p>
        </article>
        <Formik
            initialValues={{name: "", email: "", phone: "", message: ""}}
            validationSchema={Yup.object({
                name: Yup.string().required(`Can't be empty`),
                phone: Yup.string().required(`Can't be empty`),
                message: Yup.string().required(`Can't be empty`),
                email: Yup.string().email('Please use a valid email address').required(`Can't be empty`)
            })

            }
          onSubmit={(values, {setSubmitting, resetForm}) => {
            setTimeout(() => {
                
            }, 400);
            setSuccess(true)
            setSubmitting(false);
            resetForm()
          }}>
             {formik => (

          <form onSubmit={formik.handleSubmit} className="contactform__form">
              <div className="contactform__container">
              {/* eslint-disable-next-line */}
              <label className="contactform__form__label contactform__form__label--border" htmlFor="name"><input id="name" className="contactform__form__field" type="text" placeholder="Name" {...formik.getFieldProps('name')} />{formik.touched.name && formik.errors.name ? (<span className="contactform__form__field--error">{formik.errors.name}</span>) : null}</label>
              {/* eslint-disable-next-line */}
              <label className="contactform__form__label contactform__form__label--border" htmlFor="email"><input id="email" className="contactform__form__field" type="email" placeholder="Email Address" {...formik.getFieldProps('email')} />{formik.touched.email && formik.errors.email ? (<span className="contactform__form__field--error">{formik.errors.email}</span>) : null}</label>
              {/* eslint-disable-next-line */}
              <label className="contactform__form__label contactform__form__label--border" htmlFor="phone"><input id="phone" className="contactform__form__field" type="tel" placeholder="Phone" {...formik.getFieldProps('phone')} />{formik.touched.phone && formik.errors.phone ? (<span className="contactform__form__field--error">{formik.errors.phone}</span>) : null}</label>
              {/* eslint-disable-next-line */}
              <label className="contactform__form__label contactform__form__label--border" htmlFor="message"><textarea id="email" className="contactform__form__field contactform__form__field__textarea" cols="30" row="2" placeholder="Your Message" {...formik.getFieldProps('message')}></textarea>{formik.touched.message && formik.errors.message ? (<span className="contactform__form__field--error">{formik.errors.message}</span>) : null}</label>
              </div>
              {
                  success !== true ? (<button className="contactform__form__button" type="submit">Submit</button>) : <h3 className="contactform__form__success">Success !!</h3>
              }
              
          </form>
             )} 
          </Formik>
            
    </section>
    )
}