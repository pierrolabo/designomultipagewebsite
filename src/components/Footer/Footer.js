import React from 'react'

import Logo from '../../assets/shared/desktop/logo-light.png'

import Cta from '../Cta/Cta';

import LogoFacebook from '../../assets/shared/desktop/icon-facebook.svg';
import LogoInstagram from '../../assets/shared/desktop/icon-instagram.svg';
import LogoPinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import LogoTwitter from '../../assets/shared/desktop/icon-twitter.svg';
import LogoYoutube from '../../assets/shared/desktop/icon-youtube.svg';

import './Footer.scss';

export default function Footer() {
    return (
        <section className="footer">
            <Cta/>
            <div className="footer__top">
                <div className="footer__top--logo">
                    <img src={Logo} alt="Company Logo" />
                </div>
                <div className="footer__top__navigation">
                    <a href="/" target="_blank" rel="noopener noreferrer">OUR COMPANY</a>
                    <a href="/" target="_blank" rel="noopener noreferrer">LOCATIONS</a>
                    <a href="/" target="_blank" rel="noopener noreferrer">CONTACT</a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__details">
                    <div className="footer__bottom__details--address">
                        <h4>Designo Central Office</h4>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="footer__bottom__details--address">
                        <h4>Contact Us (Central Office)</h4>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                </div>
                <div className="footer__bottom__logos">
                    <img className="footer__bottom__logos--logo" src={LogoFacebook} alt="facebook"/>
                    <img className="footer__bottom__logos--logo" src={LogoYoutube} alt="youtube"/>
                    <img className="footer__bottom__logos--logo" src={LogoTwitter} alt="twitter"/>
                    <img className="footer__bottom__logos--logo" src={LogoPinterest} alt="pinterest"/>
                    <img className="footer__bottom__logos--logo" src={LogoInstagram} alt="instagram"/>
                </div>
            </div>
        </section>
    )
}