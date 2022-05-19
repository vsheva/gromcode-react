import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TemperatureInput from './EvenNumbers.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<TemperatureInput userId="facebook" />, rootElem);
