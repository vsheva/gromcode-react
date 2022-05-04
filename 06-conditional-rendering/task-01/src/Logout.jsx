import React from 'react';
import './logout.scss';

const Logout = props => {
  return <button onClick={props.onLogout}>Logout</button>;
};

export default Logout;
