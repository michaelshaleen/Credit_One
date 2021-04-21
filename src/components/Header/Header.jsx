import React from 'react';
import logo from '../../assets/logo.svg';
import white from '../../assets/logo_white.svg';
import './Header.css';

function Header() {


  return (
    <>
     <header 
      className="header_logo">
        <img src={logo} alt="credit one header" />
      </header>
      {/* <header
        className="white_logo">
          <div>
            <img src={white} alt="credit one in white text"/>
          </div>
      </header> */}
      
    </>
  )
}

export default Header;
