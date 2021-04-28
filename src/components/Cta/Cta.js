import React from 'react'
import {Link} from "react-router-dom";

import './Cta.scss';

export default function Cta() {
    return (
        <div className="cta__container">
            <section className="cta">
                <div className="cta__details">
                <h1 className="cta__details__title">Let’s talk about your project</h1>
                <p className="cta__details__text">
                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </p>
                </div>
                <div className="cta__button__container">
                    <Link to="/contact">
                        <button type="button" className="cta__button">Get in touch</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}