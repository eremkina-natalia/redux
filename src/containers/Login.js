import React from 'react'
import { connect } from 'react-redux'
import { loginTodo } from '../actions'

let Login = ({ dispatch }) => {
  let input
  return (
    <div>

      <form className="formLogin" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(loginTodo(input.value))
        input.value = ''


      }}>

      <input className="inputLogin" name="login" ref={ login => {
        input = login
      }}  />

      <input className="inputPswd" type="password" name="password"
      ref={ pswd => {
        input = pswd
      }} />

        <button type="submit" className="signInBtn">
          Sign In
        </button>

      </form>
    </div>
  )
}
Login = connect()(Login)

export default Login
