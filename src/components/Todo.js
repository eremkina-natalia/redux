import React, { PropTypes } from 'react'
//import Check from './Check'
import { addTodo, changeTodo } from '../actions'
import input from '../containers/AddTodo'
import { connect } from 'react-redux'

let Todo = ({ onClick, completed, text, changed, onTodoChange, onDel, dispatch }) => {
  let li
  return(
    <div>

      <button className="changeBtn"
        style={{
            visibility: completed ? 'hidden' : 'visible'
        }}
        onClick={onTodoChange => {
          onTodoChange.preventDefault()

          dispatch(changeTodo())
          input.value = text
        }}
      >
        <img src="mark.png" />
      </button>

      <li className="liTodo"
        onClick={onClick}
        ref={node => {
          li = node
        }}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          background: completed ? 'rgb(172, 183, 183)' : ''
        }}
      >
        {text}
        <button className="delBtn"
          onClick={onDel}
        >
          X
        </button>

      </li>

      <div className="clear"></div>
    </div>
  )
}

Todo = connect()(Todo)


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
