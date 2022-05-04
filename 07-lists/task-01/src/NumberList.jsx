import React from 'react';

// const NumberList = ({numbers}) => {
//     //const {numbers} = props
//     const numberElems = numbers.map(num => <li>{num}</li>);
//
//     return <ul>{numberElems}</ul>;
// };

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(num => (
        <li>{num}</li>
      ))}
    </ul>
  );
};
export default NumberList;
