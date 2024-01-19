// import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <nav className="NavBar">
            <img src={logo} alt="logo" />
            <div className="NavbarList">
                <a href="">Signed</a>
                <a href="">Booked</a>
                <a href="">Clubs</a>
                <a href="">Login</a>
            </div>
                        
        </nav>
    );
};

export default Header;