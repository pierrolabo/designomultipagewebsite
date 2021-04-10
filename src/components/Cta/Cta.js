import React from 'react'

import './Cta.scss';

export default function Cta() {
    return (
        <div className="cta__container">
            <section className="cta">
                <div className="cta__details">
                <h1 className="cta__details--title">Let’s talk about your project</h1>
                <p className="cta__details--text">
                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </p>
                </div>
                <div className="cta__button">
                    <button type="button" className="cta__button--button">Get in touch</button>
                </div>
            </section>
        </div>
    )
}