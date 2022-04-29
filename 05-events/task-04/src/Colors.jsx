import React, {Component} from 'react';
import './colors.scss'

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {

    putBackgroundColor(color) {
        document.body.style.backgroundColor = color
    }


    render() {
        return (
            <div className="colors">
               <button style={{backgroundColor:RED}} className="colors_button" onClick={()=>this.putBackgroundColor(RED)} />
               <button style={{backgroundColor:GREEN}} className="colors_button" onClick={()=>this.putBackgroundColor(GREEN)}/>
               <button style={{backgroundColor:BLUE}} className="colors_button" onClick={()=>this.putBackgroundColor(BLUE)}/>
            </div>
        );
    }

}


export default Colors;