// <h1>Search Form</h1>
// <div>
//     <input type="text" />
//     <button>Search</button>
// </div>


import React from "react"
import ReactDOM from "react-dom"

const rootElem = document.querySelector("#root")

const elementReact = (
    <>
        <h1>Search Form</h1>
        <div>
            <input type="text"/>
            <button>Search</button>
        </div>
    </>
);


ReactDOM.render(elementReact, rootElem);
