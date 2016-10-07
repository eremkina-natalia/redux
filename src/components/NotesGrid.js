import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import Masonry from 'masonry-layout'
import Note from './Note'

var NotesGrid = React.createClass({

  componentDidMount: function(){
    var grid = this.refs.grid;
    this.msnry = new Masonry(grid, {
      itemSelector: '.note',
      columnWidth: 100,
      gutter: 5,
      isFitWidth: true
    });
  },

  componentDidUpdate: function(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length){
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  },

  render: function(){
    var onNoteDelete = this.props.onNoteDelete;
    var li
    return(
      <div className="notesGrid" ref="grid">
        {this.props.notes.map(function(note) {
          return(
            <Note
              key={note.id}
              color={note.color}
              onDelete={onNoteDelete.bind(null, note)}
              ref={node => {
                li = node
              }}
            >
              {note.text}
            </Note>
          );
        })
      }
      </div>
    );
  }
});

export default NotesGrid
