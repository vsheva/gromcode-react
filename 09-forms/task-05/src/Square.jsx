import React from 'react';

// const props={
//     onClick: ()=> "function"
//     value:"x"
// };
// const {value} =props;
//const {onclick} =props;
//const{onclick, value} = props

const style = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

const Square = ({ value, onClick }) => (
  <button style={style} className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;

//BASE PROJECT

//VERSION-1
// const Square = ({value, onClick}) =>
//     (
//         <button className="square" onClick={onClick}>
//             {value}
//         </button>
//     );
//
//
// export default Square;

//VERSION-2
// const Square = (props) =>
//     (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
//
//
// export default Square;
