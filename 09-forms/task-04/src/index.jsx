import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Calculator from './Calculator.jsx';

const rootElem = document.querySelector('#root');

const users = [
  {
    name: 'John',
    age: 34,
    id: 'id-0',
  },
  {
    name: 'Valerii',
    age: 15,
    id: 'id-1',
  },
  {
    name: 'Ivan',
    age: 21,
    id: 'id-2',
  },
];

ReactDOM.render(<Calculator users={users} />, rootElem);
