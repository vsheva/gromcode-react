import React from 'react';
import ReactDOM from 'react-dom';
import ConnectionStatus from './ConnectionStatus.jsx';
import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(<ConnectionStatus />, rootElem);
