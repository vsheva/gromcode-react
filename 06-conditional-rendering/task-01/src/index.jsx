import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConnectionStatus from './ConnectionStatus.jsx';

const rootElem = document.querySelector('#root');
//const element = <Game />

ReactDOM.render(<ConnectionStatus />, rootElem);
