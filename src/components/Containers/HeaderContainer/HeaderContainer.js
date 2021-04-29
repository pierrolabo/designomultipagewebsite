import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import {motion} from "framer-motion";

import Logo from '../../../assets/shared/desktop/logo-dark.png'
import LogoMenuActive from '../../../assets/shared/mobile/icon-close.svg'
import LogoMenu from '../../../assets/shared/mobile/icon-hamburger.svg'

import './HeaderContainer.scss';

export default function HeaderContainer() {
    const [isActive, setActive] = useState(false)
    const history = useHistory();
    
    const handleClick = (e) => {
        const target = e.target.id
        switch(target) {
            case "ABOUT":
                history.push("/about")
                break;
            case "LOCATIONS":
                history.push("/locations")
                break;
            case "CONTACT":
                history.push("/contact")
                break;
            default:
                return null;    
        }
        setActive(!isActive)
        return true;
    }
    //  User can close modal by clicking outside of the menu (overlay)
    const handleEscape = (event) => {
        event.stopPropagation()
       if(event.target.id === "header__sidemenu") {
           setActive(!isActive)
       }
    }
    function HeaderMenu()  {
           return (
            <motion.div id="header__sidemenu" className="header__sidemenu" animate={{opacity : 1}} transition={{duration: 0.5}}>
            <nav  className="header__sidemenu__nav">
                    <Link to="/" onClick={(e) => handleClick(e)} ><h3 className="header__sidemenu__nav__title" id="ABOUT">OUR COMPANY</h3></Link>
                    <Link to="/locations" onClick={(e) => handleClick(e)}><h3 className="header__sidemenu__nav__title" id="LOCATIONS">LOCATIONS</h3></Link>
                    <Link to="/contact" onClick={(e) => handleClick(e)}><h3 className="header__sidemenu__nav__title" id="CONTACT">CONTACT</h3></Link>
            </nav>
            </motion.div>
           )
    }
   
    return (
        <>
        <div className="header__container">
            <div className="header">
                    <Link to="/" style={isActive ? {pointerEvents: "none"} : null} className="header__logo">
                        <img src={Logo} alt="company logo"/>
                    </Link>
                    <nav className="header__navigation hide-on-mobile">
                        <Link to="/about" className="header__navigation__link"><h3 className="header__navigation__title">OUR COMPANY</h3></Link>
                        <Link to="/locations" className="header__navigation__link"><h3 className="header__navigation__title">LOCATIONS</h3></Link>
                        <Link to="/contact" className="header__navigation__link"><h3 className="header__navigation__title">CONTACT</h3></Link>
                    </nav>
                <div className="header__toggleicon hide-on-tablet" role="button" tabIndex="0" onKeyPress={() => setActive(!isActive)} onClick={() => setActive(!isActive)}>
                    <img src={isActive ? LogoMenuActive : LogoMenu} alt={`${isActive ? "menu-close" : "menu-open"} `}/>
                </div>
            </div>
        </div>
        <div id="menu-root" onClick={handleEscape} onKeyPress={handleEscape} role="button" tabIndex={0}>
        {
            isActive ?  <HeaderMenu/> : null
        }
        </div>
      
        </>
    )
}

