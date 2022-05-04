import React, { Component } from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

//1.({isLoggedIn})              урок 6, 07:28 видео
const Greeting = props => {
  //2.const {isLoggedIn} = props
  //2.if(isLoggedIn)

  //1.if(isLoggedIn)
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
