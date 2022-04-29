import React, { Component } from 'react';

const GoodButton =() => (
    <button
        className="fancyButton"
        onClick={()=> alert("Good job!")}
    >
      Click me!
    </button>
)



export default GoodButton;
