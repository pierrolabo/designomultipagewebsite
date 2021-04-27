import React from 'react'
import PropTypes from "prop-types";

import './Location.scss';

export default function Location({country, office, street, city, phone, mobile, type}) {
    return (
        <section className="location" id={`${country.toLowerCase().replace(" ", "")}`}>
            <div className={`location--image ${type}`} alt={`map of ${type}`}/>
            <div className="location__contents">
                    <h1 className="location__contents--title">{country}</h1>
                <div className="location__contents__addresses">
                    <div className="location__contents__addresses__office">
                        <h4 className="location__contents__addresses--subtitle">{office}</h4>
                        <p>{street}</p>
                        <p>{city}</p>
                    </div>
                    <div className="location__contents__addresses__contact">
                        <h4 className="location__contents__addresses--subtitle">Contact</h4>
                        <p>{phone}</p>
                        <p>{mobile}</p>
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