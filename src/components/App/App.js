// import images
import logo from '../../assets/logo.svg';
import white from '../../assets/logo_white.svg';
import leaf from '../../assets/leaf.jpg';
import userImg from '../../assets/image.jpg';
import { Button } from '@material-ui/core';

// components
import Footer from '../Footer/Footer';
import No from '../NoBtn/No';
import './App.css';
// import Header from '../Header/Header';
// import Accept from '../Accept_Btn/Accept';
import React, { useState } from 'react';


function App() {
  // used for conditional rendering on header
  const[header, setHeader] = useState(true);
  

  const acceptBtn = () => {
    if(header){
      setHeader(false);
    }else{
      setHeader(true); 
    }
  }

  return (
    <>
    {/* if true show white background and
    logo image, if false show blue background and 
    white image */}
     <header
       className={ header ? 'white' : 'blue' }>
          {header && <img src={logo} alt="logo" className="logo"/> }
          {!header && ( <img src={white} alt="logo" />)}
    </header>
      
      <div className="body">
          <div className="text1">
                <div>
                  Consolidate Your Debt
                  {/* <img className="userImg" src={userImg} alt="user_img" /> */}
                  
                </div>
                <div>
                    With A Lower Rate
                </div>
          </div>
           <div className="text2">
                <div className="percents">
                    <b>XX.XX%</b>
                </div>
                <div className="text3">
                  <b>Promotional APR</b><br></br>
                  now through<br></br>
                  <b>XX/XX/XXXX</b>
                </div>  
                <div className="divide bar"></div>
                
                {/* <div class="h-divider">
                    <div class="shadow"></div>
               </div> */}
                   
                <div className="text4">
                   A <b>XX.XX% variable APR</b><br></br>
                   will apply after the<br></br>
                   promotional period*
                </div> 
            </div>
            <div className="text5">
                Manage life's expenses by 
                transferring a balance
                to your Credit One Bank 
                account today
            </div>
          <div className="buttonDiv">
              <Button
                  style={{ 
                    backgroundColor: 'orange', 
                    color: 'white',
                    margin: '10px',
                    textTransform: "capitalize"}}
                    variant="contained" 
                    color="primary" 
                    onClick={acceptBtn}>
                    Accept Now
              </Button>
              {/* no thanks button */}
            <No />
        </div>  
          <p
            className="text6"
            style={{fontSize: "12px"}}>
              A fee may apply.
          </p>
          <Footer />
      </div>
      
    </>
  );
}

export default App;
