import React from 'react'

import './HeaderContainer.scss';
import Logo from '../../../assets/shared/desktop/logo-dark.png'
import LogoMenu from '../../../assets/shared/mobile/icon-hamburger.svg'

export default function HeaderContainer() {
    return (
        <div className="header__container">
            <div className="header">
                <a href="/" className="header__logo">
                        <img src={Logo} alt=""/>
                </a>
                    <nav className="header__navigation hide-on-mobile">
                        <a href="/company"><h3 className="header__navigation--title">OUR COMPANY</h3></a>
                        <a href="/company"><h3 className="header__navigation--title">LOCATIONS</h3></a>
                        <a href="/company"><h3 className="header__navigation--title">CONTACT</h3></a>
                    </nav>
                <div className="header__logomenu hide-on-tablet">
                    <img src={LogoMenu} alt=""/>
                </div>
            </div>
        </div>
    )
}

