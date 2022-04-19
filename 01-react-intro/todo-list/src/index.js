// should render following html

// <h1 class="title">Todo List</h1>

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const div = document.querySelector("#root")

const elementReact = (
    <div className="greeting">
        <h1  className="title">Todo List</h1>
    </div>
)


ReactDOM.render(elementReact,div);

