//input:elem; output:elem


import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const rootElement = document.querySelector('#root');

const renderGreeting = elem => {

    const elementReact = (
        <div className="greeting">
            <h1  className="greeting__title">Hello, world!</h1>
            <p  className="greeting__text">I'm learning React</p>
        </div>
    )
    //что отрисовать,  где
    ReactDOM.render(elementReact,elem);
};


renderGreeting(rootElement);


