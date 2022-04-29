import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Counter from './Counter.jsx';


const rootElem = document.querySelector('#root');
//const element = <App />

ReactDOM.render( <Counter />,rootElem);
