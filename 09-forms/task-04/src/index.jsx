import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserList from './UserList.jsx';

const rootElem = document.querySelector('#root');

const users = [
  {
    name: 'John',
    age: 34,
    id: 1,
  },
  {
    name: 'Valerii',
    age: 15,
    id: 2,
  },
  {
    name: 'Ivan',
    age: 21,
    id: 23,
  },
];

ReactDOM.render(<UserList users={users} />, rootElem);
