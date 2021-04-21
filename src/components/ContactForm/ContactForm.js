import React from 'react'

import "./ContactForm.scss"

import {Formik} from "formik";

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
          onSubmit={(values) => {
            console.log(values)
          }}>
             {formik => (

          <form onSubmit={formik.handleSubmit} className="contactform__form">
              {/* eslint-disable-next-line */}
              <label htmlFor="name"><input id="name" className="contactform__form--field" type="text" placeholder="Name" {...formik.getFieldProps('name')} /></label>
              {/* eslint-disable-next-line */}
              <label htmlFor="email"><input id="email" className="contactform__form--field" type="email" placeholder="Email Address" {...formik.getFieldProps('email')} /></label>
              {/* eslint-disable-next-line */}
              <label htmlFor="phone"><input id="phone" className="contactform__form--field" type="tel" placeholder="Phone" {...formik.getFieldProps('phone')} /></label>
              {/* eslint-disable-next-line */}
              <label htmlFor="message"><textarea id="email" className="contactform__form--field" cols="30" row="2" placeholder="Your Message" {...formik.getFieldProps('message')}></textarea></label>
          <button type="submit">Submit</button>    
          </form>
             )} 
          </Formik>
            
    </section>
    )
}