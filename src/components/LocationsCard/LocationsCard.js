import React from 'react'

import ImgAustralia from '../../assets/shared/desktop/illustration-australia.svg';
import ImgCanada from '../../assets/shared/desktop/illustration-canada.svg';
import ImgUK from '../../assets/shared/desktop/illustration-united-kingdom.svg';

import './LocationsCard.scss';

export default function LocationsCard() {
    return (
        <div className="locationscard__container">
            <div className="locationscard">
                <div className="locationscard__img canada">
                    <img src={ImgCanada} alt=""/>
                </div>
                <h1>CANADA</h1>
                <button type="button">SEE LOCATION</button>
            </div>
            <div className="locationscard">
                <div className="locationscard__img">
                    <img src={ImgAustralia} alt=""/>
                </div>
                <h1>AUSTRALIA</h1>
                <button type="button">SEE LOCATION</button>
            </div>
            <div className="locationscard">
                <div className="locationscard__img">
                    <img src={ImgUK} alt=""/>
                </div>
                <h1>UNITED KINGDOM</h1>
                <button type="button">SEE LOCATION</button>
            </div>
        </div>
    )
}