import React, {Component} from 'react';
import './toggler.scss'

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            condition:"off"};
    }


    handleClick(){

        this.setState({condition:this.state.condition==="off" ? "on" : "off"});
    }


    render() {
        return (
            <button className="toggler" onClick={()=>this.handleClick()}>
                {this.state.condition}
                </button>
        );
    }
}


export default Toggler;