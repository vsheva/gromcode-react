import React, {Component} from 'react';
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";


class Status extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status:true
        };
    }


    render() {

        return (<div>
            this.state.status ? <Offline/> : <Online/>
        </div>)
    }
}


export default Status;