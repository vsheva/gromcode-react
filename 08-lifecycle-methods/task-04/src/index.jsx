import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Board from './Board.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Board userId="facebook" />, rootElem);
