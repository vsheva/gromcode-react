import React, {Component} from 'react';
import './toggler.scss'

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            condition:"Off"};
    }


    handleClick(){
        this.setState({condition:this.state.condition==="Off" ? this.state.condition="On" : this.state.condition="Off"});
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