import React, {useState} from 'react'

import './HeaderContainer.scss';
import Logo from '../../../assets/shared/desktop/logo-dark.png'
import LogoMenuActive from '../../../assets/shared/mobile/icon-close.svg'
import LogoMenu from '../../../assets/shared/mobile/icon-hamburger.svg'

export default function HeaderContainer() {
    const [isActive, setActive] = useState(true)
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
                <div className="header__logomenu hide-on-tablet" role="button" tabIndex="0" onKeyPress={() => setActive(!isActive)} onClick={() => setActive(!isActive)}>
                    <img src={isActive ? LogoMenuActive : LogoMenu} alt=""/>
                </div>
            </div>
        </div>
    )
}

