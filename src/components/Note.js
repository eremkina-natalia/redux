import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Note extends Component{
  render(){
    var style = { backgroundColor: this.props.color };
    return(
      <div className="note" style={style}>
        <span className='noteDel' onClick={this.props.onDelete}>
          x
        </span>
        { this.props.children }
      </div>
    );
  }
};
