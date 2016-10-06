import React, { PropTypes } from 'react'
import { addTodo } from '../actions'

const Check = ({ todos,  text }) => (
    todos.map((todo) => //создает массив элементов,прогоняя кажд эл-т через ф-ю обратного вызова
      <Todo
      {...todo}
        key={todo.id}
          onClick={() =>
            addTodo('.toDoInput'.value).text = todo.id.text
          }
          //document.getElementByClassName('.toDoInput').value = todo.id.text
      />
    )
)

Check.propTypes = {
  onCheck: PropTypes.func.isRequired,
  todos: PropTypes.string.isRequired
}

export default Check
