import React from 'react'
import PropTypes from "prop-types";

import './Location.scss';

export default function Location({country, office, street, city, phone, mobile, type}) {
    return (
        <section className="location" id={`${country.toLowerCase().replace(" ", "")}`}>
            <div className={`location__image ${type}`} alt={`map of ${type}`}/>
            <div className="location__contents">
                    <h1 className="location__contents__title">{country}</h1>
                <div className="location__contents__addresses">
                    <div className="location__contents__addresses__office">
                        <h4 className="location__contents__addresses__title">{office}</h4>
                        <p className="location__contents__addresses__text">{street}</p>
                        <p className="location__contents__addresses__text">{city}</p>
                    </div>
                    <div className="location__contents__addresses__contact">
                        <h4 className="location__contents__addresses__title">Contact</h4>
                        <p className="location__contents__addresses__text">{phone}</p>
                        <p className="location__contents__addresses__text">{mobile}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

Location.propTypes = {
    country: PropTypes.string.isRequired,
    office: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,

}