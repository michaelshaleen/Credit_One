import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function Accept() {
  const[header, setHeader] = useState(true);

  const acceptBtn = () => {
    alert("Clicked")
    setHeader(false)
    // if(!header){
    //   class_name = "white_background"
    // } else if (header){
    //   class_name = "blue_background"
    // }
    // if this is true show this background
    // if false...
    //when clicked change this

  }
  return (
    <>
    <Button
      className="white_background"
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
