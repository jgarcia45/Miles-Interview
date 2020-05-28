import React from 'react';
import './Header.css';
import logo from './milesLogo.png';

function Header() {
    return (
        <nav className="header-layout">
            <img src={logo} className="header-logo" alt="Miles" />
        </nav>
    );
}

export default Header;