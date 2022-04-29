import React from 'react';
import "./goodButton.scss"


class GoodButton extends React.Component {
    handleClick(e) {
        alert(e.target.textContent)
    }

    render() {

        return (
            <button className="fancy-button" onClick={this.handleClick}>
                Click me!
            </button>
        );
    }

}

//
// const GoodButton = () => (
//     <button
//         className="fancy-button"
//         onClick={() => alert("Good job!")}
//     >
//         Click me!
//     </button>
// )


export default GoodButton;
