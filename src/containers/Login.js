import React from 'react'
import { connect } from 'react-redux'
import { loginTodo } from '../actions'

let Login = ({ dispatch, onClick }) => {
  let input
  return (
    <header>

      <form className="formLogin" onSubmit={e => {
        e.preventDefault() //если будет вызван данный метод,то действие события по умолчанию не будет выполнено
        if (!input.value.trim()) { //удаляет пробельные символы с начала и конца строки
          return
        }
        dispatch(loginTodo(input.value)) //метод store, он отправляет в redux объект, называемый action
        input.value = ''


      }}>

      <input className="inputLogin" name="login" placeholder="enter login" ref={ login => {
        input = login
      }}  />

      <input className="inputPswd" type="password" name="password" placeholder="enter pswd"
      ref={ pswd => {
        input = pswd
      }} />

      <label className="greet">
        Привет,loginTodo(input.value)
      </label>

        <button type="submit" className="signInBtn" onClick={onClick }>
          Sign In
        </button>

      </form>
    </header>
  )
}
Login = connect()(Login)

export default Login
