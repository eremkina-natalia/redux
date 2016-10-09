import React, { PropTypes } from 'react'
//import Check from './Check'
import { addTodo } from '../actions'

const Todo = ({ onClick, completed, text, Check, checked, onCheck }) => (
  <div>
    <li className="liTodo"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        background: completed ? '#04D3D7' : ''
      }}
    >
      {text}
      <hr />
    </li>

    <button className="changeBtn"
      onClick={onCheck}
      style={{
          visibility: checked ? 'hidden' : 'visible'
      }}
    >
      Change
    </button>
    <div className="clear"></div>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
