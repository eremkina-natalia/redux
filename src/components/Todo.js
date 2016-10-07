import React, { PropTypes } from 'react'
import Check from './Check'
//import { addTodo } from '../actions'
import '../css/mark.png'

const Todo = ({ onClick, completed, text, Check, checked }) => (
  <div>
  <button className="changeBtn" onClick={onClick}
  style={{
    background: !completed ? 'none' : 'gray url(mark.png) no-repeat'
  }}
  ></button>
    <li className="liTodo"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        background: completed ? '#04D3D7' : '',
        fontSize: checked ? '15px' : '',
      //  visibility: checked ? 'hidden' : 'visible'
      }}
    >
      {text}
      <hr />
    </li>


    <button className="destroy"></button>

    <button className="deleteBtn">X</button>
    <div className="clear"></div>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
