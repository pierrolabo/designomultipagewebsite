import React from 'react'
import PropTypes from "prop-types";

import './CardCategory.scss'

export default function CardCategory({title, link}) {
    /*
    *
    *   We have 3 images par device per category (type)
    *   the css file will switch between images
    *   We use the type as class indicator
    * 
    * */
    const type = title.split(" ")[0].toLowerCase();

    return (
        <div className={`cardcategory ${type}`}>
            <h2>{title}</h2>
            <a href={link}>
            <h4>VIEW PROJECTS</h4>
        </a>
        </div>
    )
}

CardCategory.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,

}