import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Todo } from '../components/Todo'

let AddTodo = ({ dispatch })=> {
  let input;
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
        }}  placeholder="What todo?"  />
        <button type="submit" className="toDoBtn">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
