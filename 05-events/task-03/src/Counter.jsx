import React, {Component} from 'react';
import './counter.scss'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter:0};

        //this.decrease= this.decrease.bind(this)
    }
    //1 bind(this)
    decrease(){
        this.setState({counter: this.state.counter - 1});
    }
     //2 новый синтаксис
    increase = () => {
        this.setState({counter: this.state.counter + 1});
    }
      //3 контекст ()=> this.reset()
    reset () {
        this.setState({counter:0});
    }


    render() {
        return (
            <div className="counter">
                <button data-action="decrease" className="counter__button" onClick={this.decrease.bind(this)} >
                    -
                </button>
              <span className="counter__value" onClick={()=>this.reset()}>
                  {this.state.counter}
              </span>
                <button data-action="increase" className="counter__button" onClick={this.increase}>
                    +
                </button>
            </div>
        );
    }

}


export default Counter;