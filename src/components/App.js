import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import Login from '../containers/Login'
import VisibleTodoList from '../containers/VisibleTodoList'
import Dexie from 'dexie';

//import Grid  from 'react-bootstrap/lib/Grid'
//import Nav from 'react-bootstrap/lib/Nav'
//import Navbar from 'react-bootstrap/lib/Navbar'
//import NavItem  from 'react-bootstrap/lib/NavItem'
//import '/css/bootstrap.css'
//import '../utils/Dexie.js'
//import IndexedDB from '../utils/IndexedDB'
//import '../utils/mySql'

const App = () => (
  <div>
    <div>
    <Login />
    </div>
    <h1> Todo list </h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
