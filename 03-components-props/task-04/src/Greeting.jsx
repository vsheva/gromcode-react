import React from 'react';
import './greeting.scss';

function Greeting(props) {
    function _calculateAge(birthday) { // birthday is a date
        let ageDifMs = Date.now() - birthday.getTime();
       let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${_calculateAge(props.birthDate)} years old`}
        </div>
    );
}


export default Greeting;