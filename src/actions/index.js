// action описывает, какие изменения необходимо сделать
import * as types from '../constants/ActionTypes';

let nextTodoId = 0
export function addTodo(text){
  return{
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  };
}

export function setVisibilityFilter(filter){
  return{
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}

export function toggleTodo(id){
  return{
    type: types.TOGGLE_TODO,
    id
  };
}

export function loginTodo(login){
  return{
    type: types.LOGIN_TODO,
    login
  };
}

export function checkTodo(id, text){
  return{
    type: types.CHECK_TODO,
    id,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}
