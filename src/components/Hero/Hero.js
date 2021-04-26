import React from "react";
import {Link} from "react-router-dom";
import HeroImg from '../../assets/home/desktop/image-hero-phone.png';

import './Hero.scss'

export default function Hero() {
    return (
        <section className="hero__container">
            <div className="hero__info">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <h4>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
  and engaging brand experiences. Find out more about our services.</h4>
            <Link to="about">
                <button type="button" className="hero__info--button">Learn more</button>
            </Link>   
            </div>
            <div className="hero__img__container">
                <img src={HeroImg} alt="aesthetic design on an iphone"/>
            </div>
        </section>
    )
}
