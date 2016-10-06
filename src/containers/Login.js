import React from 'react'
import { connect } from 'react-redux'
import { loginTodo } from '../actions'

let Login = ({ dispatch }) => {
  let input
  return (
    <div>

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

        <button type="submit" className="signInBtn">
          Sign In
        </button>

      </form>
    </div>
  )
}
Login = connect()(Login)

export default Login
