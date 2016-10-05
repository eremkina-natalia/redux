import React from 'react'
import { connect } from 'react-redux'


let Login = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
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
Login = connect()(Login)

export default Login
