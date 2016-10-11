import React from 'react'
import { connect } from 'react-redux'
import { loginTodo } from '../actions'

let Login = ({ dispatch, onClicke }) => {
  let inputLogin
  return (
    <header>
    <a href="" className="signIn" onclick >Sign In</a>

      <form className="formLogin" onSubmit={e => {
        e.preventDefault()
        //если будет вызван данный метод,то действие события по умолчанию не будет выполнено
        if (!inputLogin.value.trim()) {
          //удаляет пробельные символы с начала и конца строки
          return
        }
        dispatch(loginTodo(inputLogin.value))
        //метод store, он отправляет в redux объект, называемый action
        inputLogin.value = ''

      }}


      >

      <input className="inputLogin" name="login" placeholder="enter login" ref={ login => {
        inputLogin = login
      }}  />

      <input className="inputPswd" type="password" name="password" placeholder="enter pswd"
      ref={ pswd => {
        inputLogin = pswd
      }} />

      <label className="greet">
        Привет,loginTodo(inputLogin.value)
      </label>

        <button type="submit" className="signInBtn" onClick={onClicke }>
          Sign In
        </button>

      </form>



    </header>
  )
}
Login = connect()(Login)

export default Login
