import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import GoodButton from './GoodButton.jsx';

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <GoodButton
 userData={userData}
  />,
  rootElem
);
