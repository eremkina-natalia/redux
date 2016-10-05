import React, { PropTypes } from 'react'
import Check from './Check'

const Todo = ({ onClick, completed, text, onCheck }) => (
  <div>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        background: completed ? '#04D3D7' : ''
      }}
    >
      {text}
    </li>

    <button className="changeBtn"
      onClick={e => {
        e.preventDefault()
        onCheck={onCheck}
      }} >
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
