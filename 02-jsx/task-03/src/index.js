import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');

const renderTime = time => {
    const seconds = new Date(time).getSeconds();

    const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
    const textColor = seconds % 2 === 1 ? '#fff' : '#000';
    const style = {
        color: textColor,
        backgroundColor: backgroundColor,
    };

    const elementReact = (
        <div className="seconds" style={style}>
            {`Now is ${seconds}`}
        </div>
    );

    ReactDOM.render(elementReact, rootElem);
};

renderTime(new Date());

setInterval(() => (renderTime(new Date())))