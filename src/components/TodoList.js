import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = function({ todos, onTodoClick, onTodoDel }){
  let ul
  return (
    <ul className="border">
    {todos.map(todo => {
      return (<Todo
        key={todo.id}
        {...todo}
        onClick={ ()=>
          onTodoClick(todo.id)}
        onDel={()=>
          onTodoDel(todo.id, todo.text)}
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
  onTodoClick: PropTypes.func.isRequired,
  onTodoDel: PropTypes.func.isRequired
}

export default TodoList
