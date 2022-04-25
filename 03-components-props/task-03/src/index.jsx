import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const user = {
  name: 'Valerii',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/9919?s=460&v=4',
};

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Comment
  author={user}
  text="I am in React!"
  date={new Date()}
  />,
  rootElem
);
