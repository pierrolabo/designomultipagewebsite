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
                <div className="header__logomenu">
                    <img src={LogoMenu} alt=""/>
                </div>
            </div>
        </div>
    )
}

