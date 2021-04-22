import React from 'react'

import "./ContactForm.scss"

import {Formik} from "formik";
import * as Yup from 'yup';

export default function ContactForm() {
    return (

        <section className="contactform">
        <article className="contactform__info">
            <h1>Contact Us</h1>
            <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how 
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
            setSubmitting(false);
            resetForm()
          }}>
             {formik => (

          <form onSubmit={formik.handleSubmit} className="contactform__form">
              <div className="contactform__fields">
              {/* eslint-disable-next-line */}
              <label htmlFor="name"><input id="name" className="contactform__form--field" type="text" placeholder="Name" {...formik.getFieldProps('name')} />{formik.touched.name && formik.errors.name ? (<span className="contactform--error">{formik.errors.name}</span>) : null}</label>
              {/* eslint-disable-next-line */}
              <label htmlFor="email"><input id="email" className="contactform__form--field" type="email" placeholder="Email Address" {...formik.getFieldProps('email')} />{formik.touched.email && formik.errors.email ? (<span className="contactform--error">{formik.errors.email}</span>) : null}</label>
              {/* eslint-disable-next-line */}
              <label htmlFor="phone"><input id="phone" className="contactform__form--field" type="tel" placeholder="Phone" {...formik.getFieldProps('phone')} />{formik.touched.phone && formik.errors.phone ? (<span className="contactform--error">{formik.errors.phone}</span>) : null}</label>
              {/* eslint-disable-next-line */}
              <label htmlFor="message"><textarea id="email" className="contactform__form--field" cols="30" row="2" placeholder="Your Message" {...formik.getFieldProps('message')}></textarea>{formik.touched.message && formik.errors.message ? (<span className="contactform--error">{formik.errors.message}</span>) : null}</label>
              </div>
          <button type="submit">Submit</button>    
          </form>
             )} 
          </Formik>
            
    </section>
    )
}