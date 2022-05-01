import React, {Component} from 'react';
import './toggler.scss'

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            condition:"off"};
    }


    handleClick(e){
        this.setState({condition:this.state.condition==="off" ? this.state.condition="on" : this.state.condition="off"});
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