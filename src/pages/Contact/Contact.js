import React from 'react'
import LocationsCard from '../../components/LocationsCard/LocationsCard';
import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.scss';

export default function Contact() {
    return (
        <section className="contact">
           <ContactForm/>
            <LocationsCard/>
        </section>
    )
}