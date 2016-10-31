import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends Component {
  render(){
    return(
      <div>
        <h1> Todo list </h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}
