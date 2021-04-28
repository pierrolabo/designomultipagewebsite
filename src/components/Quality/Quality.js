import React from 'react'
import PropTypes from "prop-types";

import './Quality.scss';

export default function Quality({title, description, image}) {
    return (
        <div className="quality">
            <div className="quality__image">
                <img src={image} alt=""/>
            </div>
            <div className="quality__info">
                <h3 className="quality__info__title">{title}</h3>
                <p className="quality__info__description">{description}</p>
            </div>
        </div>
    )
}

Quality.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}