import React from 'react';
import logo from '../../assets/logo.svg';
// import white from '../../assets/logo_white.svg';
import './Header.css';

function Header() {
  return (
    <>
     <header 
      className="credit_head">
        <img src={logo} alt="credit one header" />
      </header>
      {/* <div>
        <img src={white} alt="credit one in white text"/>
      </div> */}
      
    </>
  )
}

export default Header;
