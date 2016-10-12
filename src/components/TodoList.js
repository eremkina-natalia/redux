import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoChange, onTodoDel }) => {
  let ul = document.querySelector('ul')
  return (
  <ul className="border">
  {todos.map(todo => {

    return (<Todo
      key={todo.id}
      {...todo}
      //все элементы в масиве
      onClick={() => onTodoClick(todo.id)}
      onChange={() => onTodoChange(todo.id, todo.text)}
      onDel={() => onTodoDel(todo.id, todo.text)}

    />)
    }
  )}
  </ul>
)
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
