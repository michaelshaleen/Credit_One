import logo from '../../assets/logo.svg';
import white from '../../assets/logo_white.svg';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import '../App/App.css';
// import Header from '../Header/Header';
// import Accept from '../Accept_Btn/Accept';
import React, { useState } from 'react';


function App() {
  const[header, setHeader] = useState(false);
  const history = useHistory();



  const acceptBtn = () => {
    if(header){
      setHeader(false)
    }else{
      setHeader(true)
    }
  }

  const noBtn = () => {
    window.open("https://www.creditonebank.com/", "_blank");
  }

  return (
    <>
     <header 
        className={ header ? 'shown' : 'hidden' }>
        <img src={logo} alt="credit one header" />
      </header>
      {/* <header
        className="white_logo">
          <div>
            <img src={white} alt="credit one in white text"/>
          </div>
      </header> */}
      <div
        className="text">

            <div
              style={{fontSize: "30px"}}>Consolidate Your Debt
              With A Lower Rate
            </div>
            <div>
              XX.XX% 
            </div>
            <div>Manage life's expenses
              by transferring a balance to
              your Credit One Bank account today
            </div>
        </div>

      <Button
        style={{ backgroundColor: 'orange', color: 'white' }}
        variant="contained" 
        color="primary" 
        onClick={acceptBtn}>
          Accept Now
     </Button>


      <Button
        style={{ backgroundColor: 'grey', color: 'white' }}
        variant="contained" 
        color="primary"
        onClick={noBtn}>
          No Thanks
      </Button>
      <p
        className="text">
          A fee may apply.
      </p>
      <footer>
        *See the *Disclosures and Terms Conditions'
        on the application page by selecting 
        the 'Accept Now' button.
      </footer>

     
    </>
  );
}

export default App;
