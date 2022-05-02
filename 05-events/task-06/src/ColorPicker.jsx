import React, {Component} from 'react';
import './colorPicker.scss'

class ColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {title: ""};
    }


    changeText(text) {
        this.setState({title: text});
    }


    clearTitle() {
        this.setState({title: ""});
    }

    render() {
        return (
            <div>
                <div className="picker__title">{this.state.title}</div>
                <div>
                    <button className="picker__button picker__button_coral" onMouseEnter={()=>this.changeText("Coral")} onMouseLeave={()=>this.clearTitle()}></button>
                    <button className="picker__button picker__button_aqua" onMouseEnter={()=>this.changeText("Aqua")} onMouseLeave={()=>this.clearTitle()}></button>
                    <button className="picker__button picker__button_bisque" onMouseEnter={()=>this.changeText("Bisque")} onMouseLeave={()=>this.clearTitle()}></button>
                </div>
            </div>

        );
    }
}

export default ColorPicker;






































//
// class ColorPicker extends Component {
// constructor(props) {
//     super(props)
//     this.state = {buttonName: ""};
// }
//     changeTitle(text){
//             this.setState({buttonName: text});
//     }
//
//     clearTitle(){
//             this.setState({buttonName: ""});
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <div className="picker__title">{this.state.buttonName}</div>
//                 <div>
//                     <button className="picker__button picker__button_coral"  onMouseEnter={()=>this.changeTitle("Coral")} onMouseLeave={()=>this.clearTitle()}></button>
//                     <button className="picker__button picker__button_aqua" onMouseEnter={()=>this.changeTitle("Aqua")} onMouseLeave={()=>this.clearTitle()} ></button>
//                     <button className="picker__button picker__button_bisque" onMouseEnter={()=>this.changeTitle("Bisque")} onMouseLeave={()=>this.clearTitle()}></button>
//                 </div>
//             </div>

    //     );
    // }
//
// }

