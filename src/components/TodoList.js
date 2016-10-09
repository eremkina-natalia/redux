import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoCheck }) => (
  <ul>
  {todos.map(todo => {
    console.log({...todo})
    return (<Todo
      key={todo.id}

      {...todo} //это такой оператор расширения, кот позволяет хранить состояние неизменным
      onClick={() => onTodoClick(todo.id)}
      onCheck={() => onTodoCheck(todo.id, todo.text)}
    />)
    }
  )}
  </ul>
)

/*const TodoCheckList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoCheck(todo.id)}
      />
    )}
  </ul>
)*/

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
