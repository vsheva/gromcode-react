import React, { useState } from 'react';
import { calculateWinner } from '../helpers.js';
import Board from './Board.jsx';

const styles = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  // const board=useState("state")
  // board[0] this is the state
  // board[1] this is the setter for our state

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    // if user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    //put an X or O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);

    setXisNext(!xIsNext); //return the oposite value
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0); //if 0=> true, else false
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  //
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <div>{status}</div>
        {renderMoves()}
      </div>
    </>
  );
};
export default Game;

//<p>{winner ? 'Winner ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>

//ORIGINAL
// import React from 'react';
// import Board from './Board.jsx';
//
// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             history: [
//                 {
//                     squares: Array(9).fill(null),
//                 },
//             ],
//             stepNumber: 0,
//             xIsNext: true,
//         };
//     }
//
//     handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();
//
//         if (this.calculateWinner(squares) || squares[i]) {
//             return;
//         }
//
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             history: history.concat([
//                 {
//                     squares: squares,
//                 },
//             ]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext,
//         });
//     }
//
//     jumpTo(step) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: (step % 2) === 0,
//         });
//     }
//
//     calculateWinner(squares) {
//         const lines = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];
//         for (let i = 0; i < lines.length; i++) {
//             const [a, b, c] = lines[i];
//             if (
//                 squares[a] &&
//                 squares[a] === squares[b] &&
//                 squares[a] === squares[c]
//             ) {
//                 return squares[a];
//             }
//         }
//         return null;
//     }
//
//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = this.calculateWinner(current.squares);
//
//   //      const moves = history.map((step, move) => {
//             const desc = move ? `Go to move #${move}` : `Go to game start`;
//
//             return (
//                 <li key={move}>
//                     <button onClick={() => this.jumpTo(move)}>{desc}</button>
//                 </li>
//             );
//         });
//         let status;
//         if (winner) {
//             status = `Winner: ${winner}`;
//         } else {
//             status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
//         }
//
//         return (
//             <div className='game'>
//                 <div className='game-board'>
//                     <Board
//                         squares={current.squares}
//                         onClick={(i) => this.handleClick(i)}
//                     />
//                 </div>
//                 <div className='game-info'>
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Game;
