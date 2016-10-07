import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import Masonry from 'masonry-layout'

const colors = ['#beecc2','#ecc0be','#e5beec',
'#b000d0', '#00d0b3', '#ede69b', '#fb00ff', '#0043ff', '#00ff37',
'#ffc800', '#ff0000'];

var AddNote = React.createClass({
  getInitialState: function(){
    return{
        text: ''
    };
  },

  handleTextChange: function(ev){
    this.setState({
      text: ev.target.value
    });
  },

  handleAddNote: function(){
    var newNote = {
      text: this.state.text,
      color: colors[Math.floor(Math.random()*10)],
      id: Date.now()
    };
    this.props.onAddNote(newNote);
    this.setState({
      text: ''
    });
  },

  render: function(){
    return(
      <div className="addNote">
        <input
          placeholder="Enter your note here..."
          rows={5}
          className="inputNote"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <button className="addBtn"
          onClick={this.handleAddNote}>
          Add
        </button>
      </div>
    );
  }
});

export default AddNote
