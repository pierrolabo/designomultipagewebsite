import React, {useState, useEffect} from 'react'

import {motion} from "framer-motion";

import './HeaderContainer.scss';
import Logo from '../../../assets/shared/desktop/logo-dark.png'
import LogoMenuActive from '../../../assets/shared/mobile/icon-close.svg'
import LogoMenu from '../../../assets/shared/mobile/icon-hamburger.svg'

// eslint-disable-next-line no-undef
const menuElm = document.getElementById('menu-root');

export default function HeaderContainer() {
    const [isActive, setActive] = useState(false)

    function HeaderMenu()  {
           return (
            <motion.div id="header__menu" className="header__menu" animate={{opacity : 1}} transition={{duration: 0.5}}>
            <nav  className="header__menu__nav">
                    <a href="/company"><h3 className="header__menu__nav--title">OUR COMPANY</h3></a>
                    <a href="/company"><h3 className="header__menu__nav--title">LOCATIONS</h3></a>
                    <a href="/company"><h3 className="header__menu__nav--title">CONTACT</h3></a>
            </nav>
            </motion.div>
           )

    }
    const handleEscape = (event) => {
       if(event.target.id === "header__menu") {
           setActive(!isActive)
       }
    }
    useEffect(() => {
        if(isActive) menuElm.addEventListener('click', handleEscape, false)
        return () => {
            menuElm.removeEventListener('click', handleEscape, false)
        }
    }, [handleEscape, isActive])
    return (
        <>
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
        <div id="menu-root">
        {
            isActive ?  <HeaderMenu/> : null
        }
        </div>
      
        </>
    )
}

