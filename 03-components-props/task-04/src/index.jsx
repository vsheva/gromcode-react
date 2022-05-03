import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Online from './Online.jsx';


const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Online
  firstName="John"
  lastName="Doe"
  birthDate= {new Date('2019-12-31T11:11:11.819Z')}
  />,
  rootElem
);
