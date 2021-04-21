import logo from '../../assets/logo.svg';
import white from '../../assets/logo_white.svg';

import { Button } from '@material-ui/core';
import '../App/App.css';
// import Header from '../Header/Header';
// import Accept from '../Accept_Btn/Accept';
import React, { useState } from 'react';


function App() {
  const[header, setHeader] = useState(false);


  const acceptBtn = () => {
    alert("Clicked")
    setHeader(true)
    if(header){
      alert('blue')
    }
   
  }


  return (
    <>
    <div className={ header ? 'shown' : 'hidden' }>
       text
    </div>
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
      
      <div>Consolidate Your Debt
        With A Lower Rate
      </div>
      <div>
        XX.XX% 
      </div>
      <div>Manage life's expenses
        by transferring a balance to
        your Credit One Bank account today
      </div>

      <Button
        className="white_background"
        style={{ backgroundColor: 'orange', color: 'white' }}
        variant="contained" 
        color="primary" 
        onClick={acceptBtn}>
          Accept Now
     </Button>


      <Button
        style={{ backgroundColor: 'grey', color: 'white' }}
        variant="contained" 
        color="primary">
          No Thanks
      </Button>
      <p>A fee may apply.</p>

     
    </>
  );
}

export default App;
