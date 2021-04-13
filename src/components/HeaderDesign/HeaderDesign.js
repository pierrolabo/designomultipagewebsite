import React from 'react'
import PropTypes from "prop-types";

import './HeaderDesign.scss';

export default function HeaderDesign({type, title, text}) {
    return (
        <section className={`headerdesign ${type}`}>
            <h1 className="headerdesign--title">{title}</h1>
            <p className="headerdesign--text">{text}</p>
        </section>
    )
}

HeaderDesign.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}