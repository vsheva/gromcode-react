import React,{useState} from 'react';
import './TicTacToe.css'

const TicTacToe = () => {

    const [turn, setTurn] = useState("x")
    const [cells, setCells]= useState(Array(9).fill(null))

    const handleClick = (num) => {
        if (cells[num] !== null) {
            return;
        }

      let squares = [...cells] // что это ?
        if (turn === "x") {
            squares[num] = "x"  // что это
            setTurn('o')
        } else {
            squares[num] = "o"  // что это
            setTurn('x')
        }
        setCells(squares) // обновляем state и сохраняем, что было кликнуто
        console.log(squares) // что это
    }

    const Cell = ({num}) => {
        return <td onClick={() => handleClick(num)}>
            {cells[num]}
        </td>   //{cells[num]} - что это
    }


    return (
        <div className="container">
            <table>
                Turn:{turn}
                <tbody>
                <tr>
                    <Cell num={"1"}/>
                    <Cell num={"2"}/>
                    <Cell num={"3"}/>
                </tr>
                <tr>
                    <Cell num={"4"}/>
                    <Cell num={"5"}/>
                    <Cell num={"6"}/>
                </tr>
                <tr>
                    <Cell num={"7"}/>
                    <Cell num={"8"}/>
                    <Cell num={"9"}/>
                </tr>
                </tbody>
            </table>
        </div>
    );
};


export default TicTacToe;