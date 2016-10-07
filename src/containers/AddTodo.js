import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form className="todoform" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''

      }}>
        <input className="toDoInput" ref={node => {
          input = node
        }} />
        <button type="submit" className="toDoBtn">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

// это два вызова ф-и, первый аргумент-ф-я,кот должна возвращать объект,
//во вторую ф-ю необходимо передать компонент react

export default AddTodo
