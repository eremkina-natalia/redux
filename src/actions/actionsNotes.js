import * as types from '../constants/ActionTypesNote';

export function addNote(id, text, color){
  return{
    type: types.ADD_NOTE,
    id,
    text,
    color
  };
}

export function deleteNote(){
  return{
    type: types.DELETE_NOTE
  }
}
