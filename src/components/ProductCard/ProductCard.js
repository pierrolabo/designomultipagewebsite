import React from 'react'
import PropTypes from "prop-types";

import './ProductCard.scss';

export default function ProductCard({img, title, text}) {
    return (
        <section className="productcard">
            <div className="productcard__image">
                <img src={img} alt=""/>
            </div>
            <div className="productcard__info">
                <h1 className="productcard__info--title">{title}</h1>
                <p className="productcard__info--text">{text}</p>
            </div>
        </section>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}