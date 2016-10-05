import React, { PropTypes } from 'react'

const Check = ({ todos, onCheck, text }) => (
    todos.map(todo =>
      <Todo
        key={todo.id}
        onCheck={() =>
          document.getElementByClassName('.toDoInput').value = todo.id.text}
      />
    )
)

Check.propTypes = {
  onCheck: PropTypes.func.isRequired,
  todos: PropTypes.string.isRequired
}

export default Check
