import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="Header" >

<Jumbotron fluid style={{backgroundColor: "rgb(81, 73, 126)", textAlign:"center"}}>

    <h1>Simple Note App</h1>
   
</Jumbotron>


    </div>
  );
}

export default Header;