import React from 'react';
import { Button } from '@material-ui/core';

function Accept() {

  const acceptBtn = () => {
    alert("Clicked")
  }
  return (
    <>
    <Button
      style={{ backgroundColor: 'orange', color: 'white' }}
      variant="contained" 
      color="primary" 
      onClick={acceptBtn}>
        Accept Now
    </Button>
      
    </>
  )
}

export default Accept;
