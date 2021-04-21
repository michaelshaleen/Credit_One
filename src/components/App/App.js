import logo from '../../assets/logo.svg';
import white from '../../assets/logo_white.svg';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import '../App/App.css';
// import Header from '../Header/Header';
// import Accept from '../Accept_Btn/Accept';
import Footer from '../Footer/Footer';
import React, { useState } from 'react';


function App() {
  const[header, setHeader] = useState(false);
  const[img, setImg] = useState(false);
  const history = useHistory();



  const acceptBtn = () => {
    if(header){
      setHeader(false);
      setImg(true);

    }else{
      setHeader(true);
      setImg(true);
    }
  }

  if(img){
    <header 
        className={ header ? 'shown' : 'hidden' }>
        <img src={logo} alt="credit one header" />
      </header>
  }else{
    <header 
        className={ header ? 'shown' : 'hidden' }>
        <img src={white} alt="credit one header" />
      </header>
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
        className="body">

            
          <div
            className="text1">
                <div>
                  Consolidate Your Debt
                </div>
                <div>
                    With A Lower Rate
                </div>
          </div>
          
            <div
              className="text2">
                <div
                  className="percents">

                  XX.XX%
                </div>
                  <div
                    className="text3">
                    <b>Promotional APR</b><br></br>
                      now through<br></br>
                      <b>XX/XX/XXXX</b>
                    </div>
                    <div class="vertical-divider">
                        <p class="center-element"></p>
                      </div>
                    <div
                      className="text4">
                      A <b>XX.XX% variable APR</b><br></br>
                      will apply after the<br></br>
                      promotional period*
                  </div>
            </div>
         

              <div
                className="text5">
                Manage life's expenses by 
                transferring a balance
                to your Credit One Bank 
                account today
              </div>
                
          

          <Button
            style={{ 
              backgroundColor: 'orange', 
              color: 'white',
              margin: '10px'}}
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
            className="text"
            style={{fontSize: "12px"}}>
              A fee may apply.
          </p>
          <Footer />

      </div>
      

     
    </>
  );
}

export default App;
