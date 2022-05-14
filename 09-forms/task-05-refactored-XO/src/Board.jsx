import React from 'react';
import Square from './Square.jsx';

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '150',
  height: '150',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

//const{squares,onClick}=props
const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} onClick={() => onClick(i)} value={square} />
    ))}
  </div>
);

export default Board;














{
  /*<Square value="1" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="2" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="3" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="4" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="5" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="6" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="7" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="8" onClick={() => onClick("dummy value")} />*/
}
{
  /*<Square value="9" onClick={() => onClick("dummy value")} />*/
}

//original

// import React, { Component } from 'react';
// import Square from './Square.jsx';
//
// class Board extends Component {
//   renderSquare(i) {
//     return (
//         <Square
//             value={this.props.squares[i]}
//             onClick={() => this.props.onClick(i)}
//         />
//     );
//   }
//
//   render() {
//     return (
//         <div>
//           <div className='board-row'>
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className='board-row'>
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className='board-row'>
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//     );
//   }
// }
//
// export default Board;