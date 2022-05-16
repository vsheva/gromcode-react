import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import User from './UserProfile.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<User userId="facebook" />, rootElem);
