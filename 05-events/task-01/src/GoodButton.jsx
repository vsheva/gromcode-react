import React, { Component } from 'react';
import "./goodButton.scss"

const GoodButton =() => (
        <button
            className="fancy-button"
            onClick={()=> alert("Good job!")}
        >
            Click me!
        </button>
    )





export default GoodButton;
