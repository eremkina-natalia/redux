import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'

import Login from '../containers/Login'

import VisibleTodoList from '../containers/VisibleTodoList'

//import IndexedDB from '../utils/IndexedDB'


const App = () => (
  <div>
    <div>
    <Login />
    </div>
    <h1>Todo list</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />



  </div>
)

export default App
