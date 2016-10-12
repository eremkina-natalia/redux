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

export function changeTodo(id,text){
  return{
    type: types.CHANGE_TODO,
    id,
    text
  };
}

export function deleteTodo(id, text) {
  return {
    type: types.DELETE_TODO,
    id,
    text
  };
}
