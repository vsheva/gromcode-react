import React from 'react';
import "./goodButton.scss"


class GoodButton extends React.Component {
    handleClick(e) {
         console.log(e.target.textContent);
         console.log(e);
        alert("Click me!")
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
