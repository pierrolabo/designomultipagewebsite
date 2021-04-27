import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import IconRight from '../../assets/shared/desktop/icon-right-arrow.svg';

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
        <div className={`cardcategory ${type}`} alt={`${type}`}>
            <Link to={link}>
            <div className="cardcategory__content">
            <h2>{title}</h2>
            <h4>VIEW PROJECTS<img className="cardcategory__content--icon" src={IconRight} alt="right icon"/></h4>
                </div>
            </Link>
        </div>
    )
}

CardCategory.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,

}