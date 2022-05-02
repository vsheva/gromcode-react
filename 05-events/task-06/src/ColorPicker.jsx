import React, {Component} from 'react';
import './colorPicker.scss'


class ColorPicker extends Component {
constructor(props) {
    super(props)
    this.state = {buttonName: ""};
}
    changeTitle(text){
            this.setState({buttonName: text});
    }

    clearTitle(){
            this.setState({buttonName: ""});
    }


    render() {
        return (
            <div>
                <div className="picker__title">{this.state.buttonName}</div>
                <div>
                    <button className="picker__button picker__button_coral"  onMouseEnter={()=>this.changeTitle("Coral")} onMouseLeave={()=>this.clearTitle()}></button>
                    <button className="picker__button picker__button_aqua" onMouseEnter={()=>this.changeTitle("Aqua")} onMouseLeave={()=>this.clearTitle()} ></button>
                    <button className="picker__button picker__button_bisque" onMouseEnter={()=>this.changeTitle("Bisque")} onMouseLeave={()=>this.clearTitle()}></button>
                </div>
            </div>

            // <div className="colors">
            //    <button style={{backgroundColor:RED}} className="colors__button" onClick={()=>this.setBackgroundColor(RED)} />
            //    <button style={{backgroundColor:GREEN}} className="colors__button" onClick={()=>this.setBackgroundColor(GREEN)}/>
            //    <button style={{backgroundColor:BLUE}} className="colors__button" onClick={()=>this.setBackgroundColor(BLUE)}/>
            // </div>
        );
    }

}


export default ColorPicker;