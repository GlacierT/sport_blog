import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="/">Головна</a>
            <a href="/about-us">Про нас</a>
            <a href="/contact-us">Наші контакти</a>
        </nav>
    </header>
   )

 }

export default Header