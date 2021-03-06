import './No.css';
import { Button } from '@material-ui/core';

import React from 'react'

function No() {


  const noBtn = () => {
    window.open("https://www.creditonebank.com/", "_blank");
  }

  
  return (
    <Button
            style={{ 
              backgroundColor: 'grey', 
              color: 'black', 
              textTransform: "capitalize",
          }}
            variant="contained" 
            color="primary"
            onClick={noBtn}>
              No Thanks
          </Button>
  )
}

export default No;
