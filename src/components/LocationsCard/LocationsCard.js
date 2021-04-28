import React from 'react'
import {Link} from "react-router-dom";
import ImgAustralia from '../../assets/shared/desktop/illustration-australia.svg';
import ImgCanada from '../../assets/shared/desktop/illustration-canada.svg';
import ImgUK from '../../assets/shared/desktop/illustration-united-kingdom.svg';

import './LocationsCard.scss';

export default function LocationsCard() {
    return (
        <div className="locationscard__container">
            <div className="locationscard">
                <div className="locationscard__img backgroundcanada">
                    <img src={ImgCanada} alt=""/>
                </div>
                <h1 className="locationscard__title">CANADA</h1>
                <Link to="/locations" className="locationscard__button">SEE LOCATION</Link>
            </div>
            <div className="locationscard">
                <div className="locationscard__img backgroundaustralia">
                    <img src={ImgAustralia} alt=""/>
                </div>
                <h1 className="locationscard__title">AUSTRALIA</h1>
                <Link to="/locations" className="locationscard__button">SEE LOCATION</Link>
            </div>
            <div className="locationscard">
                <div className="locationscard__img backgrounduk">
                    <img src={ImgUK} alt=""/>
                </div>
                <h1 className="locationscard__title">UNITED KINGDOM</h1>
                <Link to="/locations" className="locationscard__button">SEE LOCATION</Link>
            </div>
        </div>
    )
}