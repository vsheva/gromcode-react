import React, {Component} from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

//1.({isLoggedIn})
const Greeting = props => {
    //2.const {isLoggedIn} = props
    //if(isLoggedIn)

    //1.if(isLoggedIn)
    if (props.isLoggedIn) {
        return<UserGreeting />
    }
    return <GuestGreeting />
}




export default Greeting;