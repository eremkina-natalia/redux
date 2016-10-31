import React, {Component} from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import AddNote from '../containers/AddNote'
import NotesGrid from './NotesGrid'


var AppNotes = React.createClass({

  getInitialState: function(){
    return{
      notes: [
        {
          id: 0,
          text: "https://maxfarseer.gitbooks.io/react-router-course-ru/content/podklyuchaem_react-router.html",
          color: "#7ac391"
        },
        {
          id: 1,
          text: "Получение данных с помощью Ajax Получение данных с помощью Ajax",
          color: "#76ffa6"
        },
        {
          id: 2,
          text: "Свойства и состояние Свойства и состояние",
          color: "#c4ffc4"
        },
        {
          id: 3,
          text: "Разделение компонента Разделение компонента",
          color: "#e2ff87"
        },
        {
          id: 4,
          text: "Презентационные компоненты Презентационные компоненты",
          color: "#ffe003"
        },
        {
          id: 5,
          text: "Презентационные компоненты Презентационные компоненты",
          color: "#f9a100"
        },
        {
          id: 6,
          text: "Презентационные компоненты Презентационные компоненты",
          color: "rgb(255, 140, 106)"
        },
        {
          id: 7,
          text: "Презентационные компоненты Презентационные компоненты",
          color: "#ff0000"
        }
      ]
    };
  },

  componentDidMount: function(){
    var localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes) {
      this.setState({
        notes: localNotes
      });
    }
  },

  componentDidUpdate: function(){
    this._updateLocalStorage();
  },

  handleDeleteNote: function(note){
    var noteId = note.id;
    var newNotes = this.state.notes.filter(function(note){
      return note.id !== noteId;
    });
    this.setState({ notes: newNotes });
  },

  handleAddNote: function(newNote){
    var newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  },

  render: function(){
    return(
      <div className="appNotes">
        <AddNote onAddNote={this.handleAddNote} />
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleDeleteNote} />
      </div>
    );
  },

  _updateLocalStorage: function(){
    var notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }
});

export default AppNotes
